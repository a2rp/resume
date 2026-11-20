import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Loader from "../components/loader";

const HomePage = lazy(() => import("../pages/home"));
const ResumeOnlyPage = lazy(() => import("../pages/resumeOnly"));

const AppRoutes = () => (
    <Suspense fallback={<Loader />}>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume-only" element={<ResumeOnlyPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </Suspense>
);

export default AppRoutes;
