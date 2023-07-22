interface IGithub {
    name: string;
    href: string;
}

export interface IExperience {
    id: string;
    title: string;
    description: string;
    date: string;
    company: string;
    skills: string[];
    highlighted: boolean;
    github: IGithub[];
}