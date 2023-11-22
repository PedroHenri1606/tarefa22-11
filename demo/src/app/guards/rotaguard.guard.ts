import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginServiceService } from '../services/login.service.service';

export const rotaguardGuard: CanActivateFn = (route, state) => {
  
  let loginService = inject(LoginServiceService);
  let roteador = inject(Router);

  if(loginService.getToken() == null) {
    roteador.navigate(['/login']);
    return false;
  } else
    return true;
};
