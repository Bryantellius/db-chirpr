import * as express from "express";
import db from "./db";

const router = express.Router();

router.get("/api/chirps", async (req, res) => {
  try {
    res.json(await db.Chirps.all());
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/api/chirps/:id", async (req, res) => {
  try {
    let id = req.params.id;
    res.json((await db.Chirps.one(id))[0]);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/api/chirps", async (req, res) => {
  console.log(req.body);
  try {
    let body = { userid: 2, content: "New Post" };
    res.json(await db.Chirps.insert(body));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.put("/api/chirps/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let body = { userid: 1, content: "Edited Post" };
    res.json(await db.Chirps.update(id, body));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.delete("/api/chirps/:id", async (req, res) => {
  try {
    let id = req.params.id;
    res.json(await db.Chirps.remove(id));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

export default router;
