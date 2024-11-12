import {Component} from '@angular/core';
import {MessageService, SelectItem} from "primeng/api";
import {UserRole} from "../../../model/enum/user-role";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../service/authentication.service";
import {UserDTO} from "../../../dto/user-dto";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  user: UserDTO = {
    login: '',
    password: '',
    role: UserRole.USER
  }
  confirmPassword: string = "";
  userRoleOptions: SelectItem[] = [
    {label: 'Usuário', value: UserRole.USER},
    {label: 'Administrador', value: UserRole.ADMIN},
  ]
  isSubmitting: boolean = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private messageService: MessageService) {
  }

  async navigateToSignIn(): Promise<void> {
    await this.router.navigateByUrl('/auth/login')
  }

  async save(): Promise<void> {
    if (this.isSubmitting) return;

    if (!this.user.login || !this.user.password || !this.user.role || !this.confirmPassword) {
      this.messageService.add({
        severity: 'warn',
        detail: 'Por favor, preencha todos os campos!'
      });
      return;
    }

    if (this.user.password !== this.confirmPassword) {
      this.messageService.add({
        severity: 'warn',
        detail: 'As senhas não coincidem!'
      });
      return;
    }

    this.isSubmitting = true;
    try {
      await firstValueFrom(this.authenticationService.register(this.user));
      this.messageService.add({
        severity: 'success',
        detail: 'Cadastro realizado com sucesso!'
      });
      await this.navigateToSignIn();
    } catch (error) {
      console.error(error);
      this.messageService.add({
        severity: 'error',
        detail: 'Não foi possível realizar o cadastro!'
      });
    } finally {
      this.isSubmitting = false;
    }
  }
}
