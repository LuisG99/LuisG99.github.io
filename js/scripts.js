//
// Scripts
//
class MobileNavbar{
    constructor(mobileMenu,navLists,navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navLists = document.querySelector(navLists);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind();
    }

    handleClick(){
        this.navLists.classList.toggle(this.activeClass);
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    init(){
        if(this.mobileMenu){
            this.addClickEvent(); 
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();