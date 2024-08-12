import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { IResponseBrand, IResponseCategoryMenu } from '../../interfaces/api-category.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiCategoryMenuService {
  private readonly BASE_URL = environment.apiCategory;
  private readonly http = inject(HttpClient);

  getAllCategories(): Observable<IResponseCategoryMenu> {
    return this.http.get<IResponseCategoryMenu>(`${this.BASE_URL}/Examen/AngularApi/Categorias`);
  }

  getBrandById(idCategory: number): Observable<IResponseBrand> {
    return this.http.get<IResponseBrand>(
      `${this.BASE_URL}/Examen/AngularApi/Marcas?idMenu=${idCategory}`
    );
  }
}
