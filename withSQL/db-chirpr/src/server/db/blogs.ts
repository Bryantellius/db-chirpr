import { Query } from "./index";

const all = async () => Query("SELECT * FROM chirps");

const one = async (id: string) =>
  Query("SELECT * FROM chirps WHERE id = ?", [id]);
  
export default {
  all,
  one,
};
