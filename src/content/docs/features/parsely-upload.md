---
title: Parsely Upload
description: Upload combat logs and individual encounters to Parsely.io for sharing and comparison.
---

BARAS integrates with [Parsely.io](https://parsely.io), a community tool for sharing and comparing SWTOR combat logs. You can upload entire log files or individual encounters directly from BARAS.

---

## Setup

Configure your Parsely credentials in the **Settings** tab under the **Parsely** section. All fields are optional — you can upload anonymously without an account.

| Field    | Description                         |
| -------- | ----------------------------------- |
| Username | Your Parsely.io username            |
| Password | Your Parsely.io password            |
| Guild    | Guild tag to associate with uploads |

![Parsely settings](/screenshots/parsely-settings.png)

:::tip
Creating a Parsely account lets you track your upload history and manage your logs on the Parsely website.
:::

---

## Uploading an Entire Log File

Upload a complete combat log file from the **Log Files** sidebar:

1. Click the **cloud upload** icon next to any log file in the sidebar
2. The upload modal will appear showing the file name
3. Set visibility and add an optional note
4. Click **Upload**

![Upload from log file list](/screenshots/parsely-upload-file.png)

You can also upload from the **Session** header bar using the **Parsely** button when a log file is active.

---

## Uploading a Single Encounter

Upload a specific encounter from the **History** tab:

1. Navigate to the **History** tab
2. Find the encounter you want to upload
3. Click the **cloud upload** icon on the encounter row
4. Set visibility and add an optional note
5. Click **Upload**

![Upload single encounter](/screenshots/parsely-upload-encounter.png)

After a successful upload, the encounter row will display a clickable link to view it on Parsely.

:::note
Single encounter uploads extract only the relevant combat log lines, so the uploaded file is much smaller than uploading the entire log.
:::

---

## Upload Options

The upload modal lets you configure two options before uploading:

### Visibility

| Option     | Description                                     |
| ---------- | ----------------------------------------------- |
| Public     | Anyone can view the log on Parsely              |
| Guild only | Only members of your guild can view it          |
| Private    | Only you can view the log (requires an account) |

### Notes

Add an optional text note to describe the upload (e.g., "Dxun HM prog night" or "Clean Styrak kill").

![Upload modal](/screenshots/parsely-upload-modal.png)

---

## After Uploading

- A **toast notification** appears with the Parsely link on success
- For encounter uploads, the link is saved and displayed inline in the History tab
- Click the link to open the log on Parsely in your browser
- If the upload fails, an error message will explain what went wrong
