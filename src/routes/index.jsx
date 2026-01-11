import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseDashboard from "../pages/HomePage";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home / Dashboard */}
        <Route path="/" element={<CourseDashboard />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
