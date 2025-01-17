import { notFound } from 'next/navigation';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { getMovieDetailsAction } from '@/app/actions/movieActions';

interface MovieDetailsProps {
  params: { id: string };
}

/**
 * Movie details component shows details of the movie requested
 */
const MovieDetails = async ({ params }: MovieDetailsProps) => {
  const movie = await getMovieDetailsAction(params.id);
  if (!movie) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-5">
      <Card className="max-w-2xl mx-auto">
        <CardContent>
          <CardTitle className="text-3xl font-bold mt-3">{movie.Title}</CardTitle>
          <CardDescription className="text-lg mt-2">{movie.Plot}</CardDescription>
          <img src={movie.Poster} alt={movie.Title} className="w-full mt-4" />
          <div className="mt-4">
            <p><strong>Year:</strong> {movie.Year}</p>
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MovieDetails;