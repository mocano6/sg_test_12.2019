// Elements
const inputVal = document.querySelector('#city');
const citys = ['Poland', 'Germany', 'Spain', 'France'];

export default () => {

  function data(arr) {
    const compareEl = inputVal.value.toUpperCase();
    const arrUp = arr.map((v) => v.toUpperCase());
    let bool = arrUp.includes(compareEl);
    inputVal.value = '';
    return bool;
    
  }

  inputVal.addEventListener('keyup', (e)=>{
    if (e.keyCode === 13) {
      //data(citys);
      console.log(data(citys));
    }
  });
};
