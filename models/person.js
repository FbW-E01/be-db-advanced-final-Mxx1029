import mongoose from 'mongoose';

const { Schema } = mongoose;
const required = true;
const personSchema = new Schema({
    name: { required, type: String },
    scores: [{ type: Schema.Types.ObjectId, ref: "scores" }]
});
const Person = mongoose.model("persons", personSchema);

export { personSchema, Person };