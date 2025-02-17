import { useLanguage } from "../context/LanguageContext";
import { ComplaintResponse } from "../types";

interface ResultsCardProps {
  // subject: string;
  complaint: string;
  response: ComplaintResponse;
}

export function ResultsCard({
  // subject,
  complaint,
  response,
}: ResultsCardProps) {
  const { t } = useLanguage();

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="bg-black/80 backdrop-blur-md rounded-2xl p-6 border border-[#FFE600]/20">
        <h2 className="text-lg font-semibold text-[#FFE600] mb-3">
          {t("complaint")}
        </h2>
        {/* <h4 className="text-lg font-semibold text-[#a3a69d] mb-1">{subject}</h4> */}
        <p className="text-white/90">{complaint}</p>
      </div>
      {response.clientResponse && (
        <div className="bg-black/80 backdrop-blur-md rounded-2xl p-6 border border-[#FFE600]/20">
          <h2 className="text-lg font-semibold text-[#FFE600] mb-3">
            {" "}
            {t("aiqa.response")}
          </h2>
          <p className="text-white/90">{response.clientResponse}</p>
        </div>
      )}
    </div>
  );
}
