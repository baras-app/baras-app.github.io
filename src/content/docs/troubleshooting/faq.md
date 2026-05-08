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

No. BARAS is an external application that only reads data from combat log files. It does not directly interact
with the game client.

It functions in the same manner as tools like Starparse and ORBS, which have been used by the community for over a decade.

</details>

<details>
<summary>How does BARAS interact with my machine? Is it safe to use?</summary>

BARAS is an open source project and the source code is available on GitHub for anyone to review.

BARAS only interacts with the following external services and file directories.

**Directories accessed:**

- The log directory set by the user
- The application configuration directory

**Process monitoring:**

- The "auto-hide when not live" feature monitors evaluates if `swtor.exe` is running in the process manager

**External services:**

- **GitHub** — BARAS checks once on application start for available updates.
- **Parsely.io** — The user can choose to upload specific files/encounters to Parsely.

</details>

<details id="unsigned-warnings">
<summary>I get warnings that this application isn't trusted on Windows/macOS. Why?</summary>

Microsoft and Apple will display warning messages if an application doesn't have a code-signing certificate. This is a
common security practice to ensure the downloaded file is from the actual software developer.

However, code signing certificates cost anywhere from $100-300 dollars per year to purchase and maintain. Since this is a
small, non-commercial project maintained by a single developer I am not able to maintain code-signing certificates.

</details>

---

## Timers

<details>
<summary>SWTOR crashed — will timers still run?</summary>

Maybe. BARAS requires the following information to be present in the log file to process properly:

1. The current area
2. An initial discipline changed event to identify the local player

If you crash mid-raid a new log file is created without an area entered event. It's recommended you exit and re-enter the area you are currently in. If incorrect information still appears on the application session page, you will have to re-log to reset the file.

</details>

<details>
<summary>Do timers continue working even if I die?</summary>

Yes!

</details>

<details>
<summary>Certain timers don't seem to be showing up, even though other timers are working in the same fight. Why?</summary>

If the timers are based on when a boss NPC activates an ability, SWTOR does not always properly display `AbilityActivated` events for all players. In multi-boss encounters especially, players that never damage or draw aggro from a specific boss may not have the events that trigger these timers recorded in their logs.

The best solution is to attempt to damage all bosses at least once during the fight. This may or may not work but seems to improve the chances of timers appearing.

</details>

<details>
<summary>My timers seem to be firing too early or too late. Why?</summary>

Boss ability casts and mechanics can be slightly delayed based on target changes or movement animations. This is out of the parser's control.

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
