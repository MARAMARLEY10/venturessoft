import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMenuItemCategory } from '../../interfaces/category-menu.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryMenuService {
  idMenuSelected$: BehaviorSubject<IMenuItemCategory> = new BehaviorSubject<IMenuItemCategory>({
    text: '',
    idMenu: 0,
    isActive: false,
  });

  setIdMenu(item: IMenuItemCategory): void {
    this.idMenuSelected$.next(item);
  }
}
