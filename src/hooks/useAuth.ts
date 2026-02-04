import { useAuthStore } from "../state/authStore";

export function useAuth() {
  const accessToken = useAuthStore(s => s.accessToken);
  const user = useAuthStore(s => s.user);
  const logout = useAuthStore(s => s.logout);
  return { accessToken, user, logout, isAuthed: !!accessToken };
}
