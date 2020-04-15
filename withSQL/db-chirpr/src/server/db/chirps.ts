import { Query } from "./index";

// Returns all items in chirps table
const all = async () =>
  Query(
    "SELECT c.id, c.userid, u.name, c.content, c.location, c._created as time FROM chirps c JOIN users u ON c.userid = u.id ORDER BY id;"
  );

// Returns one item from chirps table based on id
const one = async (id: string) =>
  Query(
    "SELECT c.id, c.userid, u.name, c.content, c.location, c._created as time FROM chirps c JOIN users u ON c.userid = u.id WHERE c.id = ?",
    [id]
  );

// Inserts item into chirp table
// And inserts chirp into mentions table if content contains @user
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
  }
  if (body.content.search("@Luigi") > -1) {
    Query(
      `insert into mentions
    select 2, c.id
    FROM chirps c
    WHERE c.content = ?`,
      [body.content]
    );
  }
  if (body.content.search("@Peach") > -1) {
    Query(
      `insert into mentions
    select 3, c.id
    FROM chirps c
    WHERE c.content = ?`,
      [body.content]
    );
  }
  if (body.content.search("@Daisy") > -1) {
    Query(
      `insert into mentions
    select 4, c.id
    FROM chirps c
    WHERE c.content = ?`,
      [body.content]
    );
  }
  if (body.content.search("@Wario") > -1) {
    Query(
      `insert into mentions
    select 15, c.id
    FROM chirps c
    WHERE c.content = ?`,
      [body.content]
    );
  }
  if (body.content.search("@Waluigi") > -1) {
    Query(
      `insert into mentions
    select 16, c.id
    FROM chirps c
    WHERE c.content = ?`,
      [body.content]
    );
  }
  if (body.content.search("@Toad") > -1) {
    Query(
      `insert into mentions
    select 17, c.id
    FROM chirps c
    WHERE c.content = ?`,
      [body.content]
    );
  }
  if (body.content.search("@Bowser") > -1) {
    Query(
      `insert into mentions
    select 18, c.id
    FROM chirps c
    WHERE c.content = ?`,
      [body.content]
    );
  }
  if (body.content.search("@King Boo") > -1) {
    Query(
      `insert into mentions
    select 19, c.id
    FROM chirps c
    WHERE c.content = ?`,
      [body.content]
    );
  }
  if (body.content.search("@Donkey Kong") > -1) {
    Query(
      `insert into mentions
    select 20, c.id
    FROM chirps c
    WHERE c.content = ?`,
      [body.content]
    );
  }
};

// Updates item in chirp based on id
// And inserts updated chirp into mentions if content contains @user
const update = async (id: string, body: any) => {
  Query(`UPDATE chirps SET content = ? WHERE id = ?`, [body.content, id]);
  Query(`DELETE FROM mentions WHERE chirpid = ?`, [id]);
  if (body.content.search("@Mario") > -1) {
    Query(
      `insert into mentions
    select 1, c.id
    FROM chirps c
    WHERE c.content = ?`,
      [body.content]
    );
  }
  if (body.content.search("@Luigi") > -1) {
    Query(
      `insert into mentions
    select 2, c.id
    FROM chirps c
    WHERE c.content = ?`,
      [body.content]
    );
  }
  if (body.content.search("@Peach") > -1) {
    Query(
      `insert into mentions
    select 3, c.id
    FROM chirps c
    WHERE c.content = ?`,
      [body.content]
    );
  }
  if (body.content.search("@Daisy") > -1) {
    Query(
      `insert into mentions
    select 4, c.id
    FROM chirps c
    WHERE c.content = ?`,
      [body.content]
    );
  }
  if (body.content.search("@Wario") > -1) {
    Query(
      `insert into mentions
    select 15, c.id
    FROM chirps c
    WHERE c.content = ?`,
      [body.content]
    );
  }
  if (body.content.search("@Waluigi") > -1) {
    Query(
      `insert into mentions
    select 16, c.id
    FROM chirps c
    WHERE c.content = ?`,
      [body.content]
    );
  }
  if (body.content.search("@Toad") > -1) {
    Query(
      `insert into mentions
    select 17, c.id
    FROM chirps c
    WHERE c.content = ?`,
      [body.content]
    );
  }
  if (body.content.search("@Bowser") > -1) {
    Query(
      `insert into mentions
    select 18, c.id
    FROM chirps c
    WHERE c.content = ?`,
      [body.content]
    );
  }
  if (body.content.search("@King Boo") > -1) {
    Query(
      `insert into mentions
    select 19, c.id
    FROM chirps c
    WHERE c.content = ?`,
      [body.content]
    );
  }
  if (body.content.search("@Donkey Kong") > -1) {
    Query(
      `insert into mentions
    select 20, c.id
    FROM chirps c
    WHERE c.content = ?`,
      [body.content]
    );
  }
};

// Deletes item from chirps table and subsequently from mentions table
const remove = async (id: string) =>
  Query(`DELETE FROM chirps WHERE id = ?`, [id]);

// Calls sp that returns all items in mentions table based on id
const mentions = async (id: string) => Query("CALL spUserMentions(?)", [id]);

export default {
  all,
  one,
  insert,
  update,
  remove,
  mentions,
};
