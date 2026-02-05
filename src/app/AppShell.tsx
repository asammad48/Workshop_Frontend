import { useMemo, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { ToastHost } from "../components/ui/Toast";
import { ConfirmDialogHost } from "../components/ui/ConfirmDialog";
import { ModalHost } from "../components/ui/Modal";
import { useThemeStore } from "../state/themeStore";

export function AppShell() {
  const element = useRoutes(useMemo(() => routes, []));

  useEffect(() => {
    useThemeStore.getState().loadTheme();
  }, []);

  return (
    <>
      {element}
      <ModalHost />
      <ConfirmDialogHost />
      <ToastHost />
    </>
  );
}
