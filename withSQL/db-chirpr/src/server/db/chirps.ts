import { Query } from "./index";

const all = async () => Query("SELECT * FROM chirps");

const one = async (id: string) =>
  Query("SELECT * FROM chirps WHERE id = ?", [id]);

const insert = async (body) =>
  Query(
    `INSERT INTO chirps(userid, content) VALUES(?, ?)`,
    [body]
  );

const update = async (id: string, body: string) =>
  Query(`UPDATE chirps SET content = ? WHERE id = ?`, [body, id]);

const remove = async (id: string) =>
  Query(`DELETE FROM chirps WHERE id = ?`, [id]);

export default {
  all,
  one,
  insert,
  update,
  remove,
};
