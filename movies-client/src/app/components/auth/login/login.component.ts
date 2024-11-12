import {Component} from '@angular/core';
import {UserDTO} from "../../../dto/user-dto";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../service/authentication.service";
import {firstValueFrom} from "rxjs";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    :host ::ng-deep .pi-eye,
    :host ::ng-deep .pi-eye-slash {
      transform: scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }
  `]
})
export class LoginComponent {
  user: UserDTO = {login: '', password: ''};

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private messageService: MessageService
  ) {
  }

  async login(): Promise<void> {
    try {
      if (!this.user.login || !this.user.password) {
        this.messageService.add({
          severity: 'info',
          detail: 'Insira as credenciais para entrar'
        })
        return;
      }
      await firstValueFrom(this.authenticationService.login(this.user));
      await this.router.navigateByUrl('/');
    } catch (e) {
      this.messageService.add({
        severity: 'warn',
        detail: 'Não foi possível realizar o login!'
      })
    }
  }

  async navigateToSignUp(): Promise<void> {
    await this.router.navigateByUrl('/auth/register');
  }
}
