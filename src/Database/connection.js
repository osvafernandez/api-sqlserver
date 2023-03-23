import sql from "mssql";

const dbSettings = {
  user: process.env.USER,
  password: process.env.PASSWORD,
  server: process.env.SERVER,
  database: process.env.DATABASE,
  port: 1433,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

export async function getConnection() {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (err) {
    console.error(err);
  }
}

export { sql };
