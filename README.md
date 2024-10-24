# Spotify Copycat Project

## Features

- Display a list of songs
- Like/unlike tracks
- Play and pause functionality
- Persistent bottom bar showing the current song and progress

## Tech Stack

- **Frontend**: Next.js (with App Router), React Server Components, Server Actions
- **Backend**: No Backend, SSR Using Next. PostgreSQL via Vercel Postgres SDK
- **Hosting**: Vercel
- **Language**: TypeScript

## Prerequisites

- Node.js (v18+ recommended)
- NPM
- PostgreSQL (Vercel Postgres recommended for easier integration)

## Getting Started

### Clone the repository

```bash
git clone https://github.com/Lybertyxz/ShotgunCaseStudy.git
cd ShotgunCaseStudy
```

### Install Dependencies

Install the required dependencies with either NPM:

```bash
# Using npm
npm install

```

### Configure Environment Variables

Create a `.env` file at the root of the project and add the following environment variables:

```env
DATABASE_URL=your_postgres_database_url_here
NEXT_PUBLIC_VERCEL_URL=your_vercel_url_here
```

Replace `your_postgres_database_url_here` with your PostgreSQL connection URL, and `your_vercel_url_here` with the Vercel deployment URL if needed.

### Setup Database

# Option 1

Add your own postgres database url in env variables.

# Options 2

```bash
createdb spotify_playlist
psql -d spotify_playlist -f db.sql
```

Populate the database with the json

### Running the Development Server

To start the development server locally, run:

```bash
npm run dev
```

The application will be accessible at `http://localhost:3000`.

### Deploying to Vercel

To deploy the project on Vercel:

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Link the project to Vercel:
   ```bash
   vercel link
   ```
3. Deploy:
   ```bash
   vercel
   ```

### Building for Production

If you want to create a production build locally, use:

```bash
npm run build
npm start
```

## Project Structure

- `app/`: The core structure of the Next.js app using the App Router.
- `/app/components/`: React components used across the application.
- `/app/lib/`: Database interactions.
- `/app/types/`: Types definitions.
- `context/`: Audio context management for playback.
