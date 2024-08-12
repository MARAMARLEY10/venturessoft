export interface IResponseCategoryMenu {
  error: boolean;
  codigo: string;
  message: string;
  menuItems: MenuItem[];
}

interface MenuItem {
  idMenu: number;
  descripción: string;
}

export interface IResponseBrand {
  error: boolean;
  codigo: string;
  message: string;
  menuItems: IBodyBrand[];
}

interface IBodyBrand {
  idItem: number;
  nombreMarca: string;
  descripción: string;
  imagen: string;
}
