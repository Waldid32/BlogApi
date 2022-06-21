import { Sequelize } from "sequelize";

const db = new Sequelize("db_app", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
