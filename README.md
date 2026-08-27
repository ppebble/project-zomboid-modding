# Project Zomboid Mods & Tools

Public catalog for Project Zomboid Build 42 tools and narrowly scoped
compatibility mods maintained by [ppebble](https://github.com/ppebble).

Each project remains an independent Git repository with its own history,
dependencies, tests, installation path, and release lifecycle. This catalog
provides one place to discover them without merging unrelated source trees.

## Translation tools

| Project | Purpose | Distribution |
| --- | --- | --- |
| [PZ AI Translation Generator](https://github.com/ppebble/pz-ai-translation-generator) | Creates a separate local translation pack for untranslated Build 42 mod strings without modifying Workshop sources. | [Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3789612268) |

## Compatibility mods

| Project | Compatibility scope | Distribution |
| --- | --- | --- |
| [2D Wardrobe Skin Adapter Fix](https://github.com/ppebble/2dw-skin-adapter-fix) | Replaces broken 2Dimension Wardrobe skin-adapter rendering with safe native skin-tone selection. | Source repository |
| [Lifestyle + 2D Wardrobe Shower Compatibility](https://github.com/ppebble/lifestyle-2dw-shower-compatibility) | Keeps selected 2Dimension Wardrobe appearance slots equipped during Lifestyle baths and showers. | [Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3789887641) |
| [Take A Bath And Shower + 2D Wardrobe Compatibility](https://github.com/ppebble/tabas-2dw-shower-compatibility) | Uses TABAS's exclusion API to retain selected 2Dimension Wardrobe appearance slots while ordinary clothing follows TABAS's native flow. | [Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3790696431) |
| [CleanUI 42.20.4 Config Loader Fix](https://github.com/ppebble/cleanui-42-20-4-config-loader-fix) | Temporary compatibility patch for the missing CleanUI config loader in the referenced 42.20.4 update. | Temporary source release |

## Project rules

- Dependency Workshop and game files are never modified or redistributed.
- Compatibility patches stay limited to the reported integration boundary.
- Source tests, installed-file checks, and in-game verification are reported
  separately.
- Temporary fixes are removed when their upstream mods provide equivalent
  corrections.

## Clone the complete workspace

The repositories are intentionally not Git submodules. To clone all current
projects into sibling directories:

```powershell
.\scripts\clone-all.ps1
```

Pass `-Destination C:\path\to\workspace` to choose another directory. Existing
repositories are left untouched.
