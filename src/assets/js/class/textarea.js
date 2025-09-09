export default class Textarea{
    constructor(){
        this.textarea = document.querySelector("form textarea");
        this.messageHelp = document.querySelector("form .message-help");
        this.limit = this.messageHelp.querySelector("span").innerHTML
        if(!this.checkElement()){
            throw new Error("Il manque soit un textarea soit son message help !");
        }

        this.setCaractereBehavior()
    }

    checkElement(){
        return this.textarea && this.messageHelp;
    }

    setCaractereBehavior(){
        this.textarea.addEventListener('input', () => {
        const remaining = this.limit - this.textarea.value.length;
        this.messageHelp.textContent = `${remaining} caractères restants.`;
  });
    }
}