import React from "react";
import MovieList from "./components/MovieList";
// import App from "./components/Pagination";

const MoviesPage = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=return&api_key=${process.env.MOVIE_API_KEY}`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  const movies: Movie[] = data.results || [];

  interface Movie {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    poster_path?: string;
  }

  return (
    <div>
      <MovieList movies={movies} />
      {/* <App /> */}
    </div>
  );
};

export default MoviesPage;
