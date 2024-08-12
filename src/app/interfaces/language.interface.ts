export interface ILenguage {
  header: IHeader;
  categoryMenu: ICategoryMenu;
  loadSpiner: ILoadSpiner;
  brandGallery: IBrandGallery;
}

interface IHeader {
  textOne: string;
  textTwo: string;
}

interface ICategoryMenu {
  title: string;
}

interface ILoadSpiner {
  default: string;
}

interface IBrandGallery {
  counter: string;
  button: string;
}

export enum ELenguageIndex {
  english = 0,
  spanish = 1,
}
