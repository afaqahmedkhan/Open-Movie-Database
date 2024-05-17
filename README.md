# OMDB Movies Application

Live Preview: https://open-movie-database-exe8qjqtj.vercel.app/

This application consumes the public OMDB API to display movie results grouped by year

## Features

- Search for movies using the OMDB API
- Display movie results grouped by year
- Responsive design for various screen sizes
- Server-side data fetching
- e2e using cypress

## Prerequisites

- Node.js (node v22.1.0 used for developement. Node.js 18.17 or later is nextjs 14 requirement)
- npm (version 10.7.0 used for developement)

## Installation

1. Clone the repository
2. Install dependencies:

```
  npm install
```

## Running the Application
Create a .env.local file in the root directory and add your OMDB API key:

```
  NEXT_PUBLIC_API_KEY=your_omdb_api_key
```

Start the development server:

```
  npm run dev
```

Open your browser and navigate to http://localhost:3000 to see the application running.

## Run E2E

```
  npm run cypress:open
```
