export interface MenuItem {
  id: string;
  label: string;
  value: number;
  checked?: boolean;
}

export interface MenuSection {
  id: string;
  title: string;
  items: MenuItem[];
}
