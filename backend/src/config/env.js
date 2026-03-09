import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  CLECK_PUBLISHABLE_KEY: process.env.CLECK_PUBLISHABLE_KEY,
  CLECK_SECRET_KEY: process.env.CLECK_SECRET_KEY,
  INNGESSION_KEY: process.env.INNGESSION_KEY,
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
};
