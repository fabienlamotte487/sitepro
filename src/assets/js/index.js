import './../scss/style.scss';
import Dispo from './class/disponibility';
import Nav from './class/nav';
import CircleStep from './class/circleStep';
import Textarea from './class/textarea';

document.addEventListener("DOMContentLoaded", function () {
    new Nav()
    new Dispo()
    new CircleStep()
    new Textarea()
});