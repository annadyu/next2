import MovieInfo from "@/app/components/MovieInfo";

async function fetchData(id: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MOVIE_API_KEY}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch movie");
  }

  return res.json();
}

export default async function Movie({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const movie = await fetchData(id);

  return (
    <div>
      <MovieInfo movie={movie} />
    </div>
  );
}
