import * as express from "express";
import db from "../db";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json(await db.Chirps.all());
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    res.json((await db.Chirps.one(id))[0]);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    let body = req.body;
    res.json(await db.Chirps.insert(body));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.put("/:id", (req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;
    res.json(db.Chirps.update(id, body));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    res.json(await db.Chirps.remove(id));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

export default router;
