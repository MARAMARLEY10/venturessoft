import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button-link-card',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './button-link-card.component.html',
})
export class ButtonLinkCardComponent {
  // todo agregar traduccion
}
