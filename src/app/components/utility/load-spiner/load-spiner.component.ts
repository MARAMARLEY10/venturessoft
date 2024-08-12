import { Component, inject, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LanguageService } from '../../../services/language/language.service';

@Component({
  selector: 'app-load-spiner',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './load-spiner.component.html',
  styleUrl: './load-spiner.component.scss',
})
export class LoadSpinerComponent {
  private readonly _languageService = inject(LanguageService);
  private readonly _languageIndex = this._languageService.lenguageSelected;
  private readonly text = this._languageService.lenguages[this._languageIndex].loadSpiner;

  @Input() message = this.text.default;
  @Input() diameterSpiner = 25;
}
