export interface UserSession {
  _id: string;
  sessionToken: string;
  userId: string;
  expires: string; // 2024-06-01T22:07:08.702+00:00
}

export type UserSessionRequest = Omit<UserSession, "_id" | "expires">