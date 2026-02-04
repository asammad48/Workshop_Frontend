import { createPortal } from "react-dom";
import cls from "./ui.module.css";
import { useUiStore } from "../../state/uiStore";

type ToastType = "success" | "error" | "info";

export const toast = {
  success(msg: string) { useUiStore.getState().pushToast({ type: "success", message: msg }); },
  error(msg: string) { useUiStore.getState().pushToast({ type: "error", message: msg }); },
  info(msg: string) { useUiStore.getState().pushToast({ type: "info", message: msg }); }
};

export function ToastHost() {
  const toasts = useUiStore(s => s.toasts);
  const remove = useUiStore(s => s.removeToast);

  if (!toasts.length) return null;

  return createPortal(
    <div className={cls.toastStack}>
      {toasts.map(t => (
        <div key={t.id} className={[cls.toast, cls["toast_"+t.type]].join(" ")}>
          <span>{t.message}</span>
          <button className={cls.iconBtn} onClick={() => remove(t.id)}>✕</button>
        </div>
      ))}
    </div>,
    document.body
  );
}
