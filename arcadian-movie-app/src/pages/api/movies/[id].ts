// pages/api/movies/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const apiKey = process.env.OMDB_API_KEY; // Store your API key in an environment variable
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from OMDb API' });
  }
}
