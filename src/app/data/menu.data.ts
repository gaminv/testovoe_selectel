import { MenuSection } from '../models/menu.model';

export const MENU_SECTIONS: MenuSection[] = [
  {
    id: 'type-1',
    title: 'Тип 1',
    items: [
      { id: 't1-1', label: 'Item 1', value: 20, checked: false },
      { id: 't1-2', label: 'Item 2', value: 30, checked: false },
      { id: 't1-3', label: 'Item 3', value: 40, checked: false },
      { id: 't1-4', label: 'Item 4', value: 50, checked: false },
    ],
  },
  {
    id: 'type-2',
    title: 'Тип 2',
    items: [
      { id: 't2-1', label: 'Элемент A', value: 10, checked: false },
      { id: 't2-2', label: 'Элемент B', value: 25, checked: false },
      { id: 't2-3', label: 'Элемент C', value: 35, checked: false },
    ],
  },
];
