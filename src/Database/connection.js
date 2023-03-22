import sql from "mssql";

const dbSettings = {
  user: "sa",
  password: "Adminsa1234",
  server: "servapolo",
  database: "SisMed",
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
