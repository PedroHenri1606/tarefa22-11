import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  login: Login = new Login();
  roteador = inject(Router);

  constructor() {
    //remover o token aqui
  }

  logar() {

    //implementar a requisição aqui e colocar o token no localstorage

    if (this.login.username == 'admin' && this.login.password == 'admin')
      this.roteador.navigate(['admin/produtos']);
    else
      alert('login ou senha incorretos');

  }


}
