const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const readme = fs.readFileSync(path.join(root, "README.md"), "utf8");
const cloneScript = fs.readFileSync(path.join(root, "scripts", "clone-all.ps1"), "utf8");

const repositories = [
  "pz-ai-translation-generator",
  "2dw-skin-adapter-fix",
  "lifestyle-2dw-shower-compatibility",
  "tabas-2dw-shower-compatibility",
  "cleanui-42-20-4-config-loader-fix",
];

for (const repository of repositories) {
  assert.match(readme, new RegExp(`https://github\\.com/ppebble/${repository}`));
  assert.match(cloneScript, new RegExp(`"${repository}"`));
}

assert.match(readme, /id=3789612268/);
assert.match(readme, /id=3789887641/);
assert.match(readme, /independent Git repository/);
assert.match(readme, /intentionally not Git submodules/);
assert.match(readme, /Source tests, installed-file checks, and in-game verification/);

console.log("Project Zomboid catalog contract passed.");
