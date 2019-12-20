// Elements
const inputVal = document.querySelector('#country');
const countries = ['Poland', 'Germany', 'Spain', 'France'];
const dList = document.querySelector('#countries');

export default () => {

  function dataList(data) {
    data.forEach(element => {
      let option = document.createElement('option');
      option.value = element;
      dList.appendChild(option);
    });
  }
  dataList(countries);

  function data(arr) {
    const compareEl = inputVal.value.toUpperCase();
    const arrUp = arr.map((v) => v.toUpperCase());
    let bool = arrUp.includes(compareEl);
    inputVal.value = '';
    return bool;
    
  }

  inputVal.addEventListener('keyup', (e)=>{
    if (e.keyCode === 13) {
      //data(countries);
      console.log(data(countries));
    }
  });
};
