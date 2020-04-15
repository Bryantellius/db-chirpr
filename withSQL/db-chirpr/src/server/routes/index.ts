import * as express from 'express';

import chirpsRouter from './routes';

import mentionsRouter from './mentions';

const router = express.Router();

// Created two api routes depending on chirps or mentions tables
// More of a test than a solution, but I left as is
router.use("/chirps", chirpsRouter);

router.use("/mentions", mentionsRouter)

export default router;