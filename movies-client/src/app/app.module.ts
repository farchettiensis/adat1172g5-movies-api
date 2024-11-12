import {NgModule} from '@angular/core';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AppLayoutModule} from './layout/app.layout.module';
import {NotfoundComponent} from './components/notfound/notfound.component';
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./config/auth-interceptor";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  imports: [
    AppRoutingModule,
    AppLayoutModule,
    ToastModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    MessageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
