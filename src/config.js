import { config } from "dotenv";
config();

export const api_key = process.env.api_key;

export default {
  port: process.env.PORT || 3000,
};
