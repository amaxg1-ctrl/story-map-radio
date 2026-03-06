# Audio Story Ecosystem — CLAUDE.md

## Project Overview

A suite of four interconnected mobile applications for spoken storytelling: **SPEAK**, **LISTEN**, **ALOUD**, and **MOVE**. Each app is built independently in order, then connected through swipe navigation and a shared backend.

---

## Build Order

Build one app at a time. Each app must be functional and testable before starting the next.

| Order | App    | Description                        |
|-------|--------|------------------------------------|
| 1     | SPEAK  | Voice recording                    |
| 2     | LISTEN | Radio-style story streaming        |
| 3     | ALOUD  | Reading and recording text         |
| 4     | MOVE   | Map-based listening experience     |

---

## Shared Architecture

### Establish Early
- **Swipe navigation scaffold** — set up before the second app so apps connect as they are completed
- **Reusable shared modules** — build once, use across all apps:
  - `UploadStatusIndicator` — success/error notification component
  - `RecordingDurationDisplay` — live duration counter
  - `ThemeProvider` — light/dark mode toggle and persistence

### Shared Features (All Apps)
- Light mode and dark mode
- Swipe navigation between apps
- Upload status indicators
- Recording length indicators

---

## App Specifications

### 1. SPEAK — Voice Recording

**Purpose:** Let users record and share their spoken stories.

**Core Features:**
- Voice-memo style recording interface
- Play/pause during recording
- Active recording visual indicator
- Upload recordings from device files
- Upload confirmation or error notification
- Recording duration display

**User-visible state:**
- Active recording state
- Recording duration
- Upload success or failure

---

### 2. LISTEN — 24-Hour Story Radio

**Purpose:** A continuous internet radio stream of stories from the user and others.

**Core Features:**
- Continuous stream tagged and sorted for thematic flow
- Content related to what the user has recorded

**Playback Controls:**
- Play, Pause, Rewind

**Visual Feedback:**
- Moving circle indicator during playback
- Reverse motion animation during rewind
- Duration displayed at stream start

**Additional Features:**
- Background music toggle
- Live transcription while listening

---

### 3. ALOUD — Reading and Recording

**Purpose:** Support reading practice by letting users read daily text aloud and record themselves.

**Core Features:**
- Daily-updating library of readings
- Recording begins when user presses play
- Active recording visual confirmation
- Scrollable text during reading
- Option to continue reading past the end

**Upload Behavior:**
- Auto-uploads on completion
- Uploads on app close
- Upload confirmation or error message

**User-visible state:**
- Recording duration
- Upload success status

---

### 4. MOVE — Map-Based Story Exploration

**Purpose:** Connect storytelling to physical locations so users can listen as they walk through places where stories were recorded.

**Core Features:**
- Live map with user location
- Story routes overlaid on map
- Filters for recording types
- Device vibration when approaching a story location

**At a Story Point:**
- User accepts and begins listening
- Audio continues during movement

**User-visible state:**
- Connection status
- Nearby recording load status

---

## Development Guidelines

- Build and verify each app before moving to the next
- Shared components live in a common module — do not duplicate them per app
- Swipe navigation should be wired up as each new app is completed
- Theme (light/dark) applies globally and must be consistent across all four apps
- Upload status and recording duration components must behave identically in every context where they appear
- Keep the UI minimal and focused on the storytelling experience
