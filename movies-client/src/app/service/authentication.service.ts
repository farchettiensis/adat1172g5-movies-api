import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, tap} from "rxjs";
import {ResponseDTO} from "../dto/response-dto";
import {UserDTO} from "../dto/user-dto";
import {Router} from "@angular/router";
import {jwtDecode} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl: string = environment.moviesApi;
  private endpoint: string = 'auth';
  private tokenKey: string = 'authToken';

  constructor(private http: HttpClient, private router: Router) {
  }

  register(registerData: UserDTO): Observable<ResponseDTO<string>> {
    return this.http.post<ResponseDTO<string>>(`${this.apiUrl}/${this.endpoint}/register`, registerData);
  }

  login(userDTO: UserDTO): Observable<ResponseDTO<string>> {
    return this.http.post<ResponseDTO<string>>(`${this.apiUrl}/${this.endpoint}/login`, userDTO).pipe(
      tap((response: ResponseDTO<string>) => {
        const token: string = response.data;
        this.setToken(token);
      })
    );
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/auth/login']);
  }

  getTokenExpirationDate(token: string): Date | null {
    const decoded: any = jwtDecode(token);
    if (decoded.exp === undefined) {
      return null;
    }
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) token = this.getToken();
    if (!token) return true;

    const expirationDate: Date = this.getTokenExpirationDate(token);
    if (expirationDate === null) {
      return false;
    }

    return expirationDate.valueOf() < new Date().valueOf();
  }
}
