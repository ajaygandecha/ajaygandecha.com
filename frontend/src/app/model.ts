/** Define types and constants relating to icons. */

export interface TechIcon {
  svg: string;
  title: string;
}

export const BASH_ICON: TechIcon = {
  svg: 'bash',
  title: 'Bash',
};

export const PYTHON_ICON: TechIcon = {
  svg: 'python',
  title: 'Python',
};

export const GIT_ICON: TechIcon = {
  svg: 'git',
  title: 'Git',
};

export const JAVA_ICON: TechIcon = {
  svg: 'java',
  title: 'Java',
};

export const TYPESCRIPT_ICON: TechIcon = {
  svg: 'typescript',
  title: 'TypeScript',
};

export const ANGULAR_ICON: TechIcon = {
  svg: 'angular',
  title: 'Angular',
};

export const FASTAPI_ICON: TechIcon = {
  svg: 'fastapi',
  title: 'FastAPI',
};

export const IOS_ICON: TechIcon = {
  svg: 'apple',
  title: 'iOS',
};

export const WATCHOS_ICON: TechIcon = {
  svg: 'apple',
  title: 'watchOS',
};

export const WEB_ICON: TechIcon = {
  svg: 'web',
  title: 'Web',
};

export const SWIFT_ICON: TechIcon = {
  svg: 'swift',
  title: 'Swift',
};

/** Encapsulates a teaching listing. */

export interface TeachingListing {
  termText: string;
  courseTitle: string;
  courseLink: string;
  position: string;
  techIcons: TechIcon[];
  body: string;
}
