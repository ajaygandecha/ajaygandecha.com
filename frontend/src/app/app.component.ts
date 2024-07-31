/**
 * The App Component serves as an entrypoint for the application,
 * which shows the navigation controller.
 *
 * @author Ajay Gandecha <agandecha@unc.edu>
 * @copyright 2024
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-navigation></app-navigation>',
})
export class AppComponent {
  title = 'frontend';
}
