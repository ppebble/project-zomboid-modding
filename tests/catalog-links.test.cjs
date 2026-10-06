const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const os = require("node:os");
const { execFileSync } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const readme = fs.readFileSync(path.join(root, "README.md"), "utf8");
const catalog = JSON.parse(fs.readFileSync(path.join(root, "catalog.json"), "utf8"));
const evidence = JSON.parse(fs.readFileSync(path.join(root, "docs/workshop-verification.json"), "utf8"));
const bySlug = new Map(catalog.map((entry) => [entry.slug, entry]));
const categories = new Set(["translation", "utility", "weapons", "scenario", "compatibility", "temporary", "history"]);
assert.equal(bySlug.size, catalog.length, "Project slugs must be unique");
assert.ok(Number.isFinite(Date.parse(evidence.checkedAt)), "Steam evidence needs a dated snapshot");
assert.equal(evidence.source, "https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/");

for (const entry of catalog) {
  assert.match(entry.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  assert.ok(categories.has(entry.category));
  assert.ok(["active", "historical"].includes(entry.state));
  assert.ok(["public", "private", "none"].includes(entry.sourceVisibility));
  assert.ok(readme.includes(entry.name), `Missing project: ${entry.slug}`);
  assert.ok(readme.includes(entry.summary), `Stale summary: ${entry.slug}`);
  if (entry.repository) {
    assert.equal(entry.repository, `https://github.com/ppebble/${entry.slug}`);
    assert.notEqual(entry.sourceVisibility, "none");
    assert.equal(readme.includes(`](${entry.repository})`), entry.sourceVisibility === "public");
  } else {
    assert.equal(entry.sourceVisibility, "none");
  }
  if (!entry.workshop) continue;
  assert.match(entry.workshop.id, /^\d+$/);
  assert.ok(["public", "unverified"].includes(entry.workshop.access));
  const workshopUrl = `https://steamcommunity.com/sharedfiles/filedetails/?id=${entry.workshop.id}`;
  assert.equal(readme.includes(workshopUrl), entry.workshop.access === "public");
  const item = evidence.items.find((item) => item.publishedfileid === entry.workshop.id);
  assert.ok(item, `Missing Steam evidence: ${entry.slug}`);
  if (entry.workshop.access === "public") {
    assert.equal(item.result, 1);
    assert.equal(item.visibility, 0);
    assert.equal(item.consumer_app_id, 108600);
    assert.ok(item.title);
  }
}

for (const [slug, workshopId] of Object.entries({
  "action-time-reducer": "3812917260",
  "guns-of-marz-attachment-workbench": "3798555914",
  "tabas-sct-shower-compatibility": "3808856966",
})) {
  assert.equal(bySlug.get(slug).workshop.id, workshopId, "Use our release ID, not a dependency ID");
}
for (const slug of ["tabas-lg-plumbing-compatibility", "soto-b42-20-emote-compatibility"]) {
  assert.equal(bySlug.get(slug).sourceVisibility, "private");
  assert.equal(bySlug.get(slug).workshop, null);
}
assert.equal(bySlug.get("simple-suppressors-gom-compatibility").state, "historical");
assert.equal(bySlug.get("true-music-addon-lsm03").workshop.access, "unverified");
assert.ok(!bySlug.has("safe-action-time"), "Do not duplicate the older ActionTimeReducer workspace");
assert.match(readme, /independent Git repository/);
assert.match(readme, /intentionally not Git submodules/);
assert.match(readme, /Source tests, installed-file checks, and in-game verification/);

const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "pz-catalog-test-"));
const destination = path.join(tempRoot, "destination");
const existing = path.join(destination, catalog[0].slug);
const dryRun = (flags = []) => execFileSync("pwsh", [
  "-NoProfile", "-File", path.join(root, "scripts", "clone-all.ps1"),
  "-Destination", destination, "-WhatIf", ...flags,
], { encoding: "utf8" });
const cloneUrls = (output) => [...output.matchAll(/Clone (https:\/\/github\.com\/ppebble\/[a-z0-9-]+)/g)].map((match) => match[1]);
try {
  const defaults = catalog.filter((entry) => entry.repository && entry.sourceVisibility === "public" && entry.state === "active");
  assert.deepEqual(cloneUrls(dryRun()), defaults.map((entry) => entry.repository));
  assert.ok(!fs.existsSync(destination), "WhatIf must not create directories or clone repositories");
  assert.deepEqual(cloneUrls(dryRun(["-IncludePrivate", "-IncludeHistorical"])), catalog.filter((entry) => entry.repository).map((entry) => entry.repository));
  fs.mkdirSync(existing, { recursive: true });
  const output = dryRun();
  assert.ok(output.includes(`Skipping existing path: ${existing}`));
  assert.deepEqual(cloneUrls(output), defaults.filter((entry) => entry.slug !== catalog[0].slug).map((entry) => entry.repository));
  assert.deepEqual(fs.readdirSync(existing), [], "Existing project folders must remain untouched");
} finally {
  if (fs.existsSync(existing)) fs.rmdirSync(existing);
  if (fs.existsSync(destination)) fs.rmdirSync(destination);
  fs.rmdirSync(tempRoot);
}

console.log(`Project Zomboid catalog checks passed (${catalog.length} projects; clone dry-runs verified).`);
