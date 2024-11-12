import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TrendingMoviesComponent} from "./trending-movies.component";

const routes: Routes = [
  {path: '', component: TrendingMoviesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrendingMoviesRoutingModule {
}
