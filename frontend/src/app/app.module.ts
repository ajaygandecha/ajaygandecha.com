/**
 * The App Module ensures that all portions of the app can communicate
 * with each other.
 *
 * @author Ajay Gandecha <agandecha@unc.edu>
 * @copyright 2024
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, NgForOf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

/* HTTP and Auth */
import { RouterModule } from '@angular/router';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

/* Material UI Dependencies */
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { AppRoutingModule } from './app-routing.module';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TeachingComponent } from './teaching/teaching.component';
import { TeachingCardWidget } from './teaching/widgets/teaching-card/teaching-card.component';
import { MarkdownDirective } from './shared/markdown.directive';
import { NotesCardWidget } from './teaching/widgets/notes-card/notes-card.component';
import { AppsComponent } from './apps/apps.component';
import { AppCardWidget } from './apps/widget/app-card/app-card.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    NavigationComponent,
    TeachingComponent,
    AppsComponent,
    TeachingCardWidget,
    NotesCardWidget,
    AppCardWidget,
    MarkdownDirective,
  ],
  bootstrap: [AppComponent],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    /* Routing */
    AppRoutingModule,
    /* Angular */
    BrowserModule,
    BrowserAnimationsModule,
    NgForOf,
    LayoutModule,
    ReactiveFormsModule,
    /* Material UI */
    MatButtonModule,
    MatChipsModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatSliderModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatMenuModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}
