import { API_BASE_URL } from "./config";
import { useAuthStore } from "../state/authStore";

/**
 * Shared fetch wrapper:
 * - injects Authorization header if token exists
 * - normalizes errors
 *
 * NSwag generated clients will call fetch internally; we hook into that by providing a custom fetch in clientFactory.
 */

export type ApiError = {
  status: number;
  message: string;
  details?: any;
};

export async function authFetch(input: RequestInfo | URL, init?: RequestInit) {
  const token = useAuthStore.getState().accessToken;
  const headers = new Headers(init?.headers || {});
  headers.set("Accept", "application/json");
  if (token) headers.set("Authorization", `Bearer ${token}`);

  return fetch(input, { ...init, headers });
}

export function makeUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${API_BASE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

export async function toApiError(res: Response): Promise<ApiError> {
  let payload: any = null;
  try { payload = await res.json(); } catch {}
  const message = payload?.message || payload?.error || res.statusText || "Request failed";
  return { status: res.status, message, details: payload };
}
