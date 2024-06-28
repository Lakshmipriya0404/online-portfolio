"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { TypeLink, TypeExperience, TypeProject, TypeSkills } from "@/lib/types";
import { fetchFirebaseDocs } from "@/lib/firebase";

interface FirebaseDataContextType {
  links: TypeLink[];
  experienceData: TypeExperience[];
  projectData: TypeProject[];
  skillsData: TypeSkills;
  loading: boolean;
}

const FirebaseDataContext = createContext<FirebaseDataContextType | undefined>(
  undefined
);

export const FirebaseDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [links, setLinks] = useState<TypeLink[]>([]);
  const [experienceData, setExperienceData] = useState<TypeExperience[]>([]);
  const [projectData, setProjectData] = useState<TypeProject[]>([]);
  const [skillsData, setSkillsData] = useState<TypeSkills>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const data = await fetchFirebaseDocs();
      if (data.length > 0) {
        setLinks(data[0].links);
        setExperienceData(data[0].experienceData);
        setProjectData(data[0].projectsData);
        setSkillsData(data[0].skillsData);
      }
      setLoading(false);
    };

    fetchDataAsync();
  }, []);

  return (
    <FirebaseDataContext.Provider
      value={{ links, experienceData, projectData, skillsData, loading }}
    >
      {children}
    </FirebaseDataContext.Provider>
  );
};

export const useFirebaseData = (): FirebaseDataContextType => {
  const context = useContext(FirebaseDataContext);
  if (context === undefined) {
    throw new Error(
      "useFirebaseData must be used within a FirebaseDataProvider"
    );
  }
  return context;
};
