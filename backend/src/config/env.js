import dotenv from "dotenv";

dotenv.config();

export const ENV = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    CLECK_PUBLISHABLE_KEY: process.env.CLECK_PUBLISHABLE_KEY,
    CLECK_SECRET_KEY: process.env.CLECK_SECRET_KEY,
    INNGESSION_KEY: process.env.INNGESSION_KEY,
    COULDINARY_API_KEY: process.env.COULDINARY_API_KEY,
    COULDINARY_API_SECRET: process.env.COULDINARY_API_SECRET,
    COULDINARY_CLOUD_NAME: process.env.COULDINARY_CLOUD_NAME
}