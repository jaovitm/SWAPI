import { filmsModal, peopleModal, planetsModal, speciesModal, starshipsModal, vehiclesModal } from './swal.js';
import { mountFilmsTable, mountPersonTable, mountPlanetTable, mountSpeciesTable, mountStarshipTable, mountVehiclesTable } from './tableData.js';
const personTable = document.querySelector('#peopleTable');
const planetsTable = document.querySelector('#planetsTable');
const starshipsTable = document.querySelector("#starshipsTable");
const vehiclesTable = document.querySelector("#vehiclesTable");
const filmsTable = document.querySelector('#filmsTable');
const speciesTable = document.querySelector('#speciesTable')

$(function () {

    if (personTable != null) {
        mountPersonTable(personTable);
    }

    if (planetsTable != null) {
        mountPlanetTable(planetsTable);
    }

    if (starshipsTable != null) {
        mountStarshipTable(starshipsTable);
    }

    if (vehiclesTable != null) {
        mountVehiclesTable(vehiclesTable);
    }

    if (filmsTable != null) {
        mountFilmsTable(filmsTable);
    }

    if (speciesTable != null) {
        mountSpeciesTable(speciesTable);
    }

})


$(document).on('click', '.detailsButton', async function () {

    var index = $(this)[0].dataset.index;
    var type = $(this)[0].dataset.type;
    const { count, next, previous, results } = JSON.parse(sessionStorage.getItem(`${type}`));
    var char = results[index];

    switch (type) {
        case "people":
            peopleModal(char)
            break;
        case "planets":
            planetsModal(char)
            break;
        case "starships":
            starshipsModal(char)
            break;
        case "vehicles":
            vehiclesModal(char)
            break;
        case "films":
            filmsModal(char)
            break;
        case "species":
            speciesModal(char)
            break;
        default:
            break;
    }

});







