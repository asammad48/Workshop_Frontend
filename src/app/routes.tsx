import { createRoutesFromElements, Route } from "react-router-dom";
import { ProtectedRoute } from "./security/ProtectedRoute";
import { LoginPage } from "../pages/auth/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { NotFoundPage } from "../pages/NotFoundPage";

export const routes = createRoutesFromElements(
  <>
    <Route path="/login" element={<LoginPage />} />
    <Route element={<ProtectedRoute />}>
      <Route path="/" element={<DashboardPage />} />
    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </>
);
