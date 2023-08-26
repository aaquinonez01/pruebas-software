import "dotenv/config";

import { connect } from "mongoose";

const db = async () => {
  const uri =
    process.env.DB_URI ??
    "mongodb+srv://alex_db:3VaCDuAsjrrdSSI1@calendardb.kg1sban.mongodb.net/db_cartelera";
  await connect(uri);
};

export default db;
