---
title: Data Explorer
description: Analyze combat logs with detailed breakdowns, charts, and performance metrics.
---

## Data Explorer

The Data Explorer is BARAS's post-combat analysis tool. Review past encounters with detailed performance metrics, charts, and breakdowns for every player in your group.

Access the Data Explorer from the **Data Explorer** tab in the main application.

---

## Encounter List

The left sidebar displays all parsed encounters from your combat logs.

- **Bosses Only** - Filter to show only boss encounters
- Encounters show boss name, attempt number, timestamp, and duration
- **Checkmark** indicates a successful kill
- **Red X** indicates a wipe

Click an encounter to load its data in the main panel.

---

## Phase Timeline

The horizontal timeline at the top shows encounter phases. Click a phase to filter the data to that time window.

- Each phase is color-coded and labeled
- Shows phase duration and transitions
- Filter analysis to specific phases or the entire fight

---

## Analysis Tabs

### Overview

Summary table showing all players with key metrics:

| Column        | Description                    |
| ------------- | ------------------------------ |
| Damage Dealt  | Total damage and DPS           |
| Threat        | Total threat and TPS           |
| Damage Taken  | Total damage taken and DTPS    |
| Healing       | Total healing, HPS, and effective healing % |
| Shielding     | Total shielding and SPS        |

Includes group totals and per-player breakdown charts.

### Charts

Visual performance graphs over the encounter duration:

- **DPS** - Damage per second over time
- **HPS** - Healing per second over time
- **DTPS** - Damage taken per second over time

Select players to compare and toggle chart types.

Also shows:
- **Abilities** - Cast counts and uptime for each ability
- **Passive Effects** - Proc counts and uptime for buffs/effects

### Damage

Detailed damage breakdown by player, showing:

- Damage by ability
- Damage by target
- Critical hit rates
- Damage types

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

Raw combat log viewer with filtering options. Search and filter events by:

- Event type
- Source/target
- Ability name
- Time range

---

## Player Selection

Click a player in the sidebar to focus on their individual performance. The analysis tabs will show detailed breakdowns for that player.

Player entries show:

- Class icon
- Character name
- Role indicator

---

## Tips

- Use **Bosses Only** to filter out trash fights when reviewing raid nights
- Compare attempts by clicking different encounters in the sidebar
- Use phase filtering to analyze specific burn windows or mechanics
- Check the Charts tab to identify performance drops during specific mechanics
- Review Damage Taken to identify players taking avoidable damage
