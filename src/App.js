import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";
import { VideoPage } from "./pages/video";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="video/:videoId" element={<VideoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
