import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ROUTES } from '../../core/constants/routes.const';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="welcome">
      <div class="welcome__card">
        <h1 class="welcome__title">Привет!</h1>
        <p class="welcome__text">
          Это мини-приложение для тестового задания. Перейдите на вторую страницу,
          чтобы выбрать пункты меню и увидеть счётчик выбранных элементов и их сумму.
        </p>
        <a [routerLink]="routes.selector" class="welcome__link">Перейти к выбору →</a>
      </div>
    </div>
  `,
  styles: [`
    .welcome {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
    }

    .welcome__card {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      padding: 2.5rem;
      max-width: 420px;
      box-shadow: var(--shadow-md);
    }

    .welcome__title {
      margin: 0 0 1rem;
      font-size: 1.75rem;
      font-weight: 700;
      letter-spacing: -0.02em;
    }

    .welcome__text {
      margin: 0 0 1.5rem;
      color: var(--color-text-muted);
      font-size: 1rem;
      line-height: 1.6;
    }

    .welcome__link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 600;
      padding: 0.6rem 1rem;
      background: var(--color-accent-muted);
      border-radius: var(--radius-md);
      transition: background 0.2s ease, color 0.2s ease;
    }

    .welcome__link:hover {
      background: var(--color-accent);
      color: #fff;
    }
  `],
})
export class WelcomeComponent {
  protected readonly routes = ROUTES;
}
