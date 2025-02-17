import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ComplaintScreen } from "./screens/ComplaintScreen";
import { ResultsScreen } from "./screens/ResultsScreen";
import { NotFoundScreen } from "./screens/NotFoundScreen";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ComplaintScreen />} />
          <Route path="/results" element={<ResultsScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
