import { planets } from "../../models/planets.model.js";

export function getAllPlanets(req,res) {
    return res.status(200).json(planets);   // return statement :- to ensure that we are returning response
    // single time for one function
}

