export default () => {

  document.addEventListener("click", ()=> {
    let el = event.target;
    if (el.classList.contains('sh-ico')) {
      let elParent = el.parentNode;
      elParent.classList.toggle('accordion');

      if (elParent.style.maxHeight) {
        elParent.style.maxHeight = null;
        el.innerHTML = '&#43;';
      }
      else {
        elParent.style.maxHeight = elParent.scrollHeight + "px";
        el.innerHTML = '&#8722;';
      }
    }
  });
};