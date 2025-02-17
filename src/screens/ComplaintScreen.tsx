import { ComplaintForm } from "../components/ComplaintForm";
import { Logo } from "../components/Logo";
import LanguageSwitch from "../helper/LanguageSwitch";

export function ComplaintScreen() {
  return (
    <div className="min-h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 to-black/90" />
      </div>

      <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-4xl pt-2">
          <div className="flex justify-end">
            <LanguageSwitch />
          </div>
        </div>
        <div className="mb-8 transform -translate-y-8 pt-2">
          <Logo />
        </div>
        <ComplaintForm />
      </div>
    </div>
  );
}
