---
title: Switching from StarParse
description: How to migrate from StarParse to BARAS.
---

## Switching from StarParse

### Why Should I Swap?

---

## Key Differences

<!-- TODO: Table or list comparing StarParse vs BARAS behavior/concepts -->
<!-- Things like: overlays work differently, encounter definitions are TOML not XML, etc. -->

---

## Importing Your Timers and Effects

BARAS can import timers and effects from **StarParse XML exports**.

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

| StarParse Feature | BARAS Equivalent       |
| ----------------- | ---------------------- |
| Timers            | Encounter timers       |
| Effects/Overlays  | Effect tracker entries |

The import preview shows the count of items that will be imported before you confirm.

---

## What Doesn't Carry Over

<!-- TODO: Things that need to be reconfigured manually -->
<!-- Overlay positions, hotkeys, log directory, Parsely credentials, etc. -->

---

## Built-in Timers

<!-- TODO: List what ships with BARAS out of the box so StarParse users know they don't need to rebuild everything -->
<!-- Which operations/bosses have default timer definitions? -->
