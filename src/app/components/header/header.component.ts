import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ApiCategoryMenuService } from '../../services/api/api-category-menu.service';
import { MatButtonModule } from '@angular/material/button';
import { ButtonLinkCardComponent } from '../utility/button-link-card/button-link-card.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbar, MatIconModule, MatButtonModule, MatButtonModule, ButtonLinkCardComponent],
  templateUrl: './header.component.html',
  styles: [
    `
      .login-button {
        color: black;
        border: 1px solid #000;
        background-color: white;
        margin-right: 8px;
        font-weight: bold;
        padding: 8px 16px;
        border-radius: 20px;
      }
      .login-button mat-icon,
      .link-card-button mat-icon {
        margin-left: 4px;
      }
    `,
  ],
})
export class HeaderComponent {
  constructor(private service: ApiCategoryMenuService) {}
}
