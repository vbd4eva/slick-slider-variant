 function finishScrollUpElement(Element) { 

     if (!Element) return;
    
    const callback = () => {
        Element.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    
    stopScrollEventListener(callback);
     
   function stopScrollEventListener( callback=()=>alert('закончили прокрутку'), timeInterval=250,){
    $(window).on('wheel', function(e) {
      if (window.wheelTimeout) {
        window.clearTimeout(window.wheelTimeout);
      }
     
      window.wheelTimeout = window.setTimeout(function() {
          callback();
      }, timeInterval);
    });
}
}

const options = {
   threshold: 0.51, 
};

const onEntry = (entries, observer) => {
    entries.forEach(
        (entrie) => {
            if (entrie.isIntersecting) {
                finishScrollUpElement(entrie.target);
            }
         });
};

const observer = new IntersectionObserver(onEntry, options);

const clientSliders = document.querySelectorAll('.clients > .client-slider');

clientSliders.forEach(
    elem => observer.observe(elem)
);