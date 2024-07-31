/**
 * The Home Component represents the home page of the
 * website.
 *
 * @author Ajay Gandecha <agandecha@unc.edu>
 * @copyright 2024
 * @license MIT
 */

import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { IconService } from '../icon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public static Route: Route = {
    path: '',
    component: HomeComponent,
  };

  constructor(private icons: IconService) {}
}
