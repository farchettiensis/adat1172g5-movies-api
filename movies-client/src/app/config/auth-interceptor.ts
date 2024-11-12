import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {EMPTY, Observable} from "rxjs";
import {AuthenticationService} from "../service/authentication.service";
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = this.authService.getToken();
    const isApiUrl: boolean = request.url.startsWith(environment.moviesApi);
    const isAuthRequest: boolean = request.url.includes('/login') || request.url.includes('/register');

    if (token && isApiUrl && !isAuthRequest) {
      if (this.authService.isTokenExpired(token)) {
        this.authService.logout();
        return EMPTY;
      }

      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request);
  }
}
