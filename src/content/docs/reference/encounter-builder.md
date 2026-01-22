---
title: Encounter Builder
---

## Encounter Builder

The encounter builder gives the user the ability to define and configure a wide variety of encounters. BARAS is
configuration driven, that means nothing is hardcoded and you have the ability to add and edit all aspects
of an encounter.

### Entity Roster

The entity roster is a powerful tool that allows the configuration of encounters.

Entities added to the encounter builder can be referenced by their given name (i.e. Draxus will resolve to the associated ids)
in triggers that reference specific entities.

- **Triggers Encounter** - This variable identifies the specific encounter and loads the set of timers. Non-boss entities
  can be defined and use to trigger an encounter in places where the boss might not initially appear, such as the Vorgath minefield. At
  least one entity must trigger the encounter or the encounter definition will never load.

- **Is Boss** - Determines if the entity should be counted towards boss DPS

- **Show on HP Overlay** - Determines whether or not the entity should be shown on the encounter HP overlay.

- **Is Kill Target** - Identifies an entity that is required to die in order for the encounter to end. The
  death of all active kill targets will end the encounter.

### Phases

In this section you can create new phases and edit existing phases.

Phases can be used to:

- Evaluate your DPS and other metrics during specific portions of the fight
- Only allow timers to trigger during a specific portion of the fight
- Trigger timers when a phase starts/ends

#### Options

- **Name** - a name to identify the phase
- **Display Text** - An optional text field if you want to override the name for ingame display
- **Trigger** - The condition that starts the phase. See Triggers for a list of all available triggers
- **End On** - The condition that ends the phase.
- **Preceded By** - The phase that must be immediately before this phase before firing (legacy field, recommended to use triggers instead)
- **Counter** - A counter condition that must be met before a phase can activate
- **Resets** - Counters that are reset to their initial value when the phase is entered

:::note
BARAS does not support deleting default phases. In order to prevent a default phase from triggering, change
it's trigger value to `never`
:::

### Counters

Counters are used to track the encounter state over time. This helps separate state logic from the timer defintion. They can be used to trigger timers and phases.

#### Options

- **Increment On** - a trigger that will cause the counter value to increase
- **Decrement On** - a trigger that will cause the counter value to decrease
- **Reset On** - a trigger that resets the counter to its initial value
- **Initial Value** - the initial value of the counter

### Challenges

Challenges allow you to track performance metrics during an encounter. They can be scoped to specific phases or the entire fight.

#### Display Options

- **Columns** - What columns to display for the challenge on the overlays
- **Bar Color** - The color of the bar to display

#### Available Metrics

| Metric            | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| Damage            | Total damage dealt                                           |
| Healing           | Total healing done                                           |
| Effective Healing | Healing that actually restored health (excludes overhealing) |
| Damage Taken      | Total damage received                                        |
| Healing Taken     | Total healing received                                       |
| Ability Count     | Number of times a specific ability was used                  |
| Effect Count      | Number of times a specific effect was applied                |
| Deaths            | Number of deaths                                             |
| Threat            | Total threat generated                                       |

#### Conditions

Conditions help scope the challenge to specific elements of the fight. These can include only calculating metrics
in a specific phase, or only evaluating damage against a specific target.

| Condition     | Description                                                 |
| ------------- | ----------------------------------------------------------- |
| Target        | Only count metrics against a specific target entity         |
| Phase         | Only count metrics during a specific phase                  |
| Source        | Only count metrics from a specific source entity            |
| Ability       | Only count metrics from a specific ability                  |
| Effect        | Only count metrics related to a specific effect             |
| Counter       | Only count metrics when a specific counter condition is met |
| Boss HP Range | Only count metrics while boss HP is within a given range    |

### Encounter Timers
