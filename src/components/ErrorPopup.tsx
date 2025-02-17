import { useEffect } from "react";
import { XCircle, X } from "../assets/icons";

interface ErrorPopupProps {
  message: string;
  onClose: () => void;
  duration?: number;
}

export function ErrorPopup({
  message,
  onClose,
  duration = 5000,
}: ErrorPopupProps) {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div className="bg-red-500/95 backdrop-blur-sm text-white px-6 py-4 rounded-xl shadow-lg border border-red-400/20 flex items-center gap-3 max-w-md">
        <XCircle className="w-5 h-5 flex-shrink-0 text-white" />
        <p className="flex-1 text-sm font-medium">{message}</p>
        <button
          onClick={onClose}
          className="p-1 hover:bg-red-400/20 rounded-full transition-colors"
          aria-label="Close error message"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
