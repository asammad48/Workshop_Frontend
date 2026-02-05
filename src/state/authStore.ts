import { create } from "zustand";

export type UserVm = {
  id: string;
  email: string;
  role?: string;
  branchId?: string | null;
};

type AuthState = {
  accessToken: string | null;
  user: UserVm | null;
  setAuth: (token: string, user: UserVm) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: localStorage.getItem("accessToken"),
  user: (() => {
    const raw = localStorage.getItem("user");
    if (!raw || raw === "undefined") return null;
    try {
      return JSON.parse(raw) as UserVm;
    } catch (e) {
      console.error("Failed to parse user from localStorage", e);
      localStorage.removeItem("user");
      return null;
    }
  })(),
  setAuth: (token, user) => {
    localStorage.setItem("accessToken", token);
    localStorage.setItem("user", JSON.stringify(user));
    set({ accessToken: token, user });
  },
  logout: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    set({ accessToken: null, user: null });
  }
}));
