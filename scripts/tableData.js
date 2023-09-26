import { getFilms, getPeople, getPlanets, getSpaceships, getSpecies, getVehicles } from "./apiRequest.js";

export const mountPersonTable = (personTable) =>
{
    getPeople(() => { 
        var tbody = personTable.getElementsByTagName('tbody')[0];
        const { count, next, previous, results } = JSON.parse(sessionStorage.getItem("people"));

        results.forEach((person, index) => {
            if (!tbody.querySelector(`[data-index="${index}"]`)) {
                var novaLinha = document.createElement('tr');
    
                novaLinha.innerHTML = `
                    <th scope="row"></th>
                    <td class="py-4">${person.name}</td>
                    <td class="py-4">${person.height}cm</td>
                    <td class="py-4">${person.gender == "male" ? "Masculino" : person.gender == "female" ? " Feminino" : "N/A"}</td>
                    <td class="py-4">
                        <button class="btn btn-primary detailsButton" data-index="${index}" data-type="people">Detalhes</button>
                    </td>
                `;
    
                tbody.appendChild(novaLinha);
            }
        });
    });



}

export const mountPlanetTable = (planetsTable) =>
{
    getPlanets(() => { 
        var tbody = planetsTable.getElementsByTagName('tbody')[0];
        const { count, next, previous, results } = JSON.parse(sessionStorage.getItem("planets"));

        results.forEach((planet, index) => {
            if (!tbody.querySelector(`[data-index="${index}"]`)) {
                var novaLinha = document.createElement('tr');
    
                novaLinha.innerHTML = `
                    <th scope="row"></th>
                    <td class="py-4">${planet.name}</td>
                    <td class="py-4">${planet.climate}</td>
                    <td class="py-4">${planet.population}</td>
                    <td class="py-4">
                        <button class="btn btn-primary detailsButton" data-index="${index}" data-type="planets">Detalhes</button>
                    </td>
                `;
    
                tbody.appendChild(novaLinha);
            }
        });
    });



}

export const mountStarshipTable = (starshipsTable) =>
{
    getSpaceships(() => { 
        var tbody = starshipsTable.getElementsByTagName('tbody')[0];
        const { count, next, previous, results } = JSON.parse(sessionStorage.getItem("starships"));

        results.forEach((starship, index) => {
            if (!tbody.querySelector(`[data-index="${index}"]`)) {
                var novaLinha = document.createElement('tr');
    
                novaLinha.innerHTML = `
                    <th scope="row"></th>
                    <td class="py-4">${starship.name}</td>
                    <td class="py-4">${starship.model}</td>
                    <td class="py-4">${starship.passengers}</td>
                    <td class="py-4">
                        <button class="btn btn-primary detailsButton" data-index="${index}" data-type="starships">Detalhes</button>
                    </td>
                `;
    
                tbody.appendChild(novaLinha);
            }
        });
    });



}

export const mountVehiclesTable = (vehiclesTable) =>
{
    getVehicles(() => { 
        var tbody = vehiclesTable.getElementsByTagName('tbody')[0];
        const { count, next, previous, results } = JSON.parse(sessionStorage.getItem("vehicles"));

        results.forEach((vehicles, index) => {
            if (!tbody.querySelector(`[data-index="${index}"]`)) {
                var novaLinha = document.createElement('tr');
    
                novaLinha.innerHTML = `
                    <th scope="row"></th>
                    <td class="py-4">${vehicles.name}</td>
                    <td class="py-4">${vehicles.model}cm</td>
                    <td class="py-4">${vehicles.vehicle_class}</td>
                    <td class="py-4">
                        <button class="btn btn-primary detailsButton" data-index="${index}" data-type="vehicles">Detalhes</button>
                    </td>
                `;
    
                tbody.appendChild(novaLinha);
            }
        });
    });



}

export const mountFilmsTable = (filmsTable) =>
{
    getFilms(() => { 
        var tbody = filmsTable.getElementsByTagName('tbody')[0];
        const { count, next, previous, results } = JSON.parse(sessionStorage.getItem("films"));

        results.forEach((film, index) => {
            if (!tbody.querySelector(`[data-index="${index}"]`)) {
                var novaLinha = document.createElement('tr');
    
                novaLinha.innerHTML = `
                    <th scope="row"></th>
                    <td class="py-4">${film.title}</td>
                    <td class="py-4">${film.director}</td>
                    <td class="py-4">${film.release_date}</td>
                    <td class="py-4">
                        <button class="btn btn-primary detailsButton" data-index="${index}" data-type="films">Detalhes</button>
                    </td>
                `;
    
                tbody.appendChild(novaLinha);
            }
        });
    });



}

export const mountSpeciesTable = (speciesTable) =>
{
    getSpecies(() => { 
        var tbody = speciesTable.getElementsByTagName('tbody')[0];
        const { count, next, previous, results } = JSON.parse(sessionStorage.getItem("species"));

        results.forEach((species, index) => {
            if (!tbody.querySelector(`[data-index="${index}"]`)) {
                var novaLinha = document.createElement('tr');
    
                novaLinha.innerHTML = `
                    <th scope="row"></th>
                    <td class="py-4">${species.name}</td>
                    <td class="py-4">${species.classification}</td>
                    <td class="py-4">${species.designation}</td>
                    <td class="py-4">
                        <button class="btn btn-primary detailsButton" data-index="${index}" data-type="species">Detalhes</button>
                    </td>
                `;
    
                tbody.appendChild(novaLinha);
            }
        });
    });



}