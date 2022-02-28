import express from 'express';
import * as FeeController from '../controller/feeController';

const router = express.Router();

router.post('/fee', FeeController.testConnection);

export default router;
