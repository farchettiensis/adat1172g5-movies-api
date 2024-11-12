import {AuthInterceptor} from './auth-interceptor';
import {AuthenticationService} from '../service/authentication.service';

describe('AuthInterceptor', () => {
  let authService: jasmine.SpyObj<AuthenticationService>;
  let interceptor: AuthInterceptor;

  beforeEach(() => {
    authService = jasmine.createSpyObj<AuthenticationService>('AuthenticationService', ['getToken', 'isTokenExpired', 'logout']);
    interceptor = new AuthInterceptor(authService);
  });

  it('should create an instance', () => {
    expect(interceptor).toBeTruthy();
  });
});
