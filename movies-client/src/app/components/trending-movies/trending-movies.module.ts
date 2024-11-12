import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TrendingMoviesRoutingModule} from './trending-movies-routing.module';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {TableModule} from "primeng/table";
import {FormsModule} from "@angular/forms";
import {TrendingMoviesComponent} from "./trending-movies.component";
import {InputTextModule} from "primeng/inputtext";


@NgModule({
  declarations: [TrendingMoviesComponent],
  imports: [
    CommonModule,
    TrendingMoviesRoutingModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    TableModule,
    InputTextModule
  ]
})
export class TrendingMoviesModule {
}
