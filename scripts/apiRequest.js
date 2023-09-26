export const getPeople = async (callback) => {

  sessionStorage.removeItem('people');

  try {
    let nextUrl = "https://swapi.dev/api/people";
    while (nextUrl !== null) {
      const response = await fetch(nextUrl);
      const data = await response.json();

      const { count, next, previous, results } = data;
      let people = JSON.parse(sessionStorage.getItem("people")) || { count, results: [] };

      people.results.push(...results);
      sessionStorage.setItem("people", JSON.stringify(people));

      nextUrl = next;
      callback()
    }

  } catch (error) {
    console.error("Ocorreu um erro:", error);
  }

};

export const getPlanets = async (callback) => {

  sessionStorage.removeItem('planets');

  try {
    let nextUrl = "https://swapi.dev/api/planets";
    while (nextUrl !== null) {
      const response = await fetch(nextUrl);
      const data = await response.json();

      const { count, next, previous, results } = data;
      let people = JSON.parse(sessionStorage.getItem("planets")) || { count, results: [] };

      people.results.push(...results);
      sessionStorage.setItem("planets", JSON.stringify(people));

      nextUrl = next;
      callback()
    }

  } catch (error) {
    console.error("Ocorreu um erro:", error);
  }

}

export const getSpaceships = async (callback) => {

  sessionStorage.removeItem('starships');

  try {
    let nextUrl = "https://swapi.dev/api/starships";
    while (nextUrl !== null) {
      const response = await fetch(nextUrl);
      const data = await response.json();

      const { count, next, previous, results } = data;
      let people = JSON.parse(sessionStorage.getItem("starships")) || { count, results: [] };

      people.results.push(...results);
      sessionStorage.setItem("starships", JSON.stringify(people));

      nextUrl = next;
      callback()
    }

  } catch (error) {
    console.error("Ocorreu um erro:", error);
  }

}

export const getVehicles = async (callback) => {

  sessionStorage.removeItem('vehicles');


  try {
    let nextUrl = "https://swapi.dev/api/vehicles";
    while (nextUrl !== null) {
      const response = await fetch(nextUrl);
      const data = await response.json();

      const { count, next, previous, results } = data;
      let people = JSON.parse(sessionStorage.getItem("vehicles")) || { count, results: [] };

      people.results.push(...results);
      sessionStorage.setItem("vehicles", JSON.stringify(people));

      nextUrl = next;
      callback()
    }

  } catch (error) {
    console.error("Ocorreu um erro:", error);
  }

}

export const getFilms = async (callback) => {

  sessionStorage.removeItem('films');

  try {
    let nextUrl = "https://swapi.dev/api/films";
    while (nextUrl !== null) {
      const response = await fetch(nextUrl);
      const data = await response.json();

      const { count, next, previous, results } = data;
      let people = JSON.parse(sessionStorage.getItem("films")) || { count, results: [] };

      people.results.push(...results);
      sessionStorage.setItem("films", JSON.stringify(people));

      nextUrl = next;
      callback()
    }

  } catch (error) {
    console.error("Ocorreu um erro:", error);
  }

}

export const getSpecies = async (callback) => {

  sessionStorage.removeItem('species');


  try {
    let nextUrl = "https://swapi.dev/api/species";
    while (nextUrl !== null) {
      const response = await fetch(nextUrl);
      const data = await response.json();

      const { count, next, previous, results } = data;
      let people = JSON.parse(sessionStorage.getItem("species")) || { count, results: [] };

      people.results.push(...results);
      sessionStorage.setItem("species", JSON.stringify(people));

      nextUrl = next;
      callback()
    }

  } catch (error) {
    console.error("Ocorreu um erro:", error);
  }

}