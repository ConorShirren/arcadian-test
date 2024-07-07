// pages/api/movies.ts
import type { NextApiRequest, NextApiResponse } from 'next';

import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title } = req.query;
  const apiKey = process.env.OMDB_API_KEY; // Store your API key in an environment variable
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`;
  console.log(url);

  try {
    const { data } = await axios.get(url);
    // const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data from OMDb API' });
  }
}
