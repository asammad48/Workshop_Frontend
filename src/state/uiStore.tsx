import { create } from "zustand";
import type { ConfirmOptions } from "../components/ui/ConfirmDialog";

type ToastType = "success" | "error" | "info";
type ToastItem = { id: string; type: ToastType; message: string };

type ModalState = { title: string; content: React.ReactNode } | null;
type ConfirmState = (ConfirmOptions & { _resolver?: (ok: boolean) => void }) | null;

type UiState = {
  modal: ModalState;
  confirm: ConfirmState;
  toasts: ToastItem[];

  openModal: (m: { title: string; content: React.ReactNode }) => void;
  closeModal: () => void;

  openConfirm: (c: ConfirmOptions) => Promise<boolean>;
  resolveConfirm: (ok: boolean) => void;

  pushToast: (t: { type: ToastType; message: string }) => void;
  removeToast: (id: string) => void;
};

function uid() { return Math.random().toString(36).slice(2); }

export const useUiStore = create<UiState>((set, get) => ({
  modal: null,
  confirm: null,
  toasts: [],

  openModal: (m) => set({ modal: m }),
  closeModal: () => set({ modal: null }),

  openConfirm: (c) => new Promise<boolean>((resolve) => {
    set({ confirm: { ...c, _resolver: resolve } });
  }),

  resolveConfirm: (ok) => {
    const c = get().confirm;
    if (c?._resolver) c._resolver(ok);
    set({ confirm: null });
  },

  pushToast: (t) => {
    const id = uid();
    set({ toasts: [...get().toasts, { id, ...t }] });
    setTimeout(() => get().removeToast(id), 3500);
  },
  removeToast: (id) => set({ toasts: get().toasts.filter(x => x.id !== id) })
}));
