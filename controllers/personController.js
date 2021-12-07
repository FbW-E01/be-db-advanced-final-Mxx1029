import express from 'express';
import { Person, personSchema } from '../models/person.js';
const router = express.Router();

// Get a user with all their scores
router.get("/:id", async (req, res, next) => {
    try {
        const person = await Person.findById(req.params.id);
        if (!person) {
            const error = new Error("User not found");
            error.status = 404;
            return next(error);
        }
        // only works if you query again (person is resolved already)
        const query = Person.findById(req.params.id);
        query.populate("scores", ["total", "date"]).select("-__v")
        const result = await query.exec();
        console.log(result);
        res.send(person);
    } catch (error) {
        next(error);
    }
})

// Delete a user and all of their scores

router.delete("/:id", async (req, res, next) => {
    try {
        const person = await Person.findById(req.params.id);
        if (!person) {
            const error = new Error("User not found");
            error.status = 404;
            return next(error);
        }
        const toDelete = Person.findById(req.params.id);
        toDelete.populate("scores", ["total", "date"]);
        toDelete.select("-__v");
        const result = await toDelete.exec();
        console.log(result);
        person.remove();
        res.send({ message: "User " + req.params.id + " has been removed successfully" });
    } catch (err) {
        next(err);
    }
})

export default router;