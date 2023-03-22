import Joi from "joi";
import { getConnection, sql } from "../Database/connection.js";

export const getTipoInstrument = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query("Select * FROM TipoInstrumento");
    res.send(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
