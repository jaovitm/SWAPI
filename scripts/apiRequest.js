export const getPeople = async () =>{
    $.ajax({
        url: "https://swapi.dev/api/people",
        success: function( result ) {
          console.log(result)
          sessionStorage.setItem("people", JSON.stringify(result))
        }
      });
}

export const getPlanets = async () =>{
    $.ajax({
        url: "https://swapi.dev/api/planets",
        success: function( result ) {
          console.log(result)
          sessionStorage.setItem("planets", JSON.stringify(result))
        }
      });
}

export const getSpaceships = async () =>{
    $.ajax({
        url: "https://swapi.dev/api/starships",
        success: function( result ) {
          console.log(result)
          sessionStorage.setItem("ships", JSON.stringify(result))
        }
      });
}

export const getVehicles = async () =>{
    $.ajax({
        url: "https://swapi.dev/api/vehicles",
        success: function( result ) {
          console.log(result)
          sessionStorage.setItem("vehicles", JSON.stringify(result))
        }
      });
}

export const getFilms = async () =>{
    $.ajax({
        url: "https://swapi.dev/api/films",
        success: function( result ) {
          console.log(result)
          sessionStorage.setItem("films", JSON.stringify(result))
        }
      });
}

export const getSpecies = async () =>{
    $.ajax({
        url: "https://swapi.dev/api/species",
        success: function( result ) {
          console.log(result)
          sessionStorage.setItem("species", JSON.stringify(result))
        }
      });
}