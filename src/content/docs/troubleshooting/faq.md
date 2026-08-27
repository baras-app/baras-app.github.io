---
title: FAQ
description: Frequently asked questions about BARAS.
---

## General

<details>
<summary>What operating systems does BARAS support?</summary>

Windows, macOS, and most modern Linux distributions.

</details>

<details>
<summary>Is this against the SWTOR Terms of Service?</summary>

No. BARAS is an external application that only reads data from combat log files. All information in the combat logs has been intentionally offered
by the developers for the player to use.

BARAS is not a mod. BARAS does **NOT**:

- read information from the game's memory
- modify game files
- intercept communications between the game client and the sever
- simulate user input to the game.

**There is no direct interaction between BARAS and the SWTOR game client.** Everything in BARAS is driven via the combat logs.

It uses the exact same data available to other parsing tools, like Starparse and ORBS, which have been used by the community for over a decade.

</details>

<details>
<summary>How does BARAS interact with my machine? Is it safe to use?</summary>

BARAS is an open-source project publicly hosted on GitHub. There is no telemetry or mechanisms to collect user data.

BARAS' interaction with your system is limited to the following:

**Directories accessed:**

- The SWTOR combat log directory set by the user
- The application's own configuration directory

**System monitoring:**

- The "auto-hide when not live" feature evaluates if `swtor.exe` is running in the process manager
- OCR will screen capture the region underneath the raid frames overlay upon user input.

**External services:**

- **GitHub** — BARAS checks once on application start for available updates.
- **Parsely.io** — The user can choose to upload specific files/encounters to Parsely.
- **OCR model download** - when choosing to use OCR to auto-capture raid frame names, BARAS will download 12mb of OCR models from HuggingFace verified by a SHA-256 hash.

</details>

<details id="unsigned-warnings">
<summary>I get warnings that this application isn't trusted on Windows/macOS. Why?</summary>

Microsoft and Apple will display warning messages if an application doesn't have a code-signing certificate. This is a
common security practice to ensure the downloaded file is from the actual software developer.

However, code signing certificates cost anywhere from $100-300 dollars per year to purchase and maintain. Since this is a
small, non-commercial project maintained by a single developer I am not able to pay for code-signing certificates.

</details>

---

## Timers

<details>
<summary>SWTOR crashed — will timers still run?</summary>

It's best to either reset combat logging or log out and log back in when a crash occurs. The game will create a file that causes difficulties identifying the local player and current area after a game crash or disconnection.

</details>

<details>
<summary>Do timers continue working even if I die?</summary>

Yes. Even fights with troublesome behavior should have special handling to ensure that in-combat deaths are handled properly.

</details>

<details>
<summary>Certain timers don't seem to be showing up, even though other timers are working in the same fight. Why?</summary>

The most common reason for this to occur is that `AbilityActivated` events for NPCs will not appear in the logs until the local player (you) direct casts an ability on that NPC.

Any timers based on boss ability casts are susceptible to this issue. It is prevalent in multi-boss encounters and when the player is a healer that doesn't target the boss.

Other known issues include:

- Activity is not logged if the boss is in stealth
- Some instances have distance mechanics, such as being trapped in the Styrak nightmare, that interfere with event logging

</details>

<details>
<summary>Timers seem to be firing too early or too late or de-syncing. Why?</summary>

Boss ability casts and mechanics can be slightly delayed based on target changes, movement animations, and their ability priority order. For example, Propagator Core has around 5 abilities with the same priority value
that can be off-cooldown at the same time. In this case the next ability cast is randomly chosen.

Standard timers are not able to predict this. BARAS has an experimental Ability Queue feature that attempts to visualize the boss' ability cool downs and predict the next cast.

</details>

<details>
<summary>A specific timer seems to be misconfigured. What do I do?</summary>

Please report any default timers that are broken or inaccurate due to configuration issues. In the meantime, all timers — including the default built-in timers — can be fully edited in the [Encounter Builder](/reference/encounter-builder).

</details>

---

## Effects

<details>
<summary>What does alacrity do? Why can I set it in the application?</summary>

In-game alacrity condenses the duration of ticking HOTs/DOTs and reduces the cooldown time of offensive abilities. In order to get accurate displays for abilities such as the Operative's Kolto Probe, BARAS should be set to your character's current alacrity.

:::note
Temporary abilities that boost alacrity, such as Supercharged Celerity or Polarity Shift, will **not** be factored into the application's calculations.
:::

</details>

---

## Linux

<details>
<summary>Is GNOME supported?</summary>

No. GNOME is one of the few Linux desktop environments that does not implement the `zwlr-layershell` protocol, which is required for BARAS overlays to run on Wayland. Overlays will not work, however the rest of the application will function.

</details>

<details>
<summary>The application won't work on my Linux distribution!</summary>

Due to the nature of Linux, it's impossible to ensure compatibility with every possible configuration. The BARAS AppImage is compiled on Ubuntu 24.04, and older versions of common distributions may not have the required libraries to run BARAS. Support for non-current or niche distros will not be provided.

</details>
