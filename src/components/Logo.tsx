import { MessageSquare } from "../assets/icons";
import { useLanguage } from "../context/LanguageContext";

export function Logo() {
  const { t } = useLanguage();
  return (
    <div>
      <div className="bg-[#FFE600] p-5 rounded-full shadow-xxl relative">
        <MessageSquare
          fill="black"
          strokeWidth={1}
          className="w-16 h-16 text-black ml-1 mt-1"
        />
        <div className="absolute inset-0 flex items-center justify-center ml-14 mb-2">
          <span className="text-4xl font-bold text-black text-center tracking-tight">
            AiQA
          </span>
        </div>
      </div>

      <p className="text-[#FFE600] text-center mt-2">{t("title")}</p>
    </div>
  );
}
