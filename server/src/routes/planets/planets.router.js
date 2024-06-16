import express from 'express';

import { getAllPlanets } from './planets.controller.js';

const planetsRouter = express.Router();

planetsRouter.get('/planets', getAllPlanets);     // when the first arg endpoint is hit on the server then the
 // the getAllPlanets callback function which contains the business login for fetching the planets list will get executed... 

export default planetsRouter;