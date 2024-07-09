export interface SanitizedGithub {
  username: string;
}

export interface SanitizedGitHubProjects {
  display: boolean;
  header: string;
  mode: string;
  automatic: {
    sortBy: string;
    limit: number;
    exclude: {
      forks: boolean;
      projects: Array<string>;
    };
  };
  manual: {
    projects: Array<string>;
  };
}

export interface SanitizedExternalProject {
  title: string;
  description?: string;
  imageUrl?: string;
  link: string;
}

export interface SanitizedExternalProjects {
  header: string;
  projects: SanitizedExternalProject[];
}

export interface SanitizedProjects {
  github: SanitizedGitHubProjects;
  external: SanitizedExternalProjects;
}

export interface SanitizedSEO {
  title?: string;
  description?: string;
  imageURL?: string;
}

export interface SanitizedSocial {
  linkedin?: string;
  X?: string;
  researchGate?: string;
  facebook?: string;
  instagram?: string;
  reddit?: string;
  threads?: string;
  youtube?: string;
  medium?: string;
  dev?: string;
  stackoverflow?: string;
  website?: string;
  telegram?: string;
  phone?: string;
  email?: string;
}

export interface SanitizedPortfolio {
  resumeFileUrl?: string;
  cvFileUrl?: string;
  detailedPortfolioUrl?: string;
}

export interface SanitizedExperience {
  company?: string;
  position?: string;
  certificateLink?: string;
  from: string;
  to: string;
  companyLink?: string;
  description?: string;
}

export interface SanitizedCertification {
  body?: string;
  name?: string;
  givenBy?: string;
  year?: string;
  link?: string;
}

export interface SanitizedEducation {
  institution?: string;
  institutionLink?: string;
  degree?: string;
  degreeLink?: string;
  from: string;
  to: string;
  grade?: string;
  achievements?: string[];
}

export interface SanitizedPublication {
  title: string;
  conferenceName?: string;
  journalName?: string;
  authors?: string;
  link?: string;
  description?: string;
}

export interface SanitizedGoogleAnalytics {
  id?: string;
}

export interface SanitizedBlog {
  display: boolean;
  source: string;
  username: string;
  limit: number;
}

export interface SanitizedCustomTheme {
  primary: string;
  secondary: string;
  accent: string;
  neutral: string;
  'base-100': string;
  '--rounded-box': string;
  '--rounded-btn': string;
}

export interface SanitizedThemeConfig {
  defaultTheme: string;
  disableSwitch: boolean;
  displayAvatarRing: boolean;
  themes: Array<string>;
  lightTheme: SanitizedCustomTheme;
  darkTheme: SanitizedCustomTheme;
}

export interface SanitizedConfig {
  github: SanitizedGithub;
  projects: SanitizedProjects;
  seo: SanitizedSEO;
  social: SanitizedSocial;
  portfolio: SanitizedPortfolio;
  skills: Array<string>;
  experiences: Array<SanitizedExperience>;
  educations: Array<SanitizedEducation>;
  certifications: Array<SanitizedCertification>;
  publications: Array<SanitizedPublication>;
  googleAnalytics: SanitizedGoogleAnalytics;
  blog: SanitizedBlog;
  themeConfig: SanitizedThemeConfig;
  footer?: string;
}
