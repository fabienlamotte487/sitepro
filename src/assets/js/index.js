import './../scss/style.scss';
import Dispo from './class/disponibility';
import Nav from './class/nav';


document.addEventListener("DOMContentLoaded", function () {
    new Nav()
    new Dispo()
});