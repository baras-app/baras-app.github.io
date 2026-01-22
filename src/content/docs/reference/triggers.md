---
title: Triggers & Filters
---

## Triggers

Triggers are conditions that cause timers, phases, or counters to activate. They are the core building blocks of encounter definitions.

:::note
All ability and effect fields can be

- log_id
- Ability/Effect Name (exact log match)

All source/target fields can be:

- log_id
- Name
- Entity Roster name

:::

### Combat State

| Trigger      | Description                                                                                                                        |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| Combat Start | Fires when combat begins. Combat is considered to begin the instant an entity that triggers the encounter takes it's first action. |
| Combat End   | Fires when combat ends (default counter reset)                                                                                     |

---

### Abilities & Effects

| Trigger        | Description                                                                                                       | Parameters                      |
| -------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| Ability Cast   | Fires when an ability is cast. For channeled ability, this is when the ability starts, not when the channel ends. | `abilities`, `source`, `target` |
| Effect Applied | Fires when a buff/debuff is applied                                                                               | `effects`, `source`, `target`   |
| Effect Removed | Fires when a buff/debuff is removed                                                                               | `effects`, `source`, `target`   |
| Damage Taken   | Fires when damage is received from an ability                                                                     | `abilities`, `source`, `target` |

---

### HP Thresholds

| Trigger       | Description                                 | Parameters               |
| ------------- | ------------------------------------------- | ------------------------ |
| Boss HP Below | Fires when boss HP drops below a percentage | `hp_percent`, `selector` |

---

### Entity Lifecycle

| Trigger      | Description                                                                                                                                               | Parameters           |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| NPC Appears  | Fires when any instance NPC of an NPC class first appears in combat. This trigger will fire repeatedly if more than one NPC with the same name/ID spawns. | `selector`           |
| Entity Death | Fires when an entity dies                                                                                                                                 | `selector`           |
| Target Set   | Fires when an NPC sets a target (e.g., sphere targeting)                                                                                                  | `selector`, `target` |

---

### Phase Events

| Trigger          | Description                        | Parameters |
| ---------------- | ---------------------------------- | ---------- |
| Phase Entered    | Fires when a specific phase begins | `phase_id` |
| Phase Ended      | Fires when a specific phase ends   | `phase_id` |
| Any Phase Change | Fires on any phase transition      | -          |

---

### Counter Events

| Trigger         | Description                                   | Parameters            |
| --------------- | --------------------------------------------- | --------------------- |
| Counter Reaches | Fires when a counter reaches a specific value | `counter_id`, `value` |

---

### Timer Events

| Trigger       | Description                                        | Parameters |
| ------------- | -------------------------------------------------- | ---------- |
| Timer Expires | Fires when another timer expires (chaining)        | `timer_id` |
| Timer Started | Fires when another timer starts (for cancellation) | `timer_id` |

---

### Time-based

| Trigger      | Description                               | Parameters |
| ------------ | ----------------------------------------- | ---------- |
| Time Elapsed | Fires after a duration since combat start | `secs`     |

---

### System Triggers

| Trigger | Description                                                 |
| ------- | ----------------------------------------------------------- |
| Manual  | Debug/manual trigger                                        |
| Never   | Never triggers (use for counters that shouldn't auto-reset) |

---

### Composition

| Trigger | Description                                  | Parameters   |
| ------- | -------------------------------------------- | ------------ |
| Any Of  | Fires if any sub-condition is met (OR logic) | `conditions` |

:::note
Triggers are evaluated per event and don't support AND logic. Use counters to implement
advanced trigger conditionals.
:::

---

## Entity Filters

Many triggers accept `source` and `target` filters to narrow down which entities should match:

| Filter                  | Description                                    |
| ----------------------- | ---------------------------------------------- |
| Any                     | Matches any entity (default)                   |
| Local Player            | Matches only the local player                  |
| Other Players           | Matches other players (not local)              |
| Any Player              | Matches any player                             |
| Any Companion           | Matches any companion                          |
| Any Player or Companion | Matches any player or companion                |
| Any Except Local        | Matches any entity except the local player     |
| Current Target          | Matches the local player's current target      |
| Boss                    | Matches any boss entity                        |
| Adds (Non-Boss)         | Matches non-boss NPCs (adds)                   |
| Any NPC                 | Matches any NPC                                |
| Specific (ID or Name)   | Matches entities by ID or name from the roster |
