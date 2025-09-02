import type { User } from "../models/user.ts";
import { mockUser } from "../../assets/mock/mock-user.ts";
import { AppError } from "./errors.ts";

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));
const userCache = new Map<string, User>();

export const UserService = {
  async getUser(id: string): Promise<User> {
    if (userCache.has(id)) {
      const cached = userCache.get(id);
      if (cached) return cached;
    }

    await delay(150);
    if (mockUser.id !== id) {
      throw new AppError(`User ${id} not found`, "NOT_FOUND");
    }
    userCache.set(id, mockUser);
    return mockUser;
  },
};
