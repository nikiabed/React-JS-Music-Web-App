import { defaultClient } from "../constants/client";

export const UserRepository = {
  resource: "users",
  getAll() {
    return defaultClient.get(`${this.resource}`);
  },
};
