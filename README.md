# Focus App (Frontend)

A productivity web application built with React, Firebase, and Spotify integration. The app helps users manage their focus sessions, to-do lists, timers, stopwatch, and world clock, with a modern UI and Google authentication.

## Features

- **Google Authentication:** Secure login/logout using Google accounts via Firebase.
- **Focus Session Timer:** Set and start focus sessions with break alerts.
- **To-Do List:** Add, view, and manage tasks, stored per user in Firestore.
- **Timer & Stopwatch:** Multiple timers and a stopwatch for productivity tracking.
- **World Clock:** Interactive map to check timezones worldwide using Google Maps API.
- **Music Player:** Search and play music previews using Spotify API.
- **Daily Progress:** Visualize daily goals and streaks.
- **Responsive UI:** Built with Tailwind CSS and Heroicons.

## Project Structure

```
frontend/
  ├── public/                # Static assets
  ├── src/
  │   ├── assets/            # Asset files (e.g., SVGs)
  │   ├── components/        # Main React components
  │   │   ├── HomePage/      # Home page and widgets
  │   │   ├── LoginAndLogout/
  │   │   ├── StopWatch/
  │   │   ├── Timer/
  │   │   └── WorldClock/
  │   ├── contextProviders/  # React Context for user/auth
  │   ├── firebase/          # Firebase config
  │   ├── images/            # Image assets
  │   ├── providers/         # Provider components (e.g., GoogleSignInButton)
  │   ├── spotify/           # Spotify integration (future)
  │   └── SubComponents/     # Shared subcomponents
  ├── App.jsx                # Main app entry
  ├── main.jsx               # React root
  ├── index.css              # Global styles (Tailwind)
  ├── App.css                # App-specific styles
  ├── .env                   # Environment variables (API keys)
  ├── package.json           # Project dependencies and scripts
  ├── vite.config.js         # Vite configuration
  └── eslint.config.js       # ESLint configuration
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Setup

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Environment Variables:**

   Create a `.env` file in `src/` with the following (already present):

   ```
   VITE_SPOTIFY_CLIENT_ID=your_spotify_client_id
   VITE_SPOTIFY_SECRET_KEY=your_spotify_secret
   VITE_GOOGLE_EARTH_API=your_google_maps_api_key
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```

   The app will be available at `http://localhost:5173` (default Vite port).

### Linting

```sh
npm run lint
```

### Building for Production

```sh
npm run build
```

## Key Technologies

- [React](https://react.dev/)
- [Firebase (Auth, Firestore)](https://firebase.google.com/)
- [Spotify Web API](https://developer.spotify.com/documentation/web-api)
- [Google Maps API](https://developers.google.com/maps/documentation)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Heroicons](https://heroicons.com/)

## Folder Highlights

- **Authentication:** `src/contextProviders/UserContext.jsx`
- **Firebase Config:** `src/firebase/firebase.js`
- **To-Do Logic:** `src/components/HomePage/ToDo.jsx`
- **Music Player:** `src/components/HomePage/MusicPlayer.jsx`
- **Timer/Stopwatch:** `src/components/Timer/Timer.jsx`, `src/components/StopWatch/StopWatchPage.jsx`
- **World Clock:** `src/components/WorldClock/WorldClockPage.jsx`, `src/components/WorldClock/MapWithTimezone.jsx`

## Notes

- The backend for Spotify token proxy is expected at `http://localhost:4000/api/token`.
- All API keys and secrets should be kept private and **never committed to version control**.

---

**MIT License**