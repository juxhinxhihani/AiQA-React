import { ArrowLeft, AlertTriangle } from "../assets/icons";

interface ErrorCardProps {
  onBack: () => void;
}

export function ErrorCard({ onBack }: ErrorCardProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-black/95 flex items-center justify-center p-4">
      <div className="bg-black/80 backdrop-blur-md rounded-2xl p-8 max-w-md w-full text-center">
        <AlertTriangle className="w-16 h-16 text-[#FFE600] mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white mb-4">No Results Found</h2>
        <p className="text-gray-300 mb-6">
          Please submit a complaint first to see the analysis.
        </p>
        <button
          onClick={onBack}
          className="inline-flex items-center px-6 py-3 bg-[#FFE600] text-black rounded-xl hover:bg-[#FFD700] transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Form
        </button>
      </div>
    </div>
  );
}
