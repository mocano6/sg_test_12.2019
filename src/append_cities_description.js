export default async (cityName) => {
  let cityNameURI = encodeURI(cityName);
  const url = `https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${cityNameURI}`;

return await fetch(url)
    .then((response) => response.json())
    .then(function(response) {
      let page = response.query.pages;
      let pageId = Object.keys(response.query.pages)[0];
      let description = page[pageId].extract;
      
      return description;
    })
    .catch(function(error){console.log(error);});
};