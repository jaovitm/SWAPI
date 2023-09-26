import { mountPersonTable, mountPlanetTable} from './tableData.js';
const personTable = document.querySelector('#peopleTable');
const planetsTable = document.querySelector('#planetsTable')
$(function () {

    if (personTable != null) {

        mountPersonTable(personTable);

    }

    if (planetsTable != null)
    {
        mountPlanetTable(planetsTable);
    }

})


$(document).on('click', '.detailsButton', async function () {

    var index = $(this)[0].dataset.index;
    const { count, next, previous, results } = JSON.parse(sessionStorage.getItem("people"));
    var char = results[index];
    const homeworld = await fetch(char.homeworld);

    Swal.fire({
        title: `${char.name}`,
        icon: 'info',
        html:
            `<table class="table text-dark text-start">
                <tr>
                    <td>Ano de Nascimento (cm)</td>
                    <td>${char.birth_year}</td>
                </tr> 
                <tr>
                    <td>Altura (cm)</td>
                    <td>${char.height}</td>
                </tr>
                <tr>
                    <td>Peso (kg)</td>
                    <td>${char.mass}</td>
                </tr>
                <tr>
                    <td>Cor do Cabelo</td>
                    <td>${char.hair_color}</td>
                </tr>
                <tr>
                    <td>Cor da Pele</td>
                    <td>${char.skin_color}</td>
                </tr>
                <tr>
                    <td>Cor dos olhos</td>
                    <td>${char.eye_color}</td>
                </tr>
                <tr>
                    <td>Cor da Pele</td>
                    <td>${char.skin_color}</td>
                </tr>
           </table>`,
        showCloseButton: true,
        customClass: {
            container: 'black-bg', // Adiciona classes CSS personalizadas
        }
    });


});







