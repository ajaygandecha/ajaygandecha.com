/**
 * Card that shows a course list item on the teacing page.
 *
 * @author Ajay Gandecha <agandecha@unc.edu>
 * @copyright 2024
 */

import { Component, Input } from '@angular/core';
import { IconService } from '../../../icon.service';
import { TeachingListing } from '../../../model';

@Component({
  selector: 'teaching-card',
  templateUrl: './teaching-card.component.html',
  styleUrl: './teaching-card.component.scss',
})
export class TeachingCardWidget {
  @Input() listing!: TeachingListing;

  constructor(private icons: IconService) {}
}
