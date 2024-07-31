/**
 * The Navigation Component contains the top nav bar and wraps around
 * all page contents.
 *
 * @author Ajay Gandecha <agandecha@unc.edu>
 * @copyright 2024
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  constructor(public router: Router) {}

  openBlogPage() {
    window.open('https://ajaygandecha.medium.com', '_blank');
  }
}
