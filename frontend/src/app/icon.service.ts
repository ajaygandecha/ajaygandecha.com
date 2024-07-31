/**
 * Service that, when injected into a component, enables the use of
 * icons from SimpleIcons.
 *
 * @author Ajay Gandecha <agandecha@unc.edu>
 * @copyright 2024
 */

import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'instagram',
      sanitizer.bypassSecurityTrustResourceUrl(
        'https://simpleicons.org/icons/instagram.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'github',
      sanitizer.bypassSecurityTrustResourceUrl(
        'https://simpleicons.org/icons/github.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'slack',
      sanitizer.bypassSecurityTrustResourceUrl(
        'https://simpleicons.org/icons/slack.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'linkedin',
      sanitizer.bypassSecurityTrustResourceUrl(
        'https://simpleicons.org/icons/linkedin.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'youtube',
      sanitizer.bypassSecurityTrustResourceUrl(
        'https://simpleicons.org/icons/youtube.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'git',
      sanitizer.bypassSecurityTrustResourceUrl(
        'https://simpleicons.org/icons/git.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'bash',
      sanitizer.bypassSecurityTrustResourceUrl(
        'https://simpleicons.org/icons/gnubash.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'python',
      sanitizer.bypassSecurityTrustResourceUrl(
        'https://simpleicons.org/icons/python.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'java',
      sanitizer.bypassSecurityTrustResourceUrl(
        'https://simpleicons.org/icons/intellijidea.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'typescript',
      sanitizer.bypassSecurityTrustResourceUrl(
        'https://simpleicons.org/icons/typescript.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'angular',
      sanitizer.bypassSecurityTrustResourceUrl(
        'https://simpleicons.org/icons/angular.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'fastapi',
      sanitizer.bypassSecurityTrustResourceUrl(
        'https://simpleicons.org/icons/fastapi.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'apple',
      sanitizer.bypassSecurityTrustResourceUrl(
        'https://simpleicons.org/icons/apple.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'swift',
      sanitizer.bypassSecurityTrustResourceUrl(
        'https://simpleicons.org/icons/swift.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'web',
      sanitizer.bypassSecurityTrustResourceUrl(
        'https://simpleicons.org/icons/googlechrome.svg'
      )
    );
  }
}
