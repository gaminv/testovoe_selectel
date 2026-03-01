import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ROUTES } from '../../core/constants/routes.const';
import { MENU_SECTIONS } from '../../data/menu.data';
import { MenuSection } from '../../models/menu.model';
import { SELECTOR_LABELS } from './selector.const';

@Component({
  selector: 'app-selector',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.css',
})
export class SelectorComponent {
  protected readonly routes = ROUTES;
  protected readonly labels = SELECTOR_LABELS;

  readonly sections = signal<MenuSection[]>(this.deepCopySections(MENU_SECTIONS));
  readonly activeSectionId = signal<string>(MENU_SECTIONS[0]?.id ?? '');

  readonly activeSection = computed(() => {
    const id = this.activeSectionId();
    return this.sections().find((s) => s.id === id) ?? null;
  });

  readonly selectedCount = computed(() => {
    const section = this.activeSection();
    if (!section) return 0;
    return section.items.filter((i) => i.checked).length;
  });

  readonly totalValue = computed(() => {
    const section = this.activeSection();
    if (!section) return 0;
    return section.items.filter((i) => i.checked).reduce((sum, i) => sum + i.value, 0);
  });

  setActiveSection(id: string): void {
    this.activeSectionId.set(id);
  }

  toggleItem(sectionId: string, itemId: string): void {
    this.sections.update((sections) =>
      sections.map((section) => {
        if (section.id !== sectionId) return section;
        return {
          ...section,
          items: section.items.map((item) =>
            item.id === itemId ? { ...item, checked: !item.checked } : item
          ),
        };
      })
    );
  }

  private deepCopySections(sections: MenuSection[]): MenuSection[] {
    return sections.map((s) => ({
      ...s,
      items: s.items.map((i) => ({ ...i })),
    }));
  }
}
