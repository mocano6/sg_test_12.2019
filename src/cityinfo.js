  let arrCitiesDescription = [];
  
export default async (cityName) => {
  let cityNameURI = encodeURI(cityName);
  const url = `https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${cityNameURI}`;

return fetch(url)
    .then((response) => response.json())
    .then(function(response) {
      let page = response.query.pages;
      let pageId = Object.keys(response.query.pages)[0];
      let description = page[pageId].extract;

      arrCitiesDescription.push(description);
      
      return description;
    })
    .catch( async function(error){console.log(error);});
};