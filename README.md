# My Daily Ritual

A personal daily routine app built as a single HTML file. No frameworks, no dependencies, no server. Lives at [smokingbishop.github.io/my-daily-ritual](https://smokingbishop.github.io/my-daily-ritual).

---

## What it does

Guides you through a structured day — from morning runway to threshold ritual to focused work blocks — and closes the loop each evening with a mind dump and next-day intention.

The core idea: without a commute or a fixed office, there's no natural signal that the day has started. This app provides that signal.

---

## The daily sequence

**Morning runway** — the drift is fine, it's the runway
- Wake up & wash face
- Coffee + news

**Threshold** — the door between drift and work
- Walk the dog *(your commute — no phone, eyes up)*
- Shower + get dressed *(cross the threshold)*

**Work begins**
- Breath anchor *(5 min breathing practice — starts the Pomodoro cycle)*
- Pomodoro resets *(2 min break every 90 minutes, nudged by browser notification)*

**Evening**
- Mind dump *(empty every open loop — tasks, worries, half-ideas)*
- Tomorrow's intention *(one sentence — your first task in the morning)*

---

## Features

- **Daily auto-reset** — opens fresh each morning, previous day's checks cleared
- **From last night** — after you check off the shower step, last night's intention surfaces automatically so you know exactly what to start on
- **Pomodoro cycle** — starts automatically when the breath anchor timer completes; fires a browser notification every 90 minutes; includes a lunch pause button
- **Streak tracker** — 7-day dot bar and running streak count
- **History tab** — every evening entry saved with date, intention, and mind dump text
- **Google Drive backup** — on save, writes a dated `.txt` file to a `Daily Ritual` folder in your Drive; works across devices
- **Works offline** — once loaded, no internet required (except Drive sync)
- **Add to home screen** — install via Chrome on Android or desktop for a full-screen app experience

---

## How data is stored

- **Locally** — all step state, streaks, and history entries are saved to your browser's `localStorage`. Data stays on the device.
- **Google Drive** — when connected, each evening's entry is backed up as `ritual-YYYY-MM-DD.txt` in a `Daily Ritual` folder in your Drive. This is the source of truth across multiple devices.

---

## Setup

No build step. It's a single `index.html` file.

**To run locally:**
```
open index.html
```

**Hosted version:**
Served via GitHub Pages at `https://smokingbishop.github.io/my-daily-ritual`

**Google Drive backup:**
Requires a Google OAuth client ID scoped to the hosted URL. The client ID is configured in the `GAPI_CLIENT_ID` variable at the top of the Drive section in `index.html`.

---

## Browser support

Tested on Chrome for Android (Pixel) and Chrome OS (Pixelbook). Requires Chrome for:
- Service worker (background Pomodoro notifications)
- Web Push notifications
- Google Identity Services (Drive backup)

---

## Philosophy

> The bar doesn't just "become open." There's a sequence that marks the transition.

Built around the idea that without a physical threshold to cross — no commute, no office door — the brain never gets the mode-switch signal that work has begun. The morning ritual creates that signal deliberately.

The evening mind dump closes the loop: unfinished tasks create low-grade cognitive load (the Zeigarnik effect). Writing them down convinces your brain they're handled, freeing up focus for the next day.

---

*Built with Claude · Hosted on GitHub Pages*
