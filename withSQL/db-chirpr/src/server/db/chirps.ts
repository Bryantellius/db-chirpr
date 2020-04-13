import { Query } from "./index";

const all = async () =>
  Query(
    "SELECT c.id, c.userid, u.name, c.content, c.location, c._created as time FROM chirps c JOIN users u ON c.userid = u.id ORDER BY id;"
  );

const one = async (id: string) =>
  Query(
    "SELECT c.id, c.userid, u.name, c.content, c.location, c._created as time FROM chirps c JOIN users u ON c.userid = u.id WHERE c.id = ?",
    [id]
  );

const insert = async (body: any) => Query(`INSERT INTO chirps SET ?`, [body]);

const update = async (id: string, body: any) =>
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
