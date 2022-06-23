import { app } from "../index";
import { token_router } from "./routes";

app.use([token_router]);
