// Import
import apiSet from './cities';
import loadCountry from './load_country_name';

// Elements
const inputVal = document.querySelector('#country');
const btn = document.querySelector('#button');
const countries = [
  {fullname: 'Poland', short: 'PL'},
  {fullname: 'Germany', short: 'DE'},
  {fullname: 'Spain', short: 'ES'},
  {fullname: 'France', short: 'FR'},
];
const dList = document.querySelector('#countries');

export default () => {

  function dataList(data) {
    data.forEach(element => {
      let option = document.createElement('option');
      option.value = element.fullname;
      dList.appendChild(option);
    });
  }
  dataList(countries);
let compareEl;
  function data(arr) {
    compareEl = inputVal.value.toUpperCase();
    const arrUp = arr.map((v) => v.fullname.toUpperCase());
    let bool = arrUp.includes(compareEl);
    let shortName;
    if (bool) {
      // I know... its primitive :D TIME :(
      if (compareEl === 'POLAND') {shortName = 'PL'}
      else if (compareEl === 'FRANCE') {shortName = 'FR'}
      else if (compareEl === 'GERMANY') {shortName = 'DE'}
      else if (compareEl === 'SPAIN') {shortName = 'ES'}
    }
    inputVal.value = '';
    return shortName;
    
  }
  inputVal.addEventListener('keyup', (e)=>{
    if (e.keyCode === 13) {
      const boolRes = data(countries);
      if (boolRes) {
        // Set selected country API data from input val
        apiSet(boolRes);
      }
      else {
        alert('Invalid country name');
      }
    }
  });
  btn.addEventListener('click', ()=> {
    const boolRes = data(countries);
    if (boolRes) {
      // Set selected country API data from input val
      // Add country name to localestorage
      localStorage.setItem('countryName', compareEl);
      // Func load country
      loadCountry(compareEl);
      
      // Func load cities
      apiSet(boolRes);
    }
    else {
      alert('Invalid country name');
    }
  });
};
