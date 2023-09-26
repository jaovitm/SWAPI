export const peopleModal = (char) => {
    Swal.fire({
        title: `${char.name}`,
        icon: 'info',
        html:
            `<table class="table text-dark text-start">
                <tr>
                    <td>Ano de Nascimento</td>
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
}

export const planetsModal = (char) => {
    Swal.fire({
        title: `${char.name}`,
        icon: 'info',
        html:
            `<table class="table text-dark text-start">
                <tr>
                    <td>Rotação (horas)</td>
                    <td>${char.rotation_period}</td>
                </tr> 
                <tr>
                    <td>Translação (dias)</td>
                    <td>${char.orbital_period}</td>
                </tr>
                <tr>
                    <td>Diametro (metros)</td>
                    <td>${char.diameter}</td>
                </tr>
                <tr>
                    <td>Terreno</td>
                    <td>${char.terrain}</td>
                </tr>
                <tr>
                    <td>Gravidade</td>
                    <td>${char.gravity}</td>
                </tr>
           </table>`,
        showCloseButton: true,
        customClass: {
            container: 'black-bg', // Adiciona classes CSS personalizadas
        }
    });
}

export const starshipsModal = (char) => {
    Swal.fire({
        title: `${char.name}`,
        icon: 'info',
        html:
            `<table class="table text-dark text-start">
                <tr>
                    <td>Fabricante</td>
                    <td>${char.manufacturer}</td>
                </tr>
                <tr>
                    <td>Custo (Em créditos)</td>
                    <td>${char.cost_in_credits}</td>
                </tr>
                <tr>
                    <td>Tripulação</td>
                    <td>${char.crew}</td>
                </tr>
                <tr>
                    <td>Passageiros</td>
                    <td>${char.passengers}</td>
                </tr>
                <tr>
                    <td>Classe</td>
                    <td>${char.starship_class}</td>
                </tr>
           </table>`,
        showCloseButton: true,
        customClass: {
            container: 'black-bg', // Adiciona classes CSS personalizadas
        }
    });
}

export const vehiclesModal = (char) => {
    Swal.fire({
        title: `${char.name}`,
        icon: 'info',
        html:
            `<table class="table text-dark text-start">              
                <tr>
                    <td>Fabricante</td>
                    <td>${char.manufacturer}</td>
                </tr>
                <tr>
                    <td>Custo (Em créditos)</td>
                    <td>${char.cost_in_credits}</td>
                </tr>
                <tr>
                    <td>Tripulação</td>
                    <td>${char.crew}</td>
                </tr>
                <tr>
                    <td>Passageiros</td>
                    <td>${char.passengers}</td>
                </tr>
                <tr>
                    <td>Classe</td>
                    <td>${char.vehicle_class}</td>
                </tr>
           </table>`,
        showCloseButton: true,
        customClass: {
            container: 'black-bg', // Adiciona classes CSS personalizadas
        }
    });
}

export const filmsModal = (char) => {
    Swal.fire({
        title: `${char.title}`,
        icon: 'info',
        html:
            `<table class="table text-dark text-start">
                <tr>
                    <td>ID</td>
                    <td>Texto de Abertura</td>
                </tr> 
                <tr>
                    <td>${char.episode_id}</td>
                    <td>${char.opening_crawl}</td>
                </tr>            
           </table>`,
        showCloseButton: true,
        customClass: {
            container: 'black-bg', // Adiciona classes CSS personalizadas
        }
    });
}

export const speciesModal = (char) => {
    Swal.fire({
        title: `${char.name}`,
        icon: 'info',
        html:
            `<table class="table text-dark text-start">
                <tr>
                    <td>Altura Média(cm)</td>
                    <td>${char.average_height}</td>
                </tr> 
                <tr>
                    <td>Cores</td>
                    <td>${char.skin_colors}</td>
                </tr>
                <tr>
                    <td>Média de Vida</td>
                    <td>${char.average_lifespan}</td>
                </tr>
                <tr>
                    <td>Linguagem</td>
                    <td>${char.language}</td>
                </tr>
           </table>`,
        showCloseButton: true,
        customClass: {
            container: 'black-bg', // Adiciona classes CSS personalizadas
        }
    });
}

