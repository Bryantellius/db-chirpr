import { Query } from "./index";

const all = async () => Query("SELECT * FROM chirps");

const one = async (id: string) =>
  Query("SELECT * FROM chirps WHERE id = ?", [id]);

const insert = async (body: any) => Query(`INSERT INTO chirps SET ?`, [body]);

const update = async (id: string, body: any) =>
  Query(`UPDATE chirps SET content = ? WHERE id = ?`, [body.content, id]);

const remove = async (id: string) =>
  Query(`DELETE FROM chirps WHERE id = ?`, [id]);

export default {
  all,
  one,
  insert,
  update,
  remove,
};
