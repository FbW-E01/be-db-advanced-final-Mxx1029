import { Person } from '../models/person.js';
import { Score } from '../models/score.js';
import faker from 'faker';

export default async function seed() {
    console.log("Deleting old data from the database");
    await Person.deleteMany({});
    await Score.deleteMany({});

    console.log("Creating seed data");

    // Create 5 persons
    for (let i = 5; --i; ) {
        const person = await Person.create({ name: faker.name.firstName() });
        console.log(`Created ${person.name}`);
        
        // Create some scores per person
        const amountOfScores = 10 + faker.datatype.number(50);
        for (let i = amountOfScores; --i; ) {
            const score = await Score.create({
                person,
                date: faker.datatype.datetime(),
                total: faker.datatype.number(100)
            });
            person.scores.push(score);
            await person.save();
        }
    }
}