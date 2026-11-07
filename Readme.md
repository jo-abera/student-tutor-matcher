# Student Tutor Matcher

A small tutoring marketplace where students search tutors by subject, budget, and schedule, open a profile, and book a session.

The app runs without a database. Seed tutors and bookings stay in memory until the server restarts. Set `MONGO_URI` to persist tutors and bookings in MongoDB. On the first connection, the API seeds the database when the tutors collection is empty.

## Features

- Search tutors by name, title, bio, or subject
- Filter by subject, availability, and maximum hourly rate
- Open a tutor profile with rate, rating, lessons, languages, and bio
- Book a session with a name, email, date, time slot, and learning goals
- See recent bookings for the tutor you are viewing

## Stack

| Part | Tools |
| --- | --- |
| Client | React 19, Vite, React Router, Tailwind CSS |
| Server | Node.js, Express 5 |
| Data | In-memory seed data, or MongoDB via Mongoose |

## Project layout

```
student-tutor-matcher/
├── client/          React app
└── server/          Express API
    └── src/
        ├── data/        Seed tutors used without a database
        ├── models/      Mongoose schemas
        ├── routes/      /api/tutors and /api/bookings
        ├── controllers/
        └── services/
```

## Prerequisites

- Node.js 18 or later
- MongoDB only if you want persistence

## Run locally

Install dependencies in each app, then start the API and the client in separate terminals.

```bash
cd server
npm install
npm run dev
```

```bash
cd client
npm install
npm run dev
```

The API listens on [http://localhost:3000](http://localhost:3000). The client listens on [http://localhost:5173](http://localhost:5173).

Without `MONGO_URI`, the server logs `MONGO_URI not set. Running without database.` and serves the four seed tutors. Bookings created in that mode disappear when the server stops.

### Optional MongoDB

Create `server/.env`:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/student-tutor-matcher
CLIENT_URL=http://localhost:5173
```

Restart the server. It connects, seeds tutors if the collection is empty, and stores bookings.

To point the client at a different API, create `client/.env`:

```env
VITE_API_URL=http://localhost:3000/api
```

## Environment variables

**Server**

| Variable | Default | Purpose |
| --- | --- | --- |
| `PORT` | `3000` | API port |
| `MONGO_URI` | unset | MongoDB connection string. Omit it to use in-memory data. |
| `CLIENT_URL` | `http://localhost:5173` | Origin allowed by CORS |

**Client**

| Variable | Default | Purpose |
| --- | --- | --- |
| `VITE_API_URL` | `http://localhost:3000/api` | Base URL for API requests |

## API

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/api/health` | Status and whether the database is enabled |
| `GET` | `/api/tutors` | List tutors. Query: `search`, `subject`, `availability`, `minRate`, `maxRate` |
| `GET` | `/api/tutors/:id` | One tutor |
| `GET` | `/api/bookings` | All bookings, newest first |
| `POST` | `/api/bookings` | Create a booking |

A booking body looks like this:

```json
{
  "tutorId": "tutor-1",
  "studentName": "Hana Bekele",
  "studentEmail": "hana@example.com",
  "date": "2026-11-12",
  "timeSlot": "4:00 PM",
  "notes": "Help with quadratic equations"
}
```

`tutorId`, `studentName`, `studentEmail`, `date`, and `timeSlot` are required. With MongoDB, `tutorId` is the document `_id`. Without it, use the seed id such as `tutor-1`.

## Scripts

**Server**

| Script | Command |
| --- | --- |
| Development (nodemon) | `npm run dev` |
| Production | `npm start` |
| Lint | `npm run lint` |
| Format | `npm run format` |

**Client**

| Script | Command |
| --- | --- |
| Development | `npm run dev` |
| Production build | `npm run build` |
| Preview the build | `npm run preview` |
| Lint | `npm run lint` |
