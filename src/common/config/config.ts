import { z } from "zod";
import "dotenv/config";

const envSchema = z.object({
  REACT_APP_PORT: z.number(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error(`Invalid environment variables ${JSON.stringify(parsedEnv.error.format())}`);
  throw new Error("Invalid environment variables");
}

export const config = {
  appPort: parsedEnv.data.REACT_APP_PORT,
};
