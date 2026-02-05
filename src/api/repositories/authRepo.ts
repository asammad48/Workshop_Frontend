import { getBaseUrl, getFetch } from "../clientFactory";
import { Client } from "../generated/apiClient";

const getClient = () => new Client(getBaseUrl(), { fetch: getFetch() });

export const authRepo = {
  async login(req: any) {
    return await getClient().login(req);
  },
  async me() {
    return await getClient().me();
  },
  async changePassword(req: any) {
    return await getClient().changePassword(req);
  }
};
