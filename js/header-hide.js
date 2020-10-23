
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
function actionsToHidingHeader(e) {
    
    console.log("actionsToHidingHeader() by " + e.type);

    if (!isHeaderHidden()) hideHeader(e);

    removeListenersToHideHeader();
} 
function addListenersToHideHeader() { 

    refs.clients.addEventListener('click', actionsToHidingHeader);    
    refs.clients.addEventListener('touchmove', actionsToHidingHeader);
    window.addEventListener('scroll', actionsToHidingHeader);

}
function removeListenersToHideHeader() { 
    refs.clients.removeEventListener('click', actionsToHidingHeader);    
    refs.clients.removeEventListener('touchmove', actionsToHidingHeader);
    window.removeEventListener('scroll', actionsToHidingHeader);
}


