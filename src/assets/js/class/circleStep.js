export default class CircleStep{
    constructor(){
        this.circle = document.querySelector("#working_with_me .cercle")
        this.nextButton = document.querySelector("#working_with_me button.next");
        this.previousButton = document.querySelector("#working_with_me button.previous");
        this.initialRotation = 45;
        this.currentRotation = 0;
        this.rotationStep = 90;
        this.classToShow = "current"

        this.steps = document.querySelectorAll("#working_with_me ul.steps li");
        this.currentStep = 0;

        if(!this.checkElements())
        {
            throw new Error("Il manque des éléments html")
        }

        this.setButtonClick()
    }

    checkElements(){
        return this.circle && this.nextButton && this.previousButton && this.steps.length > 0;
    }

    setButtonClick(){
        this.previousButton.addEventListener("click", () => this.previousStep());
        this.nextButton.addEventListener("click", () => this.nextStep());
    }

    nextStep(){
        if((this.currentStep + 1) < this.steps.length){
            this.currentStep == this.currentStep++;
            this.showCurrentStep();
            this.rollcircle("next");
        }
        
        this.manageButtons()
    }

    previousStep(){
        if(this.currentStep != 0){
            this.currentStep == this.currentStep--;
            this.showCurrentStep()
            this.rollcircle("previous")
        }
        
        this.manageButtons()
    }

    manageButtons(){
        if(this.currentStep + 1 === this.steps.length){
            this.disableButton(this.nextButton);
        } else {
            this.enableButton(this.nextButton);
        }
        if(this.currentStep === 0){
            this.disableButton(this.previousButton)
        } else {
            this.enableButton(this.previousButton)
        }
    }

    disableButton(button){
        if(!button.getAttribute("disabled")){
            button.setAttribute("disabled", true)
        }
    }

    enableButton(button){
        button.removeAttribute("disabled")
    }

    showCurrentStep(){
        this.steps.forEach((step, index) => {
            if(index != this.currentStep){
                step.classList.remove(this.classToShow);
            } else {
                step.classList.add(this.classToShow)
            }
        });
    }

    rollcircle(behavior){
        let rotation = this.currentRotation || this.initialRotation;

        if(behavior == "next"){
            rotation += this.rotationStep;
        } else {
            rotation -= this.rotationStep;
        }

        this.circle.style.transform = `rotate(${rotation}deg)`;
        this.currentRotation = rotation;
    }
}