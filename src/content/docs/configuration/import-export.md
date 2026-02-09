---
title: Importing & Exporting Custom Timers and Effects
description: Import and export encounter definitions, and migrate data from StarParse.
---

## Importing & Exporting Custom Timers and Effects

BARAS supports importing and exporting encounter definitions as TOML files, and importing timers and effects from StarParse XML exports.

---

## Exporting Encounter Definitions

Export encounter definitions to share with other BARAS users or to back up your customizations.

1. Open the **Encounter Builder** tab
2. Select the area you want to export
3. Click **Export Area** to save the entire area as a `.toml` file

![Export encounter](/screenshots/encounter-builder-main.png)

**What gets exported:**
- All boss encounter definitions in the area
- Timers, phases, counters, and challenges
- Entity definitions
- Raid challenge configurations

:::note
When exporting a **bundled** area (one that ships with BARAS), only your custom modifications are exported. The file will be named with a `_custom` suffix. When exporting a user-created area, the full definition is exported.
:::

---

## Importing Encounter Definitions

Import encounter definitions from `.toml` files shared by other users or exported from another BARAS installation.

1. Open the **Encounter Builder** tab
2. Select a target area (or leave unselected for new areas)
3. Click **Import**
4. Select a `.toml` file from the file picker
5. Review the **import preview** before confirming

### Import Preview

Before applying changes, BARAS shows a detailed preview of what will happen:

![Import preview modal](/screenshots/starparse-import.png)

The preview shows for each boss:
- **New bosses** — Bosses that don't exist in the target area (marked with a "new" tag)
- **Items to replace** — Existing timers, phases, or counters that will be overwritten
- **Items to add** — New items that will be added alongside existing ones
- **Items unchanged** — Items that already match and won't be modified

Items are grouped by type (timers, phases, counters, challenges, entities) for easy review.

Click **Import** to apply the changes, or **Cancel** to discard.

:::caution
Replacing items overwrites their existing definitions. If you've customized a timer that's being replaced, your changes will be lost. Export your current definitions first if you want a backup.
:::

---

## StarParse Import

BARAS can import timers and effects from **StarParse XML exports**, making it easy to migrate your existing setup.

![StarParse import](/screenshots/starparse-import.png)

### How to Import

1. In StarParse, export your timers/overlays as XML
2. In BARAS, go to the **Settings** tab
3. Find the **Import** section
4. Click **Import StarParse XML...**
5. Select your exported XML file
6. Review the preview showing what will be imported
7. Click **Import** to apply

### What Gets Imported

| StarParse Feature | BARAS Equivalent |
| ----------------- | ---------------- |
| Timers | Encounter timers |
| Effects/Overlays | Effect tracker entries |

The import preview shows the count of items that will be imported before you confirm.

:::tip
After importing, check the Encounter Builder and Effects Tracker to verify the imported items and adjust any settings that may need fine-tuning.
:::
