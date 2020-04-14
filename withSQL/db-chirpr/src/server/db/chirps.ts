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

const insert = async (body: any) => {
  Query(`INSERT INTO chirps SET ?`, [body]);
  if (body.content.search("@Mario") > -1) {
    Query(
      `insert into mentions
    select 1, c.id
    FROM chirps c
    WHERE c.content = ?`,
      [body.content]
    );
  } else if (body.content.search("@Luigi") > -1) {
    Query(
      `insert into mentions
    select 2, c.id
    FROM chirps c
    WHERE c.content = ?`,
      [body.content]
    );
  } else if (body.content.search("@Peach") > -1) {
    Query(
      `insert into mentions
    select 3, c.id
    FROM chirps c
    WHERE c.content = ?`,
      [body.content]
    );
  } else if (body.content.search("@Daisy") > -1) {
    Query(
      `insert into mentions
    select 4, c.id
    FROM chirps c
    WHERE c.content = ?`,
      [body.content]
    );
  } else if (body.content.search("@Wario") > -1) {
    Query(
      `insert into mentions
    select 15, c.id
    FROM chirps c
    WHERE c.content = ?`,
      [body.content]
    );
  } else if (body.content.search("@Waluigi") > -1) {
    Query(
      `insert into mentions
    select 16, c.id
    FROM chirps c
    WHERE c.content = ?`,
      [body.content]
    );
  } else if (body.content.search("@Toad") > -1) {
    Query(
      `insert into mentions
    select 17, c.id
    FROM chirps c
    WHERE c.content = ?`,
      [body.content]
    );
  } else if (body.content.search("@Bowser") > -1) {
    Query(
      `insert into mentions
    select 18, c.id
    FROM chirps c
    WHERE c.content = ?`,
      [body.content]
    );
  } else if (body.content.search("@King Bomb Omb") > -1) {
    Query(
      `insert into mentions
    select 19, c.id
    FROM chirps c
    WHERE c.content = ?`,
      [body.content]
    );
  } else if (body.content.search("@Donkey Kong") > -1) {
    Query(
      `insert into mentions
    select 20, c.id
    FROM chirps c
    WHERE c.content = ?`,
      [body.content]
    );
  }
};

const update = async (id: string, body: any) => {
  Query(`UPDATE chirps SET content = ? WHERE id = ?`, [body, id]);
  if (body.content.search("@Mario") > -1) {
    Query(
      `insert into mentions
    select 1, c.id
    FROM chirps c
    WHERE c.content = ?`,
      [body.content]
    );
  } else if (body.content.search("@Luigi") > -1) {
    Query(
      `insert into mentions
    select 2, c.id
    FROM chirps c
    WHERE c.content = ?`,
      [body.content]
    );
  } else if (body.content.search("@Peach") > -1) {
    Query(
      `insert into mentions
    select 3, c.id
    FROM chirps c
    WHERE c.content = ?`,
      [body.content]
    );
  } else if (body.content.search("@Daisy") > -1) {
    Query(
      `insert into mentions
    select 4, c.id
    FROM chirps c
    WHERE c.content = ?`,
      [body.content]
    );
  } else {
    Query(`DELETE from mentions WHERE chirpid = ?`, [id]);
  }
};

const remove = async (id: string) =>
  Query(`DELETE FROM chirps WHERE id = ?`, [id]);

const mentions = async (id: string) => Query("CALL spUserMentions(?)", [id]);

export default {
  all,
  one,
  insert,
  update,
  remove,
  mentions,
};
