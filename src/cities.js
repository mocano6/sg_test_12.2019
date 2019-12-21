
export default (country) => {
  const API_URL = `https://api.openaq.org/v1/cities?limit=9999&country=${country}&order_by=city&sort=asc`;
  fetch(API_URL)
  .then(resp => resp.json())
  .then(resp => {
    resp.results.forEach(element => {
      console.log(element);
      
    });
    
  })
};