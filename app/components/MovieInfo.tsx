import React from "react";
import Link from "next/link";
interface Movie {
  title: string;
  overview: string;
}

interface MovieListProps {
  movie: Movie;
}

const MovieInfo = ({ movie }: MovieListProps) => {
  return (
    <div>
      <Link href="/">назад</Link>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieInfo;
