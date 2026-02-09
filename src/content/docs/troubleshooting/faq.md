---
title: FAQ
description: Frequently asked questions about BARAS.
---

### Setup

**Q: What operating systems does BARAS support?**
A: Windows, macOS, and Linux Wayland/X11

**Q: How does BARAS interact with my machine? Is it safe to use?**

A: BARAS is an open source project and the source code is available on Github for anyone to review.

BARAS does not interact with any other external service or file directories aside from what is listed here:

The application will look at the following directories:

- The log directory it's set to view by the user
- The application configuration directory

The application interacts with the following external sources:

- GitHub. BARAS checks once upon application start for a new version of the application.
- Parsely.io the user can choose to upload specific files/encounters to parsely.

### Settings

### Timers

**Q: SWTOR Crashed will BARAS still timers still run?**

A: Yes! BARAS will recover and continue running if the application crashes. However, if you are in the middle of a raid you need to exit
and re-enter the current area for timers to begin working again.

**Q: Do timers continue working even if I die?**

A: Yes!

**Q: Certain timers don't seem to be showing up, even though other timers are working in the same fight. Why?**

A: If the timers are based on when a boss NPC activates an ability SWTOR does not always properly display `AbilityActivated` events for all
players. In multi-boss encounters especially, players that never damage or draw aggro from a specific boss may not have the events
that trigger these timers recorded in their logs.

**Q: My timers seem to be firing too early or too late, why?**

A: Boss ability casts and mechanics can be slightly delayed based on target changes or movement animations. This is out of
the parser's control.

**Q: A specific timer seems to be misconfigured. What do I do?**

A: Please report any default timers that are broken or inaccurate due to configuration issues. In the meantime, all timers, including the default built-in timers, can be fully edited in the encounter builder.
