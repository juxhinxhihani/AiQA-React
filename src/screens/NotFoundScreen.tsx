import { useNavigate } from "react-router-dom";
import { Home } from "../assets/icons";

export function NotFoundScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-black/95 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-bold text-[#FFE600] mb-8">404</h1>

        <div className="bg-black/80 backdrop-blur-md rounded-2xl p-8 border border-[#FFE600]/20">
          <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-gray-300 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center px-6 py-3 bg-[#FFE600] hover:bg-[#FFD700] text-black rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </button>
        </div>

        <div className="mt-8 text-[#FFE600]/50 text-sm">
          Lost in the digital space? Don't worry, we'll guide you back.
        </div>
      </div>
    </div>
  );
}
