import { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "al";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    "complaint.subject": "Subject Of Your Complaint",
    complaint: "Complaint",
    "analysis.complete": "Analysis Complete",
    "aiqa.response": "AiQA Response",
    "switch.language": "AL",
    submit: "Submit",
    analyzing: "Analyzing...",
    describe: "Describe your complaint in detail...",
    "result.template": "Here's what we found about your complaint",
    "submit.another": "Submit Another Complaint",
    title: "Intelligent Complaint Analysis",
    "analysis.result": "Analysis Complete",
    "form.tooltip": "Please enter your complain at least 20 characters",
  },
  al: {
    "complaint.subject": "Subjekti i ankeses suaj",
    complaint: "Ankesa",
    "analysis.complete": "Perfundimi i analizes",
    "aiqa.response": "Pergjigja e AiQA",
    "switch.language": "EN",
    submit: "Dergo",
    analyzing: "Duke analizuar...",
    describe: "Përshkruani ankesën tuaj në detaje...",
    "result.template": "Këtu është çfarë gjetëm në lidhje me ankesën tuaj",
    "submit.another": "Dërgo një ankesë tjetër",
    title: "Analizë inteligjente e ankesave",
    "analysis.result": "Analiza e Përfunduar",
    "form.tooltip": "Ju lutem shkruani ankesen tuaj metë paktën 20 karaktere",
  },
};
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("al");

  // Add persistence
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
