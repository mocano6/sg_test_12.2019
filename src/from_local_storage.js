import setCitiesUl from './add_city_element';
import loadCountry from './load_country_name';

const citySpace = document.querySelector('.city-space');

export default () => {
  if (localStorage.getItem('countryName')) {
    let storedCountry = localStorage.getItem('countryName');
    loadCountry(storedCountry);
  }
  if (localStorage.getItem('localeCitiesArray')) {
    let storedCities = JSON.parse(localStorage.getItem('localeCitiesArray'));
    setCitiesUl(storedCities, citySpace);
  }
};