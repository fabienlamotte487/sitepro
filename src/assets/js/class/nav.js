export default class Nav{
    constructor(){
        this.nav = document.querySelector("nav");
        this.navResponsive = document.querySelector("nav#nav_responsive")
        this.burgerButton = document.getElementById("burger-menu");
        this.toggleClassName = "showed";
        this.delayAnimRs = .3; // Time to second
        this.navFixedThreshold = 75;
        this.init();
    }

    init(){
        try{
            const {result, message} = this.checkNavigation()
            if(!result) throw Error(message)

            // On donne au bouton burger la capacité à montrer le menu
            this.navResponsiveOpenable();
            this.setNavReady();
            this.preventWindowScroll();
        } catch(e){
            throw new Error(e)
        }
    }

    checkNavigation(){
        // False si aucune navigation retrouvée
        if(!this.nav || this.navResponsive) return {result: true, message: "Il manque au moins une navigation"};
        if(!this.burgerButton) return {result: false, message: "Bouton burger non présent"};

        return {result: true, message: "OK"};
    }

    navResponsiveOpenable(){
        this.burgerButton.addEventListener("click", (e) => {
            e.preventDefault();
            const targetToToggle = this.navResponsive
            if(targetToToggle.classList.contains(this.toggleClassName)){
                targetToToggle.classList.remove(this.toggleClassName)
            } else {
                targetToToggle.classList.add(this.toggleClassName)
            }
        })
    }

    setNavReady(){
        setTimeout(() => {
            this.nav.classList.add("ready")
        }, this.delayAnimRs * 1000)
    }

    preventWindowScroll(){
        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (window.scrollY > this.navFixedThreshold) {
                        this.nav.classList.add('fixed');
                        this.navResponsive.classList.add('fixed');
                    } else {
                        // this.nav.classList.remove('fixed');
                        // this.navResponsive.classList.remove('fixed');
                    }
                    ticking = false;
                });
                ticking = true;
            }
        });
    }
}