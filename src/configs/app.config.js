import { config } from "dotenv";

config()

export const PORT=+process.env.APP_PORT || 5000