import mongoose from 'mongoose';

const { Schema } = mongoose;
const required = true;
const scoreSchema = new Schema({
    date: { required, type: Date },
    total: { required, type: Number },
    person: { required, type: Schema.Types.ObjectId, ref: "persons" },
});
const Score = mongoose.model("scores", scoreSchema);

export { scoreSchema as scoresSchema, Score };