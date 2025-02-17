import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitch() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "al" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-lg bg-yellow-400 text-black font-medium hover:bg-yellow-500 transition-colors"
    >
      {t("switch.language")}
    </button>
  );
}
