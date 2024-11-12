import {Component, OnInit} from '@angular/core';
import {TrendingMovieDTO} from "../../dto/trending-movie-dto";
import {TrendingMoviesService} from "../../service/trending-movies.service";
import {firstValueFrom, Observable} from "rxjs";

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrl: './trending-movies.component.scss'
})
export class TrendingMoviesComponent implements OnInit {
  trendingMovies: TrendingMovieDTO[] = [];

  constructor(private trendingMoviesService: TrendingMoviesService) {
  }

  async ngOnInit(): Promise<void> {
    try {
      this.trendingMovies = await firstValueFrom(this.fetchTrendingMovies());
      console.log(this.trendingMovies);
    } catch (e) {
      console.error(e);
    }
  }

  fetchTrendingMovies(): Observable<TrendingMovieDTO[]> {
    return this.trendingMoviesService.getTrendingMovies('week');
  }
}
