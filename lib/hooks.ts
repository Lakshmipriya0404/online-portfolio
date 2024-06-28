import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import type {
  FirebaseData,
  SectionName,
  TypeExperience,
  TypeLink,
  TypeProject,
  TypeSkills,
} from "./types";
import { fetchFirebaseDocs } from "./firebase";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}

//firebase
const fetchData = async (): Promise<FirebaseData> => {
  try {
    const data = await fetchFirebaseDocs();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const useFirebaseData = () => {
  const [links, setLinks] = useState<TypeLink[]>([]);
  const [experienceData, setExperienceData] = useState<TypeExperience[]>([]);
  const [projectData, setProjectData] = useState<TypeProject[]>([]);
  const [skillsData, setSkillsData] = useState<TypeSkills>({} as TypeSkills);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const data = await fetchData();
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

  return { links, experienceData, projectData, skillsData, loading };
};

export default useFirebaseData;
