import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {NotfoundComponent} from './components/notfound/notfound.component';
import {AppLayoutComponent} from "./layout/app.layout.component";

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'trending-movies',
        loadChildren: () => import('./components/trending-movies/trending-movies.module').then(m => m.TrendingMoviesModule)
      },
    ]
  },
  {path: 'auth', loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)},
  {path: 'notfound', component: NotfoundComponent},
  {path: '**', redirectTo: '/notfound'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        onSameUrlNavigation: 'reload'
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
