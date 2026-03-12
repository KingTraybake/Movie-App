export const TMDB_CONFIG = {
      BASE_URL: 'https://api.themoviedb.org/3',
      API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
      headers: {
          accept: 'application/json',
      }
  }

  export const fetchMovies = async ({query}: { query: string }) => {
      const apiKeyParam = `api_key=${TMDB_CONFIG.API_KEY}`;

      const endpoint = query
          ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}&${apiKeyParam}`
          : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc&${apiKeyParam}`;

      const response = await fetch(endpoint, {
          method: 'GET',
          headers: TMDB_CONFIG.headers,
      });

      if(!response.ok) {
          throw new Error(`Failed to fetch movies: ${response.statusText}`);
      }

      const data = await response.json();

      return data.results;
  }