import { createPortal } from "react-dom";
import { Button } from "./Button";
import cls from "./ui.module.css";
import { useUiStore } from "../../state/uiStore";

export type ConfirmOptions = {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  danger?: boolean;
};

export function confirm(opts: ConfirmOptions): Promise<boolean> {
  return useUiStore.getState().openConfirm(opts);
}

export function ConfirmDialogHost() {
  const c = useUiStore(s => s.confirm);
  const resolve = useUiStore(s => s.resolveConfirm);

  if (!c) return null;

  return createPortal(
    <div className={cls.overlay} onMouseDown={() => resolve(false)}>
      <div className={cls.modal} onMouseDown={e => e.stopPropagation()}>
        <div className={cls.modalHeader}><strong>{c.title}</strong></div>
        <div className={cls.modalBody}>
          <p className="muted">{c.message}</p>
          <div className={cls.modalFooter}>
            <Button variant="secondary" onClick={() => resolve(false)}>{c.cancelText ?? "Cancel"}</Button>
            <Button variant={c.danger ? "danger" : "primary"} onClick={() => resolve(true)}>{c.confirmText ?? "OK"}</Button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
