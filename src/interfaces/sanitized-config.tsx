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

export interface SanitizedSEO {
  title?: string;
  description?: string;
  imageURL?: string;
}

export interface SanitizedGoogleAnalytics {
  id?: string;
}


export interface SanitizedConfig {
  github: SanitizedGithub;
  googleAnalytics: SanitizedGoogleAnalytics;
  seo: SanitizedSEO;
}
