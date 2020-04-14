import * as express from 'express';

import chirpsRouter from './routes';

import mentionsRouter from './mentions';

const router = express.Router();

router.use("/chirps", chirpsRouter);

router.use("/mentions", mentionsRouter)

export default router;