import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginComponent } from '../component/login/login.component';
import { LoginService } from '../service/login.service';

export const loginGuard: CanActivateFn = (route, state) => {
  let loginService = inject(LoginService);
  let router = inject(Router);

  if (loginService.loggedIn){
    // giriş yapılmışsa istenen sayfanın gösterilmesine izin ver
    return true;
  } else {
    // giriş yapılmamış, izin verme ve login sayfasına yönlendir.
    router.navigate(['/']);
    return false;
  }
};
