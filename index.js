import express from 'express';
import config from './config.js';
import connect from './database.js';
import seed from './seeders/seed.js';
import personController from './controllers/personController.js';
import scoreController from './controllers/scoreController.js';
import errorController from "./controllers/errorController.js";

const app = express();
config(app);
await connect();
await seed();

app.use('/persons', personController);
app.use('/scores', scoreController);
app.use(errorController);

app.listen(process.env.PORT, () => {
    console.log(`App listening on http://localhost:${process.env.PORT}`);
});