import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle, ArrowLeft } from "../assets/icons";
import { ComplaintResponse } from "../types";
import { ResultsCard } from "../components/ResultsCard";
import { ErrorCard } from "../components/ErrorCard";
import { useLanguage } from "../context/LanguageContext";

interface LocationState {
  // subject: string;
  complaint: string;
  response: ComplaintResponse;
}

export function ResultsScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const state = location.state as LocationState;

  if (!state?.response) {
    return <ErrorCard onBack={() => navigate("/")} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-black/95 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 pt-8">
          <div className="bg-[#FFE600] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-black" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            {t("analysis.result")}
          </h1>
          <p className="text-[#FFE600]/90">{t("result.template")}</p>
        </div>

        <ResultsCard
          // subject={state.subject}
          complaint={state.complaint}
          response={state.response}
        />

        <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-[#FFE600]/10 p-4">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => navigate("/")}
              className="w-full md:w-auto md:min-w-[200px] mx-auto flex items-center justify-center px-6 py-3 bg-[#FFE600] text-black rounded-2xl hover:bg-[#FFE600] transition-all transform hover:scale-[1.01] active:scale-[0.98]"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              {t("submit.another")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
