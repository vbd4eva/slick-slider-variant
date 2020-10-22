
console.log("heade-slide");

const HEADER_HIDE_CLASS = "hide-down";

const refs = {
    "header": document.querySelector(".js-header"),
    "clients": document.querySelector(".js-clients")
}

addListenersToHideHeader();

function isHeaderHidden() { 
    return refs.header.classList.contains(HEADER_HIDE_CLASS);
}

function hideHeader() { 
    refs.header.classList.add(HEADER_HIDE_CLASS);

    refs.header.addEventListener('click', showHeader, {once:true});
}

function showHeader(e) { 
    console.log("showHeader() by "+e.type);
    refs.header.classList.remove(HEADER_HIDE_CLASS);
    addListenersToHideHeader();
}

function actionsOnHideHeader(e) {
    
    console.log("actionsOnHideHeader() by " + e.type);

    if (!isHeaderHidden()) hideHeader(e);

    removeListenersToHideHeader();
}
 
function addListenersToHideHeader() { 

    refs.clients.addEventListener('click', actionsOnHideHeader);    
    refs.clients.addEventListener('touchmove', actionsOnHideHeader);
    window.addEventListener('scroll', actionsOnHideHeader);

}
function removeListenersToHideHeader() { 
    refs.clients.removeEventListener('click', actionsOnHideHeader);    
    refs.clients.removeEventListener('touchmove', actionsOnHideHeader);
    window.removeEventListener('scroll', actionsOnHideHeader);
}


