import Joi from "joi";
import { getConnection, sql } from "../Database/connection.js";

export const getAreas = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query("SELECT * FROM areas");
  res.send(result.recordset);
};
