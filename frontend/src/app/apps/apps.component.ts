/**
 * The App Component contains the apps that I have written.
 *
 * @author Ajay Gandecha <agandecha@unc.edu>
 * @copyright 2024
 */

import { Component } from '@angular/core';
import { Route } from '@angular/router';
import {
  ANGULAR_ICON,
  FASTAPI_ICON,
  IOS_ICON,
  PYTHON_ICON,
  SWIFT_ICON,
  TYPESCRIPT_ICON,
  WATCHOS_ICON,
  WEB_ICON,
} from '../model';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrl: './apps.component.scss',
})
export class AppsComponent {
  public static Route: Route = {
    path: 'apps',
    component: AppsComponent,
  };

  /** Stores the platforms and tools for each app. */
  luduanPlatforms = [IOS_ICON];
  luduanTools = [SWIFT_ICON];
  pocketchemPlatforms = [IOS_ICON, WATCHOS_ICON];
  pocketchemTools = [SWIFT_ICON];
  geogsmartPlatforms = [IOS_ICON];
  geogsmartTools = [SWIFT_ICON];
  csxlPlatforms = [WEB_ICON];
  csxlTools = [TYPESCRIPT_ICON, ANGULAR_ICON, PYTHON_ICON, FASTAPI_ICON];
}
