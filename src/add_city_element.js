import cityInfo from './append_cities_description';
import toggleCitiesInfo from './toggle_cities_info';


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
  let localeCitiesArray= [];
  spacerElement.innerHTML = '';
  arr.forEach(async element => {
    let cityLi = document.createElement('li');
    cityLi.classList.add('li');
    cityLi.classList.add('accordion');
    let cityInfoEl = cityInfo(element.city);

    let cityDescription = await cityInfoEl.then((response) => response);
    if (cityDescription === undefined) {
      cityDescription = 'No information about this city/place';
    }
    
    
    cityLi.innerHTML =
    `
      <span class='city'>${element.city} (${element.location})</span><span>${element.value} µg/m³</span> <span>Parameter: ${element.param}</span><span class="sh-ico">+</span>
      <span class="city-space-details panel">${cityDescription}</span>
    `;
    localeCitiesArray
    .push(new Cities(
      element.city, 
      element.location,
      element.param, 
      element.value,
      cityDescription
      ));
      // Remove old and Set array of items to localestorage;
      localStorage.setItem('localeCitiesArray', JSON.stringify(localeCitiesArray));

    spacerElement.appendChild(cityLi);

  });
  await toggleCitiesInfo();
}