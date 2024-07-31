/**
 * The Teaching Component shows the courses that I have taught.
 *
 * @author Ajay Gandecha <agandecha@unc.edu>
 * @copyright 2024
 */

import { Component } from '@angular/core';
import { Route } from '@angular/router';
import {
  ANGULAR_ICON,
  BASH_ICON,
  FASTAPI_ICON,
  GIT_ICON,
  JAVA_ICON,
  PYTHON_ICON,
  TeachingListing,
  TYPESCRIPT_ICON,
} from '../model';

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrl: './teaching.component.scss',
})
export class TeachingComponent {
  public static Route: Route = {
    path: 'teaching',
    component: TeachingComponent,
  };

  /** Courses that I have served as an instructor for. */
  instructorListings: TeachingListing[] = [
    {
      termText: 'Fall 2024',
      courseTitle: 'COMP 290: Essential Tools for Computer Science',
      courseLink: '',
      position: 'Student Instructor',
      techIcons: [BASH_ICON, GIT_ICON, PYTHON_ICON],
      body: `This brand-new class introduced students to essential computer science
      tools and technologies, such as the command line interface, git, Vim,
      Docker, and more. Students also learned how to methodologies to help them
      plan, develop, and present their own software projects. *I co-taught
      this course with Noah Smith, a fellow student instructor at UNC!*
    `,
    },
  ];

  /** Courses that I have served as a teaching assistant for. */
  taListings: TeachingListing[] = [
    {
      termText: 'Fall 2023 - Fall 2024',
      courseTitle: 'COMP 423: Foundations of Software Engineering',
      courseLink: '',
      position: 'Lead Teaching Assistant',
      techIcons: [TYPESCRIPT_ICON, ANGULAR_ICON, PYTHON_ICON, FASTAPI_ICON],
      body: `
Design curriculum content, create assignments and quizzes, prepared supplementary materials, and lead guest lectures.

**Spring 2024 Guest Lectures**: [Quiz 1 Review](https://youtube.com/live/enIC4NnHgZ4?feature=share),[Observables and HTTP](https://youtube.com/live/OpbmrAYeGDY), [Tech Stack Walkthrough](https://www.youtube.com/watch?v=TyQl-5N8GlQ), [Writing Design Docs](), [Quiz 3 Review and Backend Design Practice](https://www.youtube.com/watch?v=yzQcBHPIZKk)

**Fall 2023 Guest Lectures**: [Fullstack Debugging Strategies](https://youtube.com/live/hqcYKIdrxdE?feature=share), [Angular Modules](https://youtube.com/live/YWfdlGHL6sU)

**Supplemental Materials**: [Introduction to Angular YouTube Series](https://www.youtube.com/watch?v=au-TbYUsgls&list=PLP8IqT5yHDTr6q3FC7ILxoHEXKte-fcdu&pp=gAQBiAQB), [Database System Design Practice Video](https://www.youtube.com/watch?v=XNmAUfsuRFE&t=2853s), [TypeScript for the Java Developer](https://github.com/unc-csxl/orientation/blob/main/frontend/typescript_tutorial.md), [Introduction to Higher Order Functions](https://github.com/unc-csxl/orientation/blob/main/frontend/higher_order_functions.md), [Crash Course on Angular Widgets](https://github.com/unc-csxl/orientation/blob/main/angular/widgets.md), [Angular Resolvers Reading](https://github.com/unc-csxl/orientation/blob/main/sqlalchemy/0_introduction.md), [Middleware Error Handling](https://github.com/unc-csxl/orientation/blob/main/backend/middleware.md), [SQLAlchemy Tutorial](https://github.com/unc-csxl/orientation/blob/main/sqlalchemy/0_introduction.md), [Tech Stack Diagram](https://go.unc.edu/comp423-23f-stack)
`,
    },
    {
      termText: 'Summer II 2024',
      courseTitle: 'COMP 210: Data Structures and Analysis',
      courseLink: '',
      position: 'Undergraduate Teaching Assistant',
      techIcons: [JAVA_ICON],
      body: `
Led guest lectures, created review sessions and practice materials over the summer session with a small cohort of students.

**Guest Lectures**: [Intro to Object-Oriented Programming](https://docs.google.com/presentation/d/1WgUtC_014nXub_7IdqVDVzUKdOfFZsaSxdbs0pceVkg/edit#slide=id.p), [Encapsulation & Abstract Data Types
](https://docs.google.com/presentation/d/1DxzAaDG1snIyZ42_lLI-PkE_mLzxgcmBoKHqWz9kefU/edit#slide=id.p)

`,
    },
    {
      termText: 'Spring 2023',
      courseTitle: 'COMP 301: Foundations of Programming',
      courseLink: '',
      position: 'Undergraduate Teaching Assistant',
      techIcons: [JAVA_ICON],
      body: `
Lead of answering online questions on Piazza, created practice materials, led midterm debrief sessions.

**Supplemental Materials**: [Interfaces vs Abstract Classes](https://github.com/comp301unc/piazza-examples/blob/main/interface-vs-abstract-class/explanation.md), [Practice Exams](https://github.com/comp301unc/practice-exams/tree/main/Spring%202023)
`,
    },
  ];
}
