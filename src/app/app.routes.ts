import { Routes } from '@angular/router';
import { ROUTES } from './core/constants/routes.const';

export const routes: Routes = [
  { path: ROUTES.home, pathMatch: 'full', loadComponent: () => import('./pages/welcome/welcome.component').then(m => m.WelcomeComponent) },
  { path: ROUTES.selector, loadComponent: () => import('./pages/selector/selector.component').then(m => m.SelectorComponent) },
  { path: '**', redirectTo: ROUTES.home },
];
