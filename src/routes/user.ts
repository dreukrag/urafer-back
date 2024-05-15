import express from "express";
import { UserSessionRequest } from "src/types/database/User";
import { isSessionValid } from "./isSessionValid";

const userRouter = express.Router();

userRouter.post<UserSessionRequest>("/login", async (_req, _res) => {
  try {
    const { authorization } = _req.headers;

    await isSessionValid(
      authorization,
      (userId) => {
        _res.json({ success: true, userId });
      },
      () => {
        _res.statusCode = 400;
        _res.json({ success: false });
      },
      () => {
        _res.statusCode = 500;
        _res.json({ success: false });
      }
    );
  } catch {
    _res.statusCode = 500;
    _res.json({ success: false });
  }
});

export default userRouter;
