# Audio Story Ecosystem

A suite of four interconnected mobile applications for spoken storytelling. Users can record stories, listen to a curated radio stream, read text aloud, and explore stories geographically. Each app connects to the others through swipe navigation and a shared backend.

## Applications

| # | App | Description |
|---|-----|-------------|
| 1 | **SPEAK** | Voice recording |
| 2 | **LISTEN** | Radio-style story streaming |
| 3 | **ALOUD** | Reading and recording text |
| 4 | **MOVE** | Map-based listening experience |

## Build Instructions

Build one app at a time in the order above. Each app must be functional and testable before moving to the next.

Establish the swipe navigation scaffold early so apps can be connected as they are completed.

Build shared components (upload status, recording duration, theme/mode) as reusable modules from the start.

---

## Shared Features (All Apps)

- Light mode and dark mode
- Swipe navigation between apps
- Upload status indicators
- Recording length indicators

---

## App Specifications

### 1. SPEAK — Voice Recording

Allow users to record and share their spoken stories.

**Core Features**
- Voice-memo style recording interface
- Play/pause during recording
- Active recording visual indicator
- Upload recordings from device files
- Upload confirmation or error notification
- Recording duration display

**User Visibility**
- Active recording state
- Recording duration
- Upload success or failure

---

### 2. LISTEN — 24-Hour Story Radio

A continuous internet radio stream of stories from the user and others.

**Core Features**
- Continuous stream tagged and sorted for thematic flow
- Content related to what the user has recorded

**Playback Controls**
- Play, Pause, Rewind

**Visual Feedback**
- Moving circle indicator during playback
- Reverse motion animation during rewind
- Duration displayed at stream start

**Additional Features**
- Background music toggle
- Live transcription while listening

---

### 3. ALOUD — Reading and Recording

Support reading practice by letting users read daily text aloud and record themselves.

**Core Features**
- Daily-updating library of readings
- Recording begins when user presses play
- Active recording visual confirmation
- Scrollable text during reading
- Option to continue reading past the end

**Upload Behavior**
- Auto-uploads on completion
- Uploads on app close
- Upload confirmation or error message

**User Visibility**
- Recording duration
- Upload success status

---

### 4. MOVE — Map-Based Story Exploration

Connect storytelling to physical locations so users can listen as they walk through places where stories were recorded.

**Core Features**
- Live map with user location
- Story routes overlaid on map
- Filters for recording types
- Device vibration when approaching a story location

**At a Story Point**
- User accepts and begins listening
- Audio continues during movement

**User Visibility**
- Connection status
- Nearby recording load status
