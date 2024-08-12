export interface IBodyCardBrand {
  cols: EColsTypeBrand;
  text: string;
  img: string;
  brandName: string;
}

export interface IButtonViewBrand {
  icon: EIconTypebrand;
  isActive: boolean;
}

export enum EColsTypeBrand {
  cols = 3,
  rows = 12,
}

export enum EIconTypebrand {
  cols = 'grid_on',
  rows = 'list',
}
