import * as mysql from "mysql";

import Blogs from "./blogs";

export const Connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "FcLpfive5!",
  database: "chirpr",
});

export const Query = (query: string, values?: Array<string | number>) => {
  return new Promise<Array<any>>((resolve, reject) => {
    Connection.query(query, values, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};
export default { Blogs };
