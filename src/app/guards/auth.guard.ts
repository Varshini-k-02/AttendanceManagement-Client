import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injector } from '@angular/core';

let injector: Injector;

export function setInjector(i: Injector) {
  injector = i;
}

export const authGuard: CanActivateFn = (route, state) => {
  const authService = injector.get(AuthService);
  return authService.isLogged();
};
