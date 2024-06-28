export type SectionName = TypeLink["name"];
export type TypeLink = {
  name: string;
  hash: string;
};

export type TypeExperience = {
  date: string;
  description: string;
  icon: string; //need to convert
  location: string;
  title: string;
};

export type TypeProject = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
};

export type TypeSkills = string[];

export type FirebaseData = {
  links: TypeLink[];
  experienceData: TypeExperience[];
  projectsData: TypeProject[];
  skillsData: TypeSkills;
}[];
