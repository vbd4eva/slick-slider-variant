class MobileToggle { 

    constructor(dataMark) {       
        this._setRefs(dataMark) && this._init();
    }

    _setRefs(dataMark) { 
        const containerMark = `[${dataMark}]`;
        const buttonMark = `[${dataMark}-button]`;

        const containerEl = document.querySelector(containerMark);
        const buttonEl = document.querySelector(buttonMark);

        this.refs = { containerEl, buttonEl };

        return this._checkRefs(containerMark);
    }

    _checkRefs(containerMark) { 
        if (!this.refs.containerEl || !this.refs.buttonEl) { 
            this.error = "Ошибка! : переданній єлемент " + containerMark + " не найден";
            console.log( this.error );
            return;
        }
        return true;
    };

    _init() { 
        this.refs.buttonEl.addEventListener("click", this._onClick.bind(this));

        const menuCloseLinks = this.refs.containerEl.querySelectorAll('.menu-close');
        menuCloseLinks.forEach(
            link => {
                link.addEventListener("click", this._onClick.bind(this));
            }
        );        
    };

    _onClick() { 

        const expanded = this.refs.buttonEl.getAttribute("aria-expanded") === "true";
        // const expanded = this.refs.buttonEl.getAttribute("aria-expanded") === "true" || false;

        // this._listenScroll(!expanded);

        this.refs.buttonEl.classList.toggle("is-open");
        this.refs.buttonEl.setAttribute("aria-expanded", !expanded);

        this.refs.containerEl.classList.toggle("is-open");     
        
        document.documentElement.classList.toggle('y-scroll-off');
    }

    // _listenScroll(resolution) { 

    //     if (resolution) {
    //         document.addEventListener('scroll', this._stopScrollPropagation);
    //     }
    //     else {
    //         document.removeEventListener('scroll', this._stopScrollPropagation);
    //     }
    // }

    // _stopScrollPropagation(e) { 
    //     e.stopPropagation();
    //     console.log(e);
    // }

}


//инициализация "мобильных меню"
const contactsMobileToggle = new MobileToggle('data-contacts');
const clientListMobileToggle = new MobileToggle('data-menu');
