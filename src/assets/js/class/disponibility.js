export default class Dispo{
    constructor(){
        this.ringStatus = document.querySelector("section#presentation .dispo-body .dispo-status");
        this.messageStatus = document.querySelector("section#presentation .dispo-body .dispo-message");
        this.messageyes = "Disponible dès aujourd'hui";
        this.messageno = "Actuellement en mission";
        this.imidispo = true;

        this.checkElements()
        this.displayStatus()
    }

    checkElements(){
        if(!this.ringStatus || !this.messageStatus){
            throw new Error("Les données json et les éléments HTML sont obligatoires !")
        }
    }

    displayStatus(){
        let translateDispo = this.imidispo === true ? "yes" : "no";
        let messageDispo = this.imidispo === true ? this.messageyes : this.messageno;

        if(!this.ringStatus.classList.contains(translateDispo)){
            this.ringStatus.classList.add(translateDispo)
        }
        this.messageStatus.innerHTML = messageDispo
        
    }
}