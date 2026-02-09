---
title: Hotkeys
description: Configure global keyboard shortcuts for overlay controls.
---

## Hotkeys

BARAS supports global keyboard shortcuts that work even when the application is not focused, letting you control overlays while playing SWTOR.

Configure hotkeys in the **Settings** tab under the **Hotkeys** section.

![Hotkey settings](/screenshots/config-hotkeys.png)

---

## Available Hotkeys

| Hotkey | Action | Description |
| ------ | ------ | ----------- |
| Toggle Visibility | Show/Hide Overlays | Toggles all enabled overlays between visible and hidden |
| Toggle Move Mode | Lock/Unlock Overlays | Enters or exits move mode for repositioning overlays |
| Toggle Rearrange | Rearrange Raid Frames | Enters or exits rearrange mode for reordering raid frame slots |

---

## Setting a Hotkey

1. Click the hotkey input field — it will enter **capture mode** and display "Press a key..."
2. Press your desired key combination (e.g., `Ctrl+Shift+O`)
3. The hotkey is saved automatically

**While capturing:**
- Modifier keys (Ctrl, Shift, Alt) show a live preview as you hold them (e.g., `Ctrl+Shift+...`)
- Press **Escape** to cancel without changing the hotkey
- Press **Backspace** or **Delete** to clear the hotkey
- Click the **x** button next to an assigned hotkey to clear it

![Hotkey capture mode](/screenshots/config-hotkeys.png)

:::tip
Use combinations that won't conflict with SWTOR keybinds. `Ctrl+Shift` or `Ctrl+Alt` combinations with uncommon keys work well.
:::

---

## Supported Keys

- Letters (A-Z)
- Function keys (F1-F12)
- Arrow keys, Home, End, Page Up, Page Down
- Insert, Tab, Enter
- Any of the above combined with **Ctrl**, **Shift**, and/or **Alt** modifiers

---

## Platform Notes

### Windows & macOS

Hotkeys are registered as system-wide global shortcuts and work immediately.

### Linux (X11)

Same behavior as Windows and macOS — global shortcuts are registered at the system level.

### Linux (Wayland)

Wayland uses the **XDG GlobalShortcuts portal** for hotkey registration:

- On first use, your compositor may show a **permission dialog** asking you to allow BARAS to register global shortcuts
- If the portal is unavailable, a notification will appear in the app explaining that hotkeys are not supported
- In that case, you can configure equivalent shortcuts directly in your compositor settings (e.g., Hyprland `bind` rules) that call BARAS's overlay toggle commands

:::note
Wayland compositors must support the `org.freedesktop.impl.portal.GlobalShortcuts` interface. Most modern compositors (KDE, GNOME 45+, Hyprland with xdg-desktop-portal-hyprland) support this.
:::
