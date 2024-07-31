/**
 * The App Card showcases an app that I have worked on.
 *
 * @author Ajay Gandecha <agandecha@unc.edu>
 * @copyright 2024
 */

import { Component, Input } from '@angular/core';
import { TechIcon } from '../../../model';
import { IconService } from '../../../icon.service';

@Component({
  selector: 'app-card',
  templateUrl: './app-card.component.html',
  styleUrl: './app-card.component.scss',
})
export class AppCardWidget {
  @Input() imageUrl!: string;
  @Input() name!: string;
  @Input() description!: string;
  @Input() platforms!: TechIcon[];
  @Input() languages!: TechIcon[];
  @Input() actionButtonUrl!: string;
  @Input() actionButtonText!: string;
  @Input() secondaryButtonUrl?: string;
  @Input() secondaryButtonText?: string;

  constructor(private icons: IconService) {}

  openUrl(url: string) {
    window.open(url, '_blank');
  }
}
