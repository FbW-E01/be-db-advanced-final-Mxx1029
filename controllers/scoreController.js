import express from 'express';
import { Score } from '../models/score.js';
const router = express.Router();

// Get all scores (VERY HEAVY)
router.get("/", async (req,res,next) => {
    try {
        const scores = await Score.find();
        res.send(scores);
    } catch (error) {
        next(error);
    }
});

// Get single score
router.get("/:id", async (req,res,next) => {
    try {
        const score = await Score.findById(req.params.id);
        if (!score) {
            const error = new Error("Score not found");
            error.status = 404;
            return next(error);
        }
        res.send(score);
    } catch (error) {
        next(error);
    }
});

export default router;