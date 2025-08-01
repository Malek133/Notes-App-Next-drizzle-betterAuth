// import { config } from "dotenv";
import { drizzle } from 'drizzle-orm/neon-http';
import { schema } from "./schema";

// config({ path: ".env" });

export const db = drizzle(process.env.DATABASE_URL!, { schema });
