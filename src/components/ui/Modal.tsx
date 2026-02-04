import { createPortal } from "react-dom";
import { useUiStore } from "../../state/uiStore";
import cls from "./ui.module.css";

export function ModalHost() {
  const modal = useUiStore(s => s.modal);
  const close = useUiStore(s => s.closeModal);

  if (!modal) return null;
  return createPortal(
    <div className={cls.overlay} onMouseDown={close}>
      <div className={cls.modal} onMouseDown={e => e.stopPropagation()}>
        <div className={cls.modalHeader}>
          <strong>{modal.title}</strong>
          <button className={cls.iconBtn} onClick={close}>✕</button>
        </div>
        <div className={cls.modalBody}>{modal.content}</div>
      </div>
    </div>,
    document.body
  );
}
