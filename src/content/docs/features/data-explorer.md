---
title: Data Explorer
description: Analyze combat logs with detailed breakdowns, charts, and performance metrics.
---

## Data Explorer

The Data Explorer is BARAS's post-combat analysis tool. Review past encounters with detailed performance metrics, charts, and breakdowns for every player in your group.

Access the Data Explorer from the **Data Explorer** tab in the main application.

### Controls

The data explorer can be expanded to the full window by pressing the icon on the top-right of the tab selector.

![Data Explorer main view](/screenshots/data-explorer-overview.png)

---

## Encounter List

The left sidebar displays all parsed encounters from your combat log. Encounter will appear here
after combat ends.

- **Bosses Only** - Filter to show only boss encounters
- Click the arrow buttons in the to-left corner to hide the encounters sidebar

Click an encounter to load its data in the main panel.

![Encounter list sidebar](/screenshots/data-explorer-encounter-list.png)

---

## Phase Timeline

The horizontal timeline at the top shows encounter phases. Click a phase to filter the data to that time window.

![Phase timeline bar](/screenshots/data-explorer-phase-timeline.png)

Use can filter the timeline by:

- Clicking and dragging the mouse over a segment
- Clicking on a phase badge
- Clicking on a phase in the timeline
- Entering start/end times in the selection box below the timeline
- Right clicking on a specific line in the combat log and setting it as the start/end time

---

## Analysis Tabs

### Overview

The overview tab serves as a landing page the lets you view raid-wide statistics at a glance.

- A detailed table of common metrics
- Doughnut charts showing the proportion of Damage/Threat/Healing/Damage Taken each player contributed to the group total
- A table showing the last logged health value of every NPC that participated in the encounter

![Overview tab](/screenshots/data-explorer-overview.png)

### Charts

This page time series charts displaying per-player metrics over the course of the fight. The x-axis
represents 1-second time intervals. Both burst and per second averages are displayed where applicable.

- **DPS** - Damage per second over time
- **HPS** - Healing per second over time. The green line represents raw HPS. The blue line represent EHPS.
- **DTPS** - Damage taken per second over time
- **HP%** - the player's health balance over the fight.

![Charts tab](/screenshots/data-explorer-charts.png)

Also shows:

- **Abilities** - Cast counts and uptime for each ability
- **Passive Effects** - Proc counts and uptime for buffs/effects

### Metric Breakdown Tabs

The **Damage**, **Healing**, **Damage Taken**, and **Healing Taken** tabs show
player/NPC level breakdowns.

![Damage breakdown tab](/screenshots/data-explorer-damage.png)

Detailed damage breakdown by player, showing:

### Healing

Detailed healing breakdown by player, showing:

- Healing by ability
- Healing by target
- Overheal amounts
- Effective healing percentage

### Damage Taken

Breakdown of damage received by each player:

- Damage sources
- Ability breakdown
- Mitigation analysis

### Healing Taken

Breakdown of healing received by each player:

- Healing sources
- Ability breakdown

### Combat Log

![Combat log viewer](/screenshots/data-explorer-combat-log.png)

Raw combat log viewer with filtering options. Search and filter events by:

- Event type
- Source/target
- Ability name
- Time range
