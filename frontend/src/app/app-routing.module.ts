/**
 * The App Routing Module ensures that all pages are connnected
 * to the Angular routing system.
 *
 * @author Ajay Gandecha <agandecha@unc.edu>
 * @copyright 2024
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeachingComponent } from './teaching/teaching.component';
import { AppsComponent } from './apps/apps.component';

const routes: Routes = [
  HomeComponent.Route,
  TeachingComponent.Route,
  AppsComponent.Route,
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
