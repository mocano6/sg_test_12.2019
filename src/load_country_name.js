const countrySpace = document.querySelector('.city-name');

export default (country, cityArr) => {
// Add country name
  let countrySetName = country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();
  countrySpace.innerHTML = countrySetName;
}
