import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { LoginServiceService } from 'src/app/services/login.service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  login: Login = new Login();
  roteador = inject(Router);
  service = inject(LoginServiceService)

  constructor() {
    this.service.removerToken();
  }

  logar() {
    this.service.logar(this.login).subscribe({
      next: user => {
        this.service.addToken(user.token);
        this.roteador.navigate(['admin/produtos']);
      },
      error: erro => {
        alert("Usuario ou senha invalidas, verifique o console!");
        console.log(erro);
      }
    });
  }
}
