import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RegisterRoutingModule} from './register-routing.module';
import {RegisterComponent} from "./register.component";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {FormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {RippleModule} from "primeng/ripple";


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    FormsModule,
    DropdownModule,
    RippleModule,
    NgOptimizedImage,
  ]
})
export class RegisterModule {
}
