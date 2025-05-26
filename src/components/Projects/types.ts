export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  coverImage: string;
  tags: string[];
  details: {
    challenge: string;
    solution: string;
    impact: string;
  };
  technologies: string[];
  icons: {
    main: string;
    tech: string[];
  };
  video?: string;
}