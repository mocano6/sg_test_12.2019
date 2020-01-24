export default () => {

  document.addEventListener("click", ()=> {
    let el = event.target;
    if (el.classList.contains('sh-ico')) {
      let elParent = el.parentNode;
      elParent.classList.toggle('accordion');
      let elInfo = elParent.lastChild;
      console.log(elParent, elInfo, 'tototo');
      

      if (elInfo.style.maxHeight) {
        elParent.style.maxHeight = null;
        el.innerHTML = '&#43;';
      }
      else {
        elInfo.style.maxHeight = elParent.scrollHeight + "px";
        el.innerHTML = '&#8722;';
      }
    }
  });
};