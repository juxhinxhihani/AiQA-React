import { useState } from "react";
import { Send, Loader2 } from "../assets/icons";
import { ComplaintResponse } from "../types";
import { useNavigate } from "react-router-dom";
//import { complaintService } from "../services/Complaints";
import { ErrorPopup } from "./ErrorPopup";
import { useLanguage } from "../context/LanguageContext";

export function ComplaintForm() {
  // const [subject, setSubject] = useState("");
  const [complaint, setComplaint] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // const [retry, setRetry] = useState(0);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleSubmit = async () => {
    if (!complaint.trim()) return;

    setLoading(true);
    setError(null);
    // const complaintRequest: ComplaintRequest = {
    //   text: complaint,
    // };
    setTimeout(async () => {
      try {
        //const datanonUse = await complaintService.submitComplaint(complaintRequest);
        const data: ComplaintResponse = {
          clientResponse:
            "Më vjen keq për shqetësimin tuaj. Ankesa juaj është marrë dhe do të trajtohet me prioritet. Dikush nga ekipi ynë do t'ju kontaktojë sa më shpejt të jetë e mundur. Faleminderit për mirëkuptimin.",
          generation: "",
          generation_token_count: 0,
          stop_reason: "",
          prompt_token_count: 0,
        };

        navigate("/results", { state: { complaint, response: data } });
      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : "An unexpected error occurred. Please try again.";
        setError(errorMessage);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }, 3000);
  };

  return (
    <>
      {error && <ErrorPopup message={error} onClose={() => setError(null)} />}
      <div className="w-full max-w-xl bg-black/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-[#FFE600]/20">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          {/* subject Field */}
          {/* <div className="space-y-2">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-[#FFE600]"
            >
              {t("complaint.subject")}
            </label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter your complaint subject here..."
              className="w-full px-4 py-3 bg-black/50 border border-[#FFE600]/30 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-[#FFE600] focus:border-transparent backdrop-blur-sm transition-all first-letter:uppercase"
            />
          </div> */}
          {/* Input Field */}
          <div className="space-y-2">
            <label
              htmlFor="complaint"
              className="block text-sm font-medium text-[#FFE600]"
            >
              {t("complaint")}
            </label>
            <textarea
              id="complaint"
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
              placeholder={t("describe")}
              rows={5}
              minLength={20}
              required
              className="w-full px-4 py-3 bg-black/50 border border-[#FFE600]/30 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-[#FFE600] focus:border-transparent backdrop-blur-sm transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="relative group">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading || complaint.trim().length < 20}
              className="w-full bg-[#FFE600] hover:bg-[#FFD700] text-black font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2 shadow-lg"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>{t("analyzing")}</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>{t("submit")}</span>
                </>
              )}
            </button>
            {complaint.trim().length < 20 && (
              <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 text-[#FFE600] text-sm rounded-lg whitespace-nowrap">
                {t("form.tooltip")}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                  <div className="border-x-8 border-x-transparent border-t-8 border-t-black/90"></div>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
