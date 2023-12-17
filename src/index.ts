import { config } from './config'
import express, { Express } from 'express'
let mode = '';

console.log(`NODE_ENV=${config.NODE_ENV}`);

const app: Express = express();

app.get('/', (req, res) => {
    res.status(200).send({ "message": "Hello ENV= " + `${config.NODE_ENV}` })
    return
});

app.listen(config.PORT, config.HOST, () => {
    console.log(`APP LISTENING ON http://${config.HOST}:${config.PORT}`);
})