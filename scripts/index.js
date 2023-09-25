import { getPeople, getFilms, getPlanets, getSpaceships, getSpecies, getVehicles } from './apiRequest.js';


$(function(){
    getPeople();
    getFilms();
    getPlanets();
    getSpaceships();
    getSpecies();
    getVehicles();
});

