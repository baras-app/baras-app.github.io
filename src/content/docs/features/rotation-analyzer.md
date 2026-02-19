---
title: Rotation Analyzer
description: Visualize ability rotations with cycle breakdowns, GCD tracking, and off-GCD weave analysis.
---

## Rotation Analyzer

The Rotation Analyzer is a tab within the [Data Explorer](/features/data-explorer) that visualizes a player's ability rotation by splitting their ability timeline into repeating cycles around an **anchor ability**.

Access it from the **Rotation** tab in the Data Explorer.

![Rotation analyzer overview](/screenshots/rotation-overview.png)

---

## How It Works

The analyzer splits a player's ability usage into **cycles** based on an anchor ability you choose. The anchor ability
is typically the starting ability of a DPS player's chosen rotation, but can be any ability on or off GCD.

Each cycle shows:

- **GCD abilities** — These abilities trigger the global cooldown in-game, displayed as icons in a horizontal row
- **Off-GCD weaves** — Abilities used between GCDs, stacked above the GCD ability cast they were woven with

## Reading the Visualization

Each row represents one **rotation cycle** — the abilities used between two consecutive uses of the anchor ability.

### Ability Icons

- **Large icons (bottom row)** — GCD abilities, shown in the order they were used
- **Small icons (stacked above)** — Off-GCD abilities woven between GCDs

Off-GCD weaves are stacked with the most recent weave closest to the GCD ability it was paired with. Hover over any icon to see the full ability name.

### Per-Cycle Stats

Each cycle displays key performance metrics:

| Stat     | Description                                                   |
| -------- | ------------------------------------------------------------- |
| DPS      | Damage per second during this cycle                           |
| EHPS     | Effective healing per second (shown only if healing occurred) |
| Crit     | Critical hit percentage for the cycle                         |
| Duration | Length of the cycle in seconds                                |

## Cast Timing

The time between GCD ability casts is displayed under each entry in the rotation.

---

## Phase and Time Filtering

The rotation analyzer respects the Data Explorer's **phase timeline** and **time range** filters. Select a specific phase or time window to analyze rotation consistency during different parts of an encounter.

---
