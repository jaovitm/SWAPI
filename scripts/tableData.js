import { getPeople, getPlanets } from "./apiRequest.js";

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
                        <button class="btn btn-primary detailsButton" data-index="${index}">Detalhes</button>
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
        var tbody = personTable.getElementsByTagName('tbody')[0];
        const { count, next, previous, results } = JSON.parse(sessionStorage.getItem("people"));

        results.forEach((planet, index) => {
            if (!tbody.querySelector(`[data-index="${index}"]`)) {
                var novaLinha = document.createElement('tr');
    
                novaLinha.innerHTML = `
                    <th scope="row"></th>
                    <td class="py-4">${person.name}</td>
                    <td class="py-4">${person.height}cm</td>
                    <td class="py-4">${person.gender == "male" ? "Masculino" : person.gender == "female" ? " Feminino" : "N/A"}</td>
                    <td class="py-4">
                        <button class="btn btn-primary detailsButton" data-index="${index}">Detalhes</button>
                    </td>
                `;
    
                tbody.appendChild(novaLinha);
            }
        });
    });



}