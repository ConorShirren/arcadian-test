
# Arcadian Backend Developer Coding Challenge

> This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Project Overview

The is a simple web application built with Next.js and TypeScript. It allows users to search for movies using the Open Movie Database (OMDb) API and view detailed information about selected movies.



https://github.com/ConorShirren/arcadian-test/assets/32966008/b840fb9a-2f0e-4a91-a16f-9bb5f4f9533d



### Further Improvements

- Due to time constraints with other fulltime work commitments, my testing approach for this assignment was 100% manual integration testing in a local development environment using both Postman and the browser. Given more time I would want to ensure 100% unit test code coverage using Jest. 
- Add rate limiting protection for the Open Movie DB API.
- Improve use of middleware for error handling and logging for better development experience.
- This was my first time working with NextJS, and although very enjoyable to get started, I would want to spend more time reading the Docs to improve my project directory structure following NextJS best practices.
- Improve styling and CSS for better user experience
- Add pagination ability. 
- Add more search filters such as year, genre, and actors.
- Explore oppertunities to deploy this NextJS application in AWS


## Criteria

- [x] Create an API route (/api/movies) that takes a query parameter (title) and fetches movie data from the OMDb API.
- [x] Create an API route (/api/movies/:id) that fetches single movie data from the OMDb API.
- [x] Create a simple React.js frontend using Next.js to search for movies and display results.


## Getting Started

### Cloning the Repository

```bash
git clone https://github.com/ConorShirren/arcadian-test.git
cd arcadian-test
```

### Installing Dependencies

Using NPM:

```bash
npm install
```

### Setting Up Environment Variables

Create a `.env.local` file in the root of the project and add your OMDb API key:

```plaintext
OMDB_API_KEY=your_api_key_here
```

You cna register for an API Key using an email address here: https://www.omdbapi.com/apikey.aspx

### Running the Local Development Server

Using NPM:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see the application.

