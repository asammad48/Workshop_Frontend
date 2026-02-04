import { getBaseUrl, getFetch } from "../clientFactory";

/**
 * Auth repository is written to NOT break if NSwag client is not generated yet.
 * Once NSwag is generated, replace the inline fetch with the generated AuthClient.
 */

export type LoginRequest = { email: string; password: string };
export type LoginResponse = { accessToken: string; user: { id: string; email: string; role?: string; branchId?: string | null } };

export const authRepo = {
  async login(req: LoginRequest): Promise<LoginResponse> {
    const baseUrl = getBaseUrl();
    const f = getFetch();
    const res = await f(`${baseUrl}/api/v1/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req)
    });
    return await res.json();
  }
};
