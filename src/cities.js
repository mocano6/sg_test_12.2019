import setCitiesUl from './add_city_element';

const citySpace = document.querySelector('.city-space');
// Prototype/class to create object with important information
class Cities {
  constructor(city, location, param, value, cityInfo) {
      this.city = city;
      this.location = location;
      this.param = param;
      this.value = value;
      this.cityInfo = cityInfo;
  }
}
export default async (country) => {
  // Arrays for temporary and final result
  let cityValX = [];
  let cityPull = [];

  const API_URL = `https://api.openaq.org/v1/latest?limit=9999&country=${country}&order_by=city`;

  // Fetch func start
  fetch(API_URL)
  .then(resp => resp.json())
  .then(resp => {
    // Look for important elements
    resp.results.forEach(element => {
      for (let i = 0; i < element.measurements.length; i++) {
        // I select most important parameter only for actual time
        // WHY? http://www.tokfm.pl/Tokfm/7,103085,25361798,ranking-najbardziej-zanieczyszczonych-miast-w-polsce-kto-smogowym.html
        if (element.measurements[i].parameter == 'pm10') {
          let city = element.city;
          let cityLocation = element.location;
          let paramName = element.measurements[i].parameter;
          let paramVal = element.measurements[i].value;
          cityValX.push(new Cities(city, cityLocation, paramName, paramVal));
        }
      }
      
    });
    // Sort element from highest to lowest
    cityValX.sort(function(a, b) {
      return b.value - a.value;
    });
    
    // Function deleted duplicated city
    function delDuplicate(arr) {
      const x = arr.reduce((acc, current) => {
        const x = acc.find(item => item.city === current.city);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);
      return x;
    }
    cityValX = delDuplicate(cityValX);
    
    // Add 10 highest val to array cityPull
    for (let i = 0; i < 10; i++) {
      let city = cityValX[i].city;
      let cityLocation = cityValX[i].location;
      let paramVal = cityValX[i].value;
      let paramName = cityValX[i].param;
      cityPull.push(new Cities(city, cityLocation, paramName, paramVal));
    }
    // Return 10 pulled citys
    setCitiesUl(cityPull, citySpace);
  });
  
};