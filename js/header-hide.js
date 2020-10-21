
console.log("heade-slide");

const headerEl = document.querySelector(".js-header");

 window.addEventListener('scroll', onScrollHeaderReaction);
 document.addEventListener('click', onClickHeaderReaction);

function onScrollHeaderReaction() { 
    if (!headerEl.classList.contains('hide-down')) headerEl.classList.add('hide-down');
     console.log(headerEl+"-"+Date());
}

function onClickHeaderReaction(e) {  
    if (e.target.classList.contains('hide-down')) { headerEl.classList.remove('hide-down'); return;}
    if (e.target !==  headerEl && !headerEl.classList.contains('hide-down')) { headerEl.classList.add('hide-down'); return; }
}