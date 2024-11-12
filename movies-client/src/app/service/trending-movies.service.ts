import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {TrendingMovieDTO} from "../dto/trending-movie-dto";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TrendingMoviesService {
  private apiUrl: string = environment.moviesApi;
  private endpoint: string = '/movies/tmdb/trending/movies/';

  constructor(private http: HttpClient) {
  }

  getTrendingMovies(
    timeWindow: string,
    language: string = 'en-US'
  ): Observable<TrendingMovieDTO[]> {
    const url = `${this.apiUrl}${this.endpoint}${timeWindow}`;

    const params: HttpParams = new HttpParams().set('language', language);

    return this.http.get<any>(url, {params}).pipe(
      map(response => {
        const movies = response.data.results;
        return movies.map((movie: any) => this.transformMovie(movie));
      })
    );
  }

  private transformMovie(movie: any): TrendingMovieDTO {
    return {
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      backdropPath: movie.backdrop_path,
      originalTitle: movie.original_title,
      posterPath: movie.poster_path,
      mediaType: movie.media_type,
      adult: movie.adult,
      originalLanguage: movie.original_language,
      genreIds: movie.genre_ids,
      popularity: movie.popularity,
      releaseDate: movie.release_date,
      video: movie.video,
      voteAverage: movie.vote_average,
      voteCount: movie.vote_count,
    };
  }
}
