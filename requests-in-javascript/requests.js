//const axios = require("axios");

/*
const url = "http://localhost:5000/constellations";
axios
//.get()s status, statusText, data from url.
  .get(url)
  .then((response) => {
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error.message);
  });
*/
/*
const url = "http://localhost:5000/constellations";
axios
  .get(url)
  .then((response) => {
    // filters constellation data for starsWithPlanets <10.  
    const result = response.data.filter((constellation) => {
      return constellation.starsWithPlanets < 10;
    });
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });
*/
/*
const url = "http://localhost:5000/constellations";
axios
  // adds new object to constellations
  .post(url, {
    name: "Ara",
    meaning: "Altar",
    starsWithPlanets: 7,
    quadrant: "SQ3",
  })
  .then((response) => {
    console.log(response.data);
  });
*/
/*
//notice we changed the url to include the id we want to delete.
const url = "http://localhost:5000/constellations/b6tj2K-";
axios
  .delete(url)
  .then((response) => {
    console.log(response.data);
  });
*/

//assignment code begins here.
const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function getAllNames() {
    const url = BASE_URL + "/constellations";
    //const url = "http://localhost:5000/constellations"
    return axios
      .get(url)
      .then((response) => {
        // maps constellation name to array.  
        const result = response.data.map((constellation) => {
          return constellation.name;
        })
        console.log(result);
      return result;
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  getAllNames(axios, BASE_URL)

function getConstellationsByQuadrant(quadrant) {
  const url = BASE_URL + "/constellations";
    //const url = "http://localhost:5000/constellations"
    return axios
      .get(url)
      .then((response) => {
        // maps constellation name to array.  
        const result = response.data.filter((constellation) => {
          return constellation.quadrant == quadrant;
        })
        console.log(result);
      return result;
      })
      .catch((error) => {
        console.log(error.message);
      });
}

module.exports = {
  getAllNames,
  getConstellationsByQuadrant,
};

