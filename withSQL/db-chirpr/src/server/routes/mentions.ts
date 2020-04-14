import * as express from "express";
import db from "../db";

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    let id: string = req.params.id;
    res.json(await db.Chirps.mentions(id));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

export default router;
