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

The analyzer splits a player's ability usage into **cycles** based on an anchor ability you choose. The anchor is typically the signature or most frequently repeated ability in a rotation (e.g., a filler ability that marks the start of each rotation loop).

Each cycle shows:

- **GCD abilities** — Main abilities used in the Global Cooldown timeline, displayed as icons in a horizontal row
- **Off-GCD weaves** — Abilities used between GCDs, stacked above the GCD ability they were woven with

---

## Creating a Rotation Visualization

1. Select a **player** from the sidebar
2. Choose an **anchor ability** from the dropdown (populated with all abilities used by that player)
3. Click **Create**

![Rotation controls](/screenshots/rotation-overview.png)

:::tip
Choose an ability that appears frequently and consistently in the rotation. Good anchor choices are filler abilities or abilities that mark the start of a priority sequence.
:::

---

## Reading the Visualization

Each row represents one **rotation cycle** — the abilities used between two consecutive uses of the anchor ability.

![Rotation cycle breakdown](/screenshots/rotation-overview.png)

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

---

## Phase and Time Filtering

The rotation analyzer respects the Data Explorer's **phase timeline** and **time range** filters. Select a specific phase or time window to analyze rotation consistency during different parts of an encounter.

---
