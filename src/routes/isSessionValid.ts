import { Request, Response } from "express";
import { db } from "../index";

/**
 * Checks if a given session-token is valid and
 * @param onValid Code to be executed if user session is valid
 * @param onInvalid Code to be executed if user session is invalid
 * @param onError Code to be executed if there is an error when checking if user session is valid
 */
export const isSessionValid = async (
  sessionToken?: string,
  onValid?: (userId: string) => void,
  onInvalid?: () => void,
  onError?: () => void
) => {
  try {
    if (Boolean(sessionToken) === false) {
      onInvalid && onInvalid();
      return false;
    }

    const query = {
      sessionToken,
      expires: {
        $gt: new Date(),
      },
    };

    const session = await db.collection("uf_auth_sessions").findOne(query);

    if (session) {
      onValid && onValid(session.userId);
      return true;
    } else {
      onInvalid && onInvalid();
      return false;
    }
  } catch (error) {
    console.error(error);
    onError && onError();
  }
};
