import { useMemo } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { ToastHost } from "../components/ui/Toast";
import { ConfirmDialogHost } from "../components/ui/ConfirmDialog";
import { ModalHost } from "../components/ui/Modal";

export function AppShell() {
  const element = useRoutes(useMemo(() => routes, []));

  return (
    <>
      {element}
      <ModalHost />
      <ConfirmDialogHost />
      <ToastHost />
    </>
  );
}
