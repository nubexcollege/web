export type IMenu = {
  name: string;
  href: string;
  submenus?: Array<Exclude<IMenu, 'submenus'>>;
};
