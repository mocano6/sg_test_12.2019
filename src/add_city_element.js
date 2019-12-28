import cityInfo from './cityinfo';
import toggleCitiesInfo from './toggle_cities_info';

let localeCitiesArray= [];

class Cities {
  constructor(city, location, param, value, cityInfo) {
      this.city = city;
      this.location = location;
      this.param = param;
      this.value = value;
      this.cityInfo = cityInfo;
  }
}

export default async (arr, spacerElement) => {
  spacerElement.innerHTML = '';
  arr.forEach(async element => {
    let cityLi = document.createElement('li');
    cityLi.classList.add('li');
    cityLi.classList.add('accordion');
    let cityInfoEl = cityInfo(element.city);

    let cityDescription = await cityInfoEl.then((response) => response);
    
    cityLi.innerHTML =
    `
      <span>${element.city} (${element.location})</span><span>${element.value} µg/m³</span> <span>Parameter: ${element.param}</span><span class="sh-ico">+</span>
      <span class="city-space-details panel">${cityDescription}</span>
    `;
    localeCitiesArray
    .push(new Cities(
      element.city, 
      element.location, 
      element.value, 
      element.param,
      cityDescription
      ));
      // Set array of items to localestorage
      await localStorage.setItem('localeCitiesArray', await JSON.stringify(localeCitiesArray));
      
    spacerElement.appendChild(cityLi);

  });
  await toggleCitiesInfo();
}