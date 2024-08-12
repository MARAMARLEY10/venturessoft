import { Injectable } from '@angular/core';
import { ELenguageIndex, ILenguage } from '../../interfaces/language.interface';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  lenguageSelected: ELenguageIndex = ELenguageIndex.english;

  readonly lenguages: ILenguage[] = [
    {
      header: {
        textOne: 'USA - lorem',
        textTwo: 'USA - impsu',
      },
      categoryMenu: {
        title: 'Explore Instant Coupons',
      },
      loadSpiner: {
        default: 'load content',
      },
      brandGallery: {
        button: 'More Instant Coupons',
        counter: 'Featured Instant Coupons',
      },
    },
    {
      header: {
        textOne: 'MXN - lorem',
        textTwo: 'MXN - impsu',
      },
      categoryMenu: {
        title: 'Explorar Cupones Instantáneos',
      },
      loadSpiner: {
        default: 'Esperando contenido',
      },
      brandGallery: {
        button: 'Mas Cupones Instantáneos',
        counter: 'Cupones Instantáneos Destacados',
      },
    },
  ];

  setLenguage(lenguageIndex: ELenguageIndex): void {
    this.lenguageSelected = lenguageIndex;
  }
}
