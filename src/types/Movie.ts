/**
 * The Movie interface represents a Movie object with details from the OMDB API.
 */
export interface Movie {
  /** The title of the movie */
  Title: string;
  
  /** The year the movie was released */
  Year: string;
  
  /** The IMDb ID of the movie */
  imdbID: string;
  
  /** The type of media (e.g., "movie", "series", "episode") */
  Type: string;
  
  /** The URL to the movie's poster image */
  Poster: string;
  
  /** A brief summary of the movie's plot */
  Plot: string;
  
  /** The genre(s) of the movie */
  Genre: string;
  
  /** The director of the movie */
  Director: string;
  
  /** The main actors in the movie */
  Actors: string;
}
