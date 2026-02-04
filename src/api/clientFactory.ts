import { API_BASE_URL } from "./config";
import { authFetch, makeUrl, toApiError } from "./http";

/**
 * NSwag uses `fetch` in the generated client (Fetch template).
 * We provide:
 * - baseUrl
 * - a custom fetch that injects JWT header
 *
 * Once you generate `src/api/generated/apiClient.ts`, you can import clients from there
 * and construct them using this factory.
 */

export function getBaseUrl() {
  return API_BASE_URL;
}

export function getFetch() {
  return async (url: RequestInfo | URL, init?: RequestInit) => {
    const resolvedUrl = typeof url === "string" ? makeUrl(url) : url;
    const res = await authFetch(resolvedUrl, init);
    if (!res.ok) {
      throw await toApiError(res);
    }
    return res;
  };
}
