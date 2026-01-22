---
title: Effects Tracker
description: Track buffs, debuffs, cooldowns, and DOTs with customizable displays.
---

## Effects Tracker

The Effects Tracker allows you to define custom effect definitions that track abilities, buffs, debuffs, and cooldowns. Each effect can be displayed on one of four overlay targets.

---

## Identity

| Field          | Description                                           |
| -------------- | ----------------------------------------------------- |
| Effect ID      | Unique identifier for the effect definition           |
| Name           | Internal name for the effect                          |
| Display Text   | Text shown on the overlay                             |
| Display Target | Which overlay displays this effect (see table below)  |

### Display Targets

| Target     | Description                                |
| ---------- | ------------------------------------------ |
| Effects A  | General effects overlay (personal buffs)   |
| Effects B  | Secondary effects overlay (personal debuffs) |
| Cooldowns  | Ability cooldown tracker                   |
| DOT Tracker| Multi-target DOT tracking overlay          |

---

## Trigger

| Field             | Description                                              |
| ----------------- | -------------------------------------------------------- |
| Trigger           | What starts tracking (Ability Cast, Effect Applied, etc) |
| Source            | Entity filter for who triggers the effect                |
| Target            | Entity filter for who receives the effect                |
| Trigger Abilities | List of ability IDs or names that activate tracking      |
| Refresh Abilities | Abilities that refresh the duration without restarting   |

---

## Timing

| Field    | Description                                          |
| -------- | ---------------------------------------------------- |
| Duration | How long the effect lasts (seconds)                  |
| Show at  | Only display when this many seconds remain           |

---

## Display Options

| Option                              | Description                                              |
| ----------------------------------- | -------------------------------------------------------- |
| Color                               | Bar/highlight color for the effect                       |
| Enabled                             | Whether this effect definition is active                 |
| Icon ID                             | Custom icon ID (auto-detected by default)                |
| Show Icon                           | Display the ability icon                                 |
| Display Source                      | Show who applied the effect                              |
| Duration Affected by Alacrity       | Adjust duration based on alacrity stat                   |
| Ready State                         | Seconds before expiry to show "ready" indicator          |

---

## Advanced Options

| Option                                | Description                                            |
| ------------------------------------- | ------------------------------------------------------ |
| Refresh Duration When Charges Modified | Reset timer when ability charges change               |
| Persist Past Death                    | Continue tracking after player dies                    |
| Track Outside Combat                  | Track this effect even when not in combat              |

---

## Alerts

| Option       | Description                                      |
| ------------ | ------------------------------------------------ |
| Alert Text   | Custom text for the alert notification           |
| Alert On     | When to trigger alert (None, On Apply, On Expire)|
| Enable Audio | Play sound when alert triggers                   |
