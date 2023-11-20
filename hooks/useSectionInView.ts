import { useActiveSectionContext } from "@/context/activeSectionContext";
import type { SectionName } from "@/lib/types";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const useSectionInView = (activeSection: SectionName, threshold = 0.2) => {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(activeSection);
    }
  }, [activeSection, inView, setActiveSection, timeOfLastClick]);

  return { ref };
};

export default useSectionInView;
