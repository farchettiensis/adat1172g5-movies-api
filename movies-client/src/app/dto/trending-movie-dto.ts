export interface TrendingMovieDTO {
  id: number;
  title: string;
  overview: string;
  backdropPath: string;
  originalTitle: string;
  posterPath: string;
  mediaType: string;
  adult: boolean;
  originalLanguage: string;
  genreIds: number[];
  popularity: number;
  releaseDate: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
}
