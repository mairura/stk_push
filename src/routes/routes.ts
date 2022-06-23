import { Router, Request, Response } from "express";
import { authToken } from "../controllers/auth";
import { stk_push } from "../controllers/stk_push";
import { callback, tx_result, tx_timeout } from "../controllers/callbacks";

const router = Router();

router.post("/callback", callback);
router.post("/callback/timeout", tx_timeout);
router.post("/callback/result", tx_result);
router.post("/stk_push", authToken, stk_push);

export { router as token_router };
