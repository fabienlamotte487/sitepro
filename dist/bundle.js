/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/style.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/style.scss ***!
  \*****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../fonts/Jomhuria.ttf */ "./src/assets/fonts/Jomhuria.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./../fonts/Roboto.ttf */ "./src/assets/fonts/Roboto.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./../img/jpg/hiver.jpg */ "./src/assets/img/jpg/hiver.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
/* Media screen */
/* colors */
/* Section */
/* fonts */
/* Gutters */
header {
  background-color: #1B1D20;
}
header nav {
  background-color: #1B1D20;
  display: none;
  justify-content: center;
  align-items: center;
}
header nav#nav_responsive {
  display: flex;
  position: relative;
  width: 100%;
}
header nav#nav_responsive div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  z-index: 1;
  width: 100%;
  border-bottom: 1px solid white;
  background-color: #1B1D20;
}
header nav#nav_responsive ul {
  position: absolute;
  top: -200%;
  width: 100%;
  overflow: hidden;
  left: 0;
  right: 0;
  background-color: #1B1D20;
  padding: 1rem 0;
  transition: top 0.3s ease;
  z-index: 0;
  display: flex;
  flex-direction: column;
}
header nav#nav_responsive #burger-menu {
  height: 30px;
  width: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
header nav#nav_responsive #burger-menu > div {
  all: inherit;
  height: 3px;
  width: 100%;
  background: white;
  transition: all 0.3s ease;
}
header nav#nav_responsive.showed ul {
  top: calc(100% + 1px);
}
header nav#nav_responsive.showed #burger-menu div:nth-child(1) {
  transform: translateY(10px) rotate(45deg);
}
header nav#nav_responsive.showed #burger-menu div:nth-child(2) {
  opacity: 0;
  transform: translateX(-5px);
}
header nav#nav_responsive.showed #burger-menu div:nth-child(3) {
  transform: translateY(-10px) rotate(-45deg);
}
header nav ul {
  display: flex;
  list-style-type: none;
}
header nav ul li {
  padding: 0.5rem 0;
  text-align: center;
}
header nav ul li a {
  color: white;
  height: 100%;
  width: 100%;
  text-decoration: none;
}
header nav.fixed {
  position: fixed !important;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
}

@media (min-width: 992px) {
  header nav {
    display: flex;
    justify-content: flex-start;
    padding: 1rem;
  }
  header nav#nav_responsive {
    display: none;
  }
  header nav #main-logo {
    margin-right: 3rem;
  }
  header nav ul {
    gap: 1rem;
  }
  header nav ul a {
    transition: opacity 0.3s ease;
  }
  header nav ul a:hover {
    opacity: 0.7;
  }
  header nav ul.rs {
    gap: 0.5rem;
    margin-right: 0.5rem;
    transition: opacity 0.3s ease;
  }
  header nav ul.rs li {
    opacity: 0;
    transform: translateY(-150%);
    transition: opacity 0.3s ease;
  }
  header nav > div {
    margin-left: auto;
    display: flex;
  }
  header nav.ready ul.rs li {
    will-change: transform, opacity;
    animation-name: fallBounce;
    animation-duration: 900ms;
    animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
    animation-fill-mode: both;
  }
  header nav.ready ul.rs li:nth-child(1) {
    animation-delay: 0s;
  }
  header nav.ready ul.rs li:nth-child(2) {
    animation-delay: 0.1s;
  }
  header nav.ready ul.rs li:nth-child(3) {
    animation-delay: 0.2s;
  }
  header nav.ready ul.rs li:nth-child(4) {
    animation-delay: 0.3s;
  }
  header nav.ready ul.rs li:nth-child(5) {
    animation-delay: 0.4s;
  }
  header nav.ready ul.rs li:nth-child(6) {
    animation-delay: 0.5s;
  }
  header nav.ready ul.rs li:nth-child(7) {
    animation-delay: 0.6s;
  }
  header nav.ready ul.rs li:nth-child(8) {
    animation-delay: 0.7s;
  }
  header nav.ready ul.rs li:nth-child(9) {
    animation-delay: 0.8s;
  }
  header nav.ready ul.rs li:nth-child(10) {
    animation-delay: 0.9s;
  }
  header nav.ready ul.rs li:nth-child(11) {
    animation-delay: 1s;
  }
  header nav.ready ul.rs li:nth-child(12) {
    animation-delay: 1.1s;
  }
}
@keyframes fallBounce {
  0% {
    opacity: 0;
    transform: translateY(-150%);
  }
  20% {
    opacity: 1;
    transform: translateY(0%);
  }
  60% {
    opacity: 1;
    transform: translateY(-20%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@font-face {
  font-family: "jomhuria";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
@font-face {
  font-family: "roboto";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}
h1, h2, h3 {
  font-family: "jomhuria";
  font-weight: 300;
}

h1 {
  display: flex;
  flex-direction: column;
}
h1 span {
  line-height: 0.65;
}
h1 span:nth-child(1) {
  background: linear-gradient(-180deg, #FA9A10, 50%, #EB3738 90%, #EB3738 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}
h1 span:nth-child(2) {
  background: linear-gradient(-180deg, #00E1CD, 40%, #6E39D5 60%, #6E39D5 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}

h2 {
  line-height: 0.65;
  color: white;
  text-align: center;
  margin-bottom: 1rem;
}
h2.no-mb {
  margin-bottom: 0;
}

h3 {
  color: white;
  line-height: 0.65;
  margin-bottom: 0.5rem;
}

p {
  font-family: "roboto";
  color: white;
}

h1 {
  font-size: 62px;
}

h2 {
  font-size: 32px;
}
@media (min-width: 768px) {
  h2 {
    font-size: 48px;
  }
}

h3 {
  font-size: 24px;
}
@media (min-width: 768px) {
  h3 {
    font-size: 32px;
  }
}

p {
  font-size: 11px;
}
@media (min-width: 768px) {
  p {
    font-size: 13px;
  }
}
@media (min-width: 992px) {
  p {
    font-size: 16px;
  }
}

@media (min-width: 992px) {
  h1 {
    flex-direction: row;
    gap: 0.5rem;
  }
}
.btn {
  border: none;
  border-radius: 30px;
  transition: opacity 0.3s ease;
  display: flex;
  padding: 0.75rem 2rem;
  text-decoration: none;
  color: white;
  font-family: "roboto";
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn.primary {
  background: linear-gradient(-180deg, #FA9A10, 50%, #EB3738 90%, #EB3738 100%);
}
.btn:has(img) {
  padding: 0.75rem;
}
.btn:disabled {
  opacity: 0.5;
}
@media (min-width: 992px) {
  .btn:hover {
    opacity: 0.8;
    cursor: pointer;
  }
}

section {
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
@media (min-width: 768px) {
  section {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
@media (min-width: 992px) {
  section {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}
section.no-gutters {
  padding-left: 0;
  padding-right: 0;
}

footer {
  display: flex;
  flex-direction: column;
}

section#presentation {
  padding: 0;
}
section#presentation #branding {
  padding: 3rem 0;
  width: 100%;
}
section#presentation #branding p {
  margin-bottom: 1rem;
}
section#presentation #branding .wallart {
  display: none;
}
section#presentation #branding .matrogne {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "roboto";
}
section#presentation #branding .matrogne div.dispo-body {
  display: flex;
}
section#presentation #branding .matrogne div.dispo-body div.dispo-status {
  height: 15px;
  width: 15px;
  border-radius: 15px;
  margin-right: 5px;
}
section#presentation #branding .matrogne div.dispo-body div.dispo-status.yes {
  background: #56B53E;
}
section#presentation #branding .matrogne div.dispo-body div.dispo-status.no {
  background: #A70E0E;
}
section#presentation #purpose {
  background: linear-gradient(-180deg, #FA9A10, 50%, #EB3738 90%, #EB3738 100%);
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 1rem;
  padding-right: 1rem;
}
@media (min-width: 768px) {
  section#presentation #purpose {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
@media (min-width: 992px) {
  section#presentation #purpose {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}
section#presentation #purpose img {
  height: 100px;
  width: 100px;
  animation: nuageFlottant 6s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
}
section#presentation #purpose > div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}
@media (min-width: 768px) {
  section#presentation #branding {
    position: relative;
    overflow: hidden;
  }
  section#presentation #branding * {
    z-index: 1;
  }
  section#presentation #branding .wallart {
    display: block;
    position: absolute;
    z-index: 0;
    top: -175px;
    left: -150px;
    transform: rotate(20deg);
  }
}
@media (min-width: 992px) {
  section#presentation #branding {
    padding: 7rem 0;
  }
  section#presentation #branding > div {
    width: 75%;
    margin-left: auto;
  }
}

@keyframes nuageFlottant {
  0% {
    transform: translate(0px, 0px);
  }
  25% {
    transform: translate(4px, -6px); /* ×2 */
  }
  50% {
    transform: translate(-4px, 4px); /* ×2 */
  }
  75% {
    transform: translate(2px, -2px); /* ×2 */
  }
  100% {
    transform: translate(0px, 0px);
  }
}
section#services h2 {
  text-align: center;
  margin-bottom: 2rem;
}
section#services ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;
  list-style: none;
  width: 100%;
  column-gap: 10px;
  row-gap: 50px;
}
section#services ul li {
  width: calc(50% - 5px);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  gap: 10px;
}
section#services ul li p {
  font-style: italic;
}
section#services ul li > div:has(img) {
  background: linear-gradient(-180deg, #FA9A10, 50%, #EB3738 90%, #EB3738 100%);
  padding: 0.5rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
section#services ul li > div:has(img) img {
  height: 24px;
  width: 24px;
}
section#services ul li:nth-child(even) {
  text-align: left;
  flex-direction: row-reverse;
}

@media (min-width: 992px) {
  section#services {
    height: 100vh;
  }
  section#services ul {
    height: 100%;
    justify-content: flex-start;
    align-items: center;
  }
  section#services ul li {
    width: calc(33.33% - 10px);
    flex-direction: column-reverse;
    justify-content: center;
  }
  section#services ul li:nth-child(even) {
    flex-direction: column-reverse;
  }
  section#services ul li h3, section#services ul li p {
    text-align: center;
  }
  section#services ul li > div:has(img) {
    padding: 1rem;
  }
  section#services ul li > div:has(img) img {
    height: 48px;
    width: 48px;
  }
}
/* A partir de md */
/* A partir de lg */
/* A partir de xl */
section#working_with_me {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 350px;
  overflow: hidden;
  /* Coins du cercle */
}
section#working_with_me .cercle {
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  left: -150px;
  top: 50%;
  bottom: 50%;
  margin: auto;
  transform: rotate(45deg);
  transition: transform 0.3s ease;
}
section#working_with_me .inner-circle {
  background-color: #2E3035;
  height: 100px;
  width: 100px;
  z-index: 2;
  position: absolute;
  border-radius: 100%;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
}
section#working_with_me .cercle .img-hiver {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
section#working_with_me .cercle .img-hiver::before {
  content: "";
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.3s ease;
}
section#working_with_me .cercle .img-hiver:nth-child(2) {
  grid-column: 1;
  grid-row: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  border-top-left-radius: 100%;
}
section#working_with_me .cercle .img-hiver:nth-child(2):before {
  transform: rotate(-135deg) scale(1.5);
}
section#working_with_me .cercle .img-hiver:nth-child(3) {
  grid-column: 2;
  grid-row: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  border-top-right-radius: 100%;
}
section#working_with_me .cercle .img-hiver:nth-child(3):before {
  transform: rotate(-45deg) scale(1.5);
}
section#working_with_me .cercle .img-hiver:nth-child(4) {
  grid-column: 1;
  grid-row: 2;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  border-bottom-left-radius: 100%;
}
section#working_with_me .cercle .img-hiver:nth-child(4):before {
  transform: rotate(-225deg) scale(1.5);
}
section#working_with_me .cercle .img-hiver:nth-child(5) {
  grid-column: 2;
  grid-row: 2;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  border-bottom-right-radius: 100%;
}
section#working_with_me .cercle .img-hiver:nth-child(5):before {
  transform: rotate(45deg) scale(1.5);
}
section#working_with_me > div {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
section#working_with_me ul.steps {
  display: flex;
  width: auto;
  margin-left: 35%;
  align-items: auto;
}
section#working_with_me ul.steps li {
  display: none;
  width: 100%;
}
section#working_with_me ul.steps li.current {
  display: block;
}
section#working_with_me .steps-nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-self: flex-end;
  margin-top: 1rem;
  gap: 0.5rem;
}
section#working_with_me .steps-nav button img {
  width: 16px;
  height: 16px;
}
section#working_with_me .steps-nav button.previous {
  opacity: 1;
}
section#working_with_me .steps-nav button.previous:disabled {
  opacity: 0;
  transition: opacity 0.3s ease;
}

@media (min-width: 768px) {
  section#working_with_me .cercle {
    width: 500px;
    height: 500px;
    gap: 1.25rem;
    left: -250px;
  }
  section#working_with_me .inner-circle {
    height: 200px;
    width: 200px;
    top: calc(50% - 100px);
    left: calc(50% - 100px);
  }
}
@media (min-width: 992px) {
  section#working_with_me {
    padding-right: 3rem;
    padding-top: 3rem;
  }
  section#working_with_me .cercle {
    width: 1000px;
    height: 1000px;
    gap: 2rem;
    left: -550px;
  }
  section#working_with_me .inner-circle {
    height: 200px;
    width: 200px;
    top: calc(50% - 100px);
    left: calc(50% - 100px);
  }
  section#working_with_me h2 {
    align-self: flex-end;
  }
  section#working_with_me > div {
    width: 50%;
    align-self: flex-end;
  }
}
@media (min-width: 1200px) {
  section#working_with_me .cercle {
    width: 1400px;
    height: 1400px;
    gap: 2rem;
    left: -750px;
  }
  section#working_with_me .inner-circle {
    height: 400px;
    width: 400px;
    top: calc(50% - 200px);
    left: calc(50% - 200px);
  }
  section#working_with_me h2 {
    align-self: flex-end;
    padding-right: 10rem;
    padding-top: 3rem;
  }
  section#working_with_me > div {
    width: 50%;
    align-self: flex-end;
    padding-right: 3rem;
  }
}
section#price_question {
  display: flex;
  background: red;
  justify-content: space-around;
  align-items: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: #1B1D20;
  gap: 1rem;
}
section#price_question h2 {
  text-align: left;
}

section#contact_me {
  background-color: #1B1D20;
}
section#contact_me form .form-element {
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
}
section#contact_me form .form-element label {
  color: white;
  font-family: "roboto";
  margin-bottom: 0.25rem;
}
section#contact_me form .form-element input, section#contact_me form .form-element textarea {
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0.75rem 1rem;
  font-family: "roboto";
}
section#contact_me form .form-element textarea {
  height: 150px;
  padding-bottom: 3rem;
}
section#contact_me form .form-element .message-help {
  color: white;
  font-family: "roboto";
  margin-left: auto;
  margin-top: 0.25rem;
}
section#contact_me form button {
  margin-left: auto;
  margin-top: 1rem;
}

@media (min-width: 992px) {
  section#contact_me form {
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    gap: 2rem;
  }
  section#contact_me form .column:nth-child(1) {
    width: calc(25% - 1rem);
  }
  section#contact_me form .column:nth-child(2) {
    width: calc(75% - 1rem);
  }
}
* {
  margin: 0;
  padding: 0;
}

html, body {
  width: 100%;
  height: 100%;
  background-color: #2E3035;
}

html {
  scroll-behavior: smooth;
}
html:has(nav.fixed) {
  margin-top: 75px;
}`, "",{"version":3,"sources":["webpack://./src/assets/scss/style.scss","webpack://./src/assets/scss/variables.scss","webpack://./src/assets/scss/components/nav.scss","webpack://./src/assets/scss/components/fonts.scss","webpack://./src/assets/scss/mixins/font-sizes.scss","webpack://./src/assets/scss/components/button.scss","webpack://./src/assets/scss/components/section.scss","webpack://./src/assets/scss/mixins/gutters.scss","webpack://./src/assets/scss/components/footer.scss","webpack://./src/assets/scss/sections/presentation.scss","webpack://./src/assets/scss/sections/services.scss","webpack://./src/assets/scss/sections/working_with_me.scss","webpack://./src/assets/scss/sections/price_question.scss","webpack://./src/assets/scss/sections/contact_me.scss"],"names":[],"mappings":"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","sourcesContent":["@use 'variables' as *;\r\n\r\n@use 'components/nav';\r\n@use 'components/fonts';\r\n@use 'components/button';\r\n@use 'components/section';\r\n@use 'components/footer';\r\n\r\n@use 'sections/presentation';\r\n@use 'sections/services';\r\n@use 'sections/working_with_me';\r\n@use 'sections/price_question';\r\n@use 'sections/contact_me';\r\n\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\nhtml, body{\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: $dark;\r\n}\r\n\r\nhtml{\r\n    scroll-behavior: smooth;\r\n    &:has(nav.fixed){\r\n        margin-top: 75px;\r\n    }\r\n}","/* Media screen */\r\n$sm-screen: 576px;\r\n$md-screen: 768px;\r\n$lg-screen: 992px;\r\n$xl-screen: 1200px;\r\n$xxl-screen: 1400px;\r\n\r\n/* colors */\r\n$primary-1: #FA9A10;\r\n$primary-2: #EB3738;\r\n$secondary-1: #00E1CD;\r\n$secondary-2: #6E39D5;\r\n$dark: #2E3035;\r\n$darkest: #1B1D20;\r\n$success: #56B53E;\r\n$error: #A70E0E;\r\n\r\n$degrade-primary: linear-gradient(-180deg, $primary-1, 50%, $primary-2 90%, $primary-2 100%);\r\n$degrade-secondary: linear-gradient(-180deg, $secondary-1, 40%, $secondary-2 60%, $secondary-2 100%);\r\n\r\n/* Section */ \r\n$margin-section: 3rem;\r\n\r\n/* fonts */\r\n$font-weight-normal: 400;\r\n$font-weight-bold: 700;\r\n$main-font: \"jomhuria\";\r\n$secondary-font: \"roboto\";\r\n\r\n$h1-font-size: (\r\n  $sm-screen: 62px,\r\n);;\r\n$h2-font-size: (\r\n  $sm-screen: 32px,\r\n  $md-screen: 48px,\r\n);\r\n$h3-font-size: (\r\n  $sm-screen: 24px,\r\n  $md-screen: 32px,\r\n);\r\n$p-font-size: (\r\n  $sm-screen: 11px,\r\n  $md-screen: 13px,\r\n  $lg-screen: 16px,\r\n);\r\n$font-sizes: (\r\n  h1: $h1-font-size,\r\n  h2: $h2-font-size,\r\n  h3: $h3-font-size,\r\n  p: $p-font-size\r\n);\r\n\r\n$h2-margin-bottom: 2rem;\r\n\r\n/* Gutters */\r\n$gutters-sm: 1rem;\r\n$gutters-md: 2rem;\r\n$gutters-lg: 3rem;\r\n\r\n$section-padding: 2rem;","@use '../variables' as *;\r\n\r\nheader{\r\n    background-color: $darkest;\r\n\r\n    nav{\r\n        &#nav_responsive{\r\n            display: flex;\r\n            position: relative;\r\n            width: 100%;\r\n\r\n            div{\r\n                display: flex;\r\n                justify-content: space-between;\r\n                align-items: center;\r\n                padding: 1rem;\r\n                z-index: 1;\r\n                width: 100%;\r\n                border-bottom: 1px solid white;\r\n                background-color: $darkest;\r\n            }\r\n            ul{\r\n                position: absolute;\r\n                top: -200%;\r\n                width: 100%;\r\n                overflow: hidden;\r\n                left: 0;\r\n                right: 0;\r\n                background-color: $darkest;\r\n                padding: 1rem 0;\r\n                transition: top .3s ease;\r\n                z-index: 0;\r\n                display: flex;\r\n                flex-direction: column;\r\n            }\r\n\r\n            #burger-menu{\r\n                height: 30px;\r\n                width: 30px;\r\n                display: flex;\r\n                flex-direction: column;\r\n                justify-content: space-around;\r\n                align-items: center;\r\n\r\n                > div{\r\n                    all: inherit;\r\n                    height: 3px;\r\n                    width: 100%;\r\n                    background: white;\r\n                    transition: all .3s ease;\r\n                }\r\n            }\r\n\r\n            &.showed{\r\n                ul{\r\n                    top: calc(100% + 1px);\r\n                }\r\n\r\n                #burger-menu{\r\n                    div:nth-child(1) {\r\n                        transform: translateY(10px) rotate(45deg);\r\n                    }\r\n\r\n                    div:nth-child(2) {\r\n                        opacity: 0;\r\n                        transform: translateX(-5px)\r\n                    }\r\n\r\n                    div:nth-child(3) {\r\n                        transform: translateY(-10px) rotate(-45deg);\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        \r\n        background-color: $darkest;\r\n        display: none;\r\n        justify-content: center;\r\n        align-items: center;\r\n\r\n        ul{\r\n            display: flex;\r\n            list-style-type: none;\r\n            li {\r\n                padding: .5rem 0;\r\n                text-align: center;\r\n                a{\r\n                    color: white;\r\n                    height: 100%;\r\n                    width: 100%;\r\n                    text-decoration: none;\r\n                }\r\n            }\r\n        }\r\n\r\n        &.fixed{\r\n            position: fixed !important;\r\n            top: 0;\r\n            right: 0;\r\n            left: 0;\r\n            z-index: 2;\r\n        }\r\n    }\r\n}\r\n\r\n\r\n@media (min-width: $lg-screen){\r\n    header nav{\r\n        &#nav_responsive{\r\n            display: none;\r\n        }\r\n        \r\n        display: flex;\r\n        justify-content: flex-start;\r\n        padding: 1rem;\r\n\r\n        #main-logo{\r\n            margin-right: 3rem;\r\n        }\r\n\r\n        ul{\r\n            gap: 1rem;\r\n            a{\r\n                transition: opacity .3s ease;\r\n\r\n                &:hover{\r\n                    opacity: .7;\r\n                }\r\n            }\r\n\r\n            &.rs{\r\n                gap: .5rem;\r\n                margin-right: .5rem;\r\n                transition: opacity .3s ease;\r\n                li {\r\n                    opacity: 0;\r\n                    transform: translateY(-150%);\r\n                    transition: opacity .3s ease;\r\n                }\r\n            }\r\n        }\r\n\r\n        > div{\r\n            margin-left: auto;\r\n            display: flex;\r\n        }\r\n\r\n        &.ready {\r\n            ul.rs {\r\n                li {\r\n                    will-change: transform, opacity;\r\n\r\n                    animation-name: fallBounce;\r\n                    animation-duration: 900ms;\r\n                    animation-timing-function: cubic-bezier(.28,.84,.42,1);\r\n                    animation-fill-mode: both; \r\n                }\r\n\r\n                @for $i from 1 through 12 {\r\n                    li:nth-child(#{$i}) {\r\n                        animation-delay: ($i - 1) * 0.1s;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n@keyframes fallBounce {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateY(-150%);\r\n  }\r\n  20% {\r\n    opacity: 1;\r\n    transform: translateY(0%); \r\n  }\r\n  60% {\r\n    opacity: 1;\r\n    transform: translateY(-20%);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateY(0%);\r\n  }\r\n}","@use '../variables' as *;\r\n@use '../mixins/font-sizes.scss' as *;\r\n\r\n\r\n@font-face {\r\n    font-family: $main-font;\r\n    src: url(\"./../fonts/Jomhuria.ttf\");\r\n}\r\n\r\n@font-face {\r\n    font-family: \"roboto\";\r\n    src: url(\"./../fonts/Roboto.ttf\");\r\n}\r\n\r\nh1, h2, h3{\r\n    font-family: $main-font;\r\n    font-weight: 300;\r\n}\r\n\r\nh1{\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    span{\r\n        line-height: 0.65;\r\n    }\r\n\r\n    span:nth-child(1){\r\n        background: $degrade-primary;\r\n        -webkit-background-clip: text;\r\n        background-clip: text;\r\n        color: transparent;\r\n        -webkit-text-fill-color: transparent;\r\n    }\r\n    \r\n    span:nth-child(2){\r\n        background: $degrade-secondary;\r\n        -webkit-background-clip: text;\r\n        background-clip: text;\r\n        color: transparent;\r\n        -webkit-text-fill-color: transparent;\r\n    }\r\n}\r\n\r\nh2{\r\n    line-height: 0.65;\r\n    color: white;\r\n    text-align: center;\r\n    margin-bottom: 1rem;\r\n    &.no-mb{\r\n        margin-bottom: 0;\r\n    }\r\n}\r\n\r\nh3{\r\n    color: white;\r\n    line-height: 0.65;\r\n    margin-bottom: .5rem;\r\n}\r\n\r\np{\r\n    font-family: $secondary-font;\r\n    color: white;\r\n}\r\n\r\n@each $element, $sizes in $font-sizes {\r\n  #{$element} {\r\n    @include responsive-font-sizes($sizes);\r\n  }\r\n}\r\n\r\n\r\n@media (min-width: $lg-screen){\r\n    h1{\r\n        flex-direction: row;\r\n        gap: .5rem;\r\n    }\r\n}","@mixin responsive-font-sizes($sizes) {\r\n  $prev-size: null;\r\n  $first: true;\r\n\r\n  @each $breakpoint, $size in $sizes {\r\n    @if $first {\r\n      // Valeur par défaut (sans media query)\r\n      font-size: $size;\r\n      $first: false;\r\n    } @else if $size != $prev-size {\r\n      // Media query seulement si la taille change\r\n      @media (min-width: #{$breakpoint}) {\r\n        font-size: $size;\r\n      }\r\n    }\r\n    $prev-size: $size;\r\n  }\r\n}","@use '../variables' as *;\r\n\r\n.btn{\r\n    &.primary{\r\n        background: $degrade-primary;\r\n    }\r\n\r\n    border: none;\r\n    border-radius: 30px;\r\n    transition: opacity .3s ease;\r\n    display: flex;\r\n    padding: .75rem 2rem;\r\n    text-decoration: none;\r\n    color: white;\r\n    font-family: $secondary-font;\r\n    font-weight: 500;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    &:has(img){\r\n        padding: .75rem;\r\n    }\r\n\r\n    &:disabled{\r\n        opacity: 0.5;\r\n    }\r\n\r\n    @media (min-width: $lg-screen){\r\n        &:hover{\r\n            opacity: .8;\r\n            cursor: pointer;\r\n        }\r\n    }\r\n}\r\n","@use '../variables' as *; \r\n@use '../mixins/gutters' as *;\r\n\r\nsection{\r\n    padding-top: $section-padding;\r\n    padding-bottom: $section-padding;\r\n    @include apply-mixins();\r\n\r\n    &.no-gutters{\r\n        padding-left: 0;\r\n        padding-right: 0;\r\n    }\r\n}","@use '../variables' as *; \r\n\r\n@mixin apply-mixins() {\r\n    padding-left: $gutters-sm;\r\n    padding-right: $gutters-sm;\r\n    \r\n    @media (min-width: $md-screen){\r\n        padding-left: $gutters-md;\r\n        padding-right: $gutters-md;\r\n    }\r\n\r\n    @media (min-width: $lg-screen){\r\n        padding-left: $gutters-lg;\r\n        padding-right: $gutters-lg;\r\n    }\r\n}","footer{\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    \r\n}","@use '../variables' as *;\r\n@use '../mixins/gutters' as *;\r\n\r\nsection#presentation{\r\n  padding: 0;\r\n  #branding{\r\n    padding: 3rem 0;\r\n    width: 100%;\r\n\r\n    p{\r\n      margin-bottom: 1rem;\r\n    }\r\n\r\n    .wallart{\r\n      display: none;\r\n    }\r\n\r\n    .matrogne{\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n\r\n      color: white;\r\n      font-family: $secondary-font;\r\n      div.dispo-body{\r\n        display: flex;\r\n        div.dispo-status{\r\n          height: 15px;\r\n          width: 15px;\r\n          border-radius: 15px;\r\n          margin-right: 5px;\r\n\r\n          &.yes {\r\n              background:$success;\r\n          }\r\n\r\n          &.no{\r\n              background:$error;\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n  }\r\n  #purpose{\r\n    background: $degrade-primary;\r\n    padding-top: 1.5rem;\r\n    padding-bottom: 1.5rem;\r\n    color: white;\r\n    text-align: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    @include apply-mixins();\r\n\r\n    img{\r\n      height: 100px;\r\n      width: 100px;\r\n      animation: nuageFlottant 6s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;\r\n    }\r\n\r\n    > div{\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      gap: 1rem;\r\n      margin-top: 2rem;\r\n    }\r\n  }\r\n    \r\n  @media (min-width: $md-screen){\r\n    #branding{\r\n      position:relative;\r\n      overflow: hidden;\r\n      \r\n      *{\r\n        z-index: 1;\r\n      }\r\n\r\n      .wallart{\r\n        display: block;\r\n        position:absolute;\r\n        z-index: 0;\r\n        top:-175px;\r\n        left:-150px;\r\n        transform: rotate(20deg);\r\n      }\r\n    }\r\n  }\r\n  \r\n  @media (min-width: $lg-screen){\r\n    #branding{\r\n      padding: 7rem 0;\r\n      > div {\r\n        width: 75%;\r\n        margin-left: auto;\r\n      }\r\n    }\r\n  }\r\n} \r\n\r\n@keyframes nuageFlottant {\r\n  0% {\r\n    transform: translate(0px, 0px);\r\n  }\r\n  25% {\r\n    transform: translate(4px, -6px); /* ×2 */\r\n  }\r\n  50% {\r\n    transform: translate(-4px, 4px); /* ×2 */\r\n  }\r\n  75% {\r\n    transform: translate(2px, -2px); /* ×2 */\r\n  }\r\n  100% {\r\n    transform: translate(0px, 0px);\r\n  }\r\n}\r\n\r\n","@use '../variables' as *; \r\n\r\n$gap-list-x: 10px;\r\n$gap-list-y: 50px;\r\n\r\n$responsive-icon-size: 24px;\r\n$responsive-item-size: 50%;\r\n\r\n$lg-icon-size: 48px;\r\n$lg-item-size: 33.33%;\r\n\r\nsection#services{\r\n    h2{\r\n        text-align: center;\r\n        margin-bottom: $h2-margin-bottom;\r\n    }\r\n\r\n    ul{\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        flex-wrap: wrap;\r\n        margin: 0;\r\n        list-style: none;\r\n        width: 100%;\r\n        column-gap: $gap-list-x;\r\n        row-gap: $gap-list-y;\r\n\r\n        li{\r\n            width: calc($responsive-item-size - ($gap-list-x/2));\r\n            display: flex;\r\n            justify-content: flex-end;\r\n            align-items: center;\r\n            text-align: right;\r\n            gap: 10px;\r\n            \r\n\r\n            p{\r\n                font-style: italic;\r\n            }\r\n\r\n            > div:has(img){\r\n                background: $degrade-primary;\r\n                padding: .5rem;\r\n                border-radius: 100%;\r\n                display: flex;\r\n                justify-content: center;\r\n                align-items: center;\r\n                img{\r\n                    height: $responsive-icon-size;\r\n                    width: $responsive-icon-size;\r\n                }\r\n            }\r\n\r\n            &:nth-child(even){\r\n                text-align: left;\r\n                flex-direction: row-reverse;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n\r\n@media (min-width: $lg-screen){\r\n    section#services {\r\n        height: 100vh;\r\n        ul {\r\n            height: 100%;\r\n            justify-content: flex-start;\r\n            align-items: center;\r\n            li {\r\n                width: calc($lg-item-size - $gap-list-x);\r\n                flex-direction: column-reverse;\r\n                justify-content: center;\r\n                &:nth-child(even){\r\n                    flex-direction: column-reverse;\r\n                }\r\n\r\n                h3, p{\r\n                    text-align: center;\r\n                }\r\n                \r\n                > div:has(img){\r\n                    padding: 1rem;\r\n                    img{\r\n                        height: $lg-icon-size;\r\n                        width: $lg-icon-size;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n}","@use '../variables' as *;\r\n\r\n$widthInnerCircle: 100px;   // Cercle interne\r\n$circle: 250px;             // Cercle principal\r\n$borderWidth: 1rem;         // Taille de la bordure entre les images\r\n\r\n/* A partir de md */\r\n$widthInnerCircle-md: 200px;   // Cercle interne\r\n$circle-md: 500px;             // Cercle principal\r\n$borderWidth-md: 1.25rem;         // Taille de la bordure entre les images\r\n\r\n/* A partir de lg */\r\n$widthInnerCircle-lg: 200px;   // Cercle interne\r\n$circle-lg: 1000px;             // Cercle principal\r\n$borderWidth-lg: 2rem;         // Taille de la bordure entre les images\r\n\r\n/* A partir de xl */\r\n$widthInnerCircle-xl: 400px;   // Cercle interne\r\n$circle-xl: 1400px;             // Cercle principal\r\n$borderWidth-xl: 2rem;         // Taille de la bordure entre les images\r\n\r\n$contentMarginLeft: calc(35%);  // Marge gauche à appliquer pour le contenu textuel\r\n$contentMinHeight: $circle + 100px;     // Hauteur minimale à réserver pour le block (pour ajuster la hauteur du texte à celle du cercle\r\n\r\nsection#working_with_me{\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  min-height: $contentMinHeight;\r\n  overflow: hidden;\r\n\r\n  .cercle {\r\n    position: absolute;\r\n    width: $circle;\r\n    height: $circle;\r\n    border-radius: 100%;\r\n    overflow: hidden;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr;\r\n    gap: $borderWidth;\r\n    left: -150px;\r\n    top: 50%;\r\n    bottom: 50%;\r\n    margin: auto;\r\n    transform: rotate(45deg);\r\n    transition: transform .3s ease;\r\n  }\r\n\r\n  .inner-circle{\r\n    background-color: $dark;\r\n    height: $widthInnerCircle;\r\n    width: $widthInnerCircle;\r\n    z-index: 2;\r\n    position: absolute;\r\n    border-radius: 100%;\r\n    top: calc(50% - ($widthInnerCircle/2));\r\n    left: calc(50% - ($widthInnerCircle/2));\r\n  }\r\n\r\n  .cercle .img-hiver {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .cercle .img-hiver::before {\r\n    content: '';\r\n    background-image: url(\"./../img/jpg/hiver.jpg\");\r\n    position: absolute;\r\n    top: 0; left: 0; right: 0; bottom: 0;\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    transition: transform .3s ease;\r\n  }\r\n\r\n  /* Coins du cercle */\r\n  .cercle .img-hiver:nth-child(2) {\r\n    grid-column: 1;\r\n    grid-row: 1;\r\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\r\n    border-top-left-radius: 100%;\r\n    &:before{\r\n      transform: rotate(-135deg) scale(1.5);\r\n    }\r\n  }\r\n\r\n  .cercle .img-hiver:nth-child(3) {\r\n    grid-column: 2;\r\n    grid-row: 1;\r\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\r\n    border-top-right-radius: 100%;\r\n    &:before{\r\n      transform: rotate(-45deg) scale(1.5);\r\n    }\r\n  }\r\n\r\n  .cercle .img-hiver:nth-child(4) {\r\n    grid-column: 1;\r\n    grid-row: 2;\r\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\r\n    border-bottom-left-radius: 100%;\r\n    &:before{\r\n      transform: rotate(-225deg) scale(1.5);\r\n    }\r\n  }\r\n\r\n  .cercle .img-hiver:nth-child(5) {\r\n    grid-column: 2;\r\n    grid-row: 2;\r\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\r\n    border-bottom-right-radius: 100%;\r\n    &:before{\r\n      transform: rotate(45deg) scale(1.5);\r\n    }\r\n  }\r\n\r\n  > div {\r\n    flex:1;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  ul.steps{\r\n    display: flex;\r\n    width: auto;\r\n    margin-left: $contentMarginLeft;\r\n    align-items: auto;\r\n    \r\n    li{\r\n      display: none;\r\n      width: 100%;\r\n\r\n      &.current{\r\n        display: block;\r\n      }\r\n    }\r\n  }\r\n\r\n  .steps-nav{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    align-self: flex-end;\r\n    margin-top: 1rem;\r\n    gap: .5rem;\r\n\r\n    button {\r\n      img{\r\n        width: 16px;\r\n        height: 16px;\r\n      }\r\n\r\n      &.previous{\r\n        opacity: 1;\r\n        &:disabled{\r\n          opacity:0;\r\n          transition: opacity .3s ease;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: $md-screen){\r\n  section#working_with_me{\r\n    .cercle{\r\n      width: $circle-md;\r\n      height: $circle-md;\r\n      gap: $borderWidth-md;\r\n      left: -250px;\r\n    }\r\n\r\n    .inner-circle{\r\n      height: $widthInnerCircle-md;\r\n      width: $widthInnerCircle-md;\r\n      top: calc(50% - ($widthInnerCircle-md/2));\r\n      left: calc(50% - ($widthInnerCircle-md/2));\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: $lg-screen){\r\n  section#working_with_me{\r\n    .cercle{\r\n      width: $circle-lg;\r\n      height: $circle-lg;\r\n      gap: $borderWidth-lg;\r\n      left: -550px;\r\n    }\r\n\r\n    .inner-circle{\r\n      height: $widthInnerCircle-lg;\r\n      width: $widthInnerCircle-lg;\r\n      top: calc(50% - ($widthInnerCircle-lg/2));\r\n      left: calc(50% - ($widthInnerCircle-lg/2));\r\n    }\r\n\r\n    padding-right: 3rem;\r\n    padding-top: 3rem;\r\n\r\n    h2{\r\n      align-self: flex-end;\r\n    }\r\n\r\n    > div {\r\n      width: 50%;\r\n      align-self: flex-end;\r\n    }\r\n  }\r\n}\r\n@media (min-width: $xl-screen){\r\n  section#working_with_me{\r\n    .cercle{\r\n      width: $circle-xl;\r\n      height: $circle-xl;\r\n      gap: $borderWidth-xl;\r\n      left: -750px;\r\n    }\r\n\r\n    .inner-circle{\r\n      height: $widthInnerCircle-xl;\r\n      width: $widthInnerCircle-xl;\r\n      top: calc(50% - ($widthInnerCircle-xl/2));\r\n      left: calc(50% - ($widthInnerCircle-xl/2));\r\n    }\r\n\r\n    h2{\r\n      align-self: flex-end;\r\n      padding-right: 10rem;\r\n      padding-top: 3rem;\r\n    }\r\n\r\n    > div {\r\n      width: 50%;\r\n      align-self: flex-end;\r\n      padding-right: 3rem;\r\n    }\r\n  }\r\n}","@use '../variables' as *; \r\n\r\nsection#price_question{\r\n    display: flex;\r\n    background: red;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    padding-top: 5rem;\r\n    padding-bottom: 5rem;\r\n    background-color: $darkest;\r\n    gap: 1rem;\r\n\r\n    h2{\r\n        text-align: left;\r\n    }\r\n}","@use '../variables' as *; \r\n\r\n$lg-gap: 2rem;\r\n$first-column-width: 25%;\r\n$second-column-width: 75%;\r\n\r\nsection#contact_me{\r\n    background-color: $darkest;\r\n\r\n    form{\r\n        .form-element {\r\n            display: flex;\r\n            flex-direction: column;\r\n            margin: 1rem 0;\r\n\r\n            label{\r\n                color: white;\r\n                font-family: $secondary-font;\r\n                margin-bottom: .25rem;\r\n            }\r\n\r\n            input, textarea{\r\n                outline: none;\r\n                border: none;\r\n                border-radius: 5px;\r\n                padding: 0.75rem 1rem;\r\n                font-family: $secondary-font;\r\n            }\r\n\r\n            textarea{\r\n                height: 150px;\r\n                padding-bottom: 3rem;\r\n            }\r\n\r\n            .message-help{\r\n                color: white;\r\n                font-family: $secondary-font;\r\n                margin-left: auto;\r\n                margin-top: .25rem;\r\n            }\r\n\r\n        }\r\n        button{\r\n            margin-left: auto;\r\n            margin-top: 1rem;\r\n        }\r\n    }\r\n}\r\n\r\n\r\n@media (min-width: $lg-screen){\r\n    section#contact_me{\r\n        form{\r\n            display: flex;\r\n            flex-direction: row;\r\n            width: 100%;\r\n            flex-wrap: wrap;\r\n            gap: $lg-gap;\r\n\r\n            .column:nth-child(1){\r\n                width: calc($first-column-width - ($lg-gap/2));\r\n            }\r\n            .column:nth-child(2){\r\n                width: calc($second-column-width - ($lg-gap/2));\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/fonts/Jomhuria.ttf":
/*!***************************************!*\
  !*** ./src/assets/fonts/Jomhuria.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "76b93328ff82c052e064.ttf";

/***/ }),

/***/ "./src/assets/fonts/Roboto.ttf":
/*!*************************************!*\
  !*** ./src/assets/fonts/Roboto.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c9d0f6513f7cfe91016.ttf";

/***/ }),

/***/ "./src/assets/img/jpg/hiver.jpg":
/*!**************************************!*\
  !*** ./src/assets/img/jpg/hiver.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/hiver7e565f9a96a0dfafc3c6.jpg";

/***/ }),

/***/ "./src/assets/js/class/circleStep.js":
/*!*******************************************!*\
  !*** ./src/assets/js/class/circleStep.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CircleStep)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var CircleStep = /*#__PURE__*/function () {
  function CircleStep() {
    _classCallCheck(this, CircleStep);
    this.circle = document.querySelector("#working_with_me .cercle");
    this.nextButton = document.querySelector("#working_with_me button.next");
    this.previousButton = document.querySelector("#working_with_me button.previous");
    this.initialRotation = 45;
    this.currentRotation = 0;
    this.rotationStep = 90;
    this.classToShow = "current";
    this.steps = document.querySelectorAll("#working_with_me ul.steps li");
    this.currentStep = 0;
    if (!this.checkElements()) {
      throw new Error("Il manque des éléments html");
    }
    this.setButtonClick();
  }
  return _createClass(CircleStep, [{
    key: "checkElements",
    value: function checkElements() {
      return this.circle && this.nextButton && this.previousButton && this.steps.length > 0;
    }
  }, {
    key: "setButtonClick",
    value: function setButtonClick() {
      var _this = this;
      this.previousButton.addEventListener("click", function () {
        return _this.previousStep();
      });
      this.nextButton.addEventListener("click", function () {
        return _this.nextStep();
      });
    }
  }, {
    key: "nextStep",
    value: function nextStep() {
      if (this.currentStep + 1 < this.steps.length) {
        this.currentStep == this.currentStep++;
        this.showCurrentStep();
        this.rollcircle("next");
      }
      this.manageButtons();
    }
  }, {
    key: "previousStep",
    value: function previousStep() {
      if (this.currentStep != 0) {
        this.currentStep == this.currentStep--;
        this.showCurrentStep();
        this.rollcircle("previous");
      }
      this.manageButtons();
    }
  }, {
    key: "manageButtons",
    value: function manageButtons() {
      if (this.currentStep + 1 === this.steps.length) {
        this.disableButton(this.nextButton);
      } else {
        this.enableButton(this.nextButton);
      }
      if (this.currentStep === 0) {
        this.disableButton(this.previousButton);
      } else {
        this.enableButton(this.previousButton);
      }
    }
  }, {
    key: "disableButton",
    value: function disableButton(button) {
      if (!button.getAttribute("disabled")) {
        button.setAttribute("disabled", true);
      }
    }
  }, {
    key: "enableButton",
    value: function enableButton(button) {
      button.removeAttribute("disabled");
    }
  }, {
    key: "showCurrentStep",
    value: function showCurrentStep() {
      var _this2 = this;
      this.steps.forEach(function (step, index) {
        if (index != _this2.currentStep) {
          step.classList.remove(_this2.classToShow);
        } else {
          step.classList.add(_this2.classToShow);
        }
      });
    }
  }, {
    key: "rollcircle",
    value: function rollcircle(behavior) {
      var rotation = this.currentRotation || this.initialRotation;
      if (behavior == "next") {
        rotation += this.rotationStep;
      } else {
        rotation -= this.rotationStep;
      }
      this.circle.style.transform = "rotate(".concat(rotation, "deg)");
      this.currentRotation = rotation;
    }
  }]);
}();


/***/ }),

/***/ "./src/assets/js/class/disponibility.js":
/*!**********************************************!*\
  !*** ./src/assets/js/class/disponibility.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dispo)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Dispo = /*#__PURE__*/function () {
  function Dispo() {
    _classCallCheck(this, Dispo);
    this.ringStatus = document.querySelector("section#presentation .dispo-body .dispo-status");
    this.messageStatus = document.querySelector("section#presentation .dispo-body .dispo-message");
    this.messageyes = "Disponible dès aujourd'hui";
    this.messageno = "Actuellement en mission";
    this.imidispo = true;
    this.checkElements();
    this.displayStatus();
  }
  return _createClass(Dispo, [{
    key: "checkElements",
    value: function checkElements() {
      if (!this.ringStatus || !this.messageStatus) {
        throw new Error("Les données json et les éléments HTML sont obligatoires !");
      }
    }
  }, {
    key: "displayStatus",
    value: function displayStatus() {
      var translateDispo = this.imidispo === true ? "yes" : "no";
      var messageDispo = this.imidispo === true ? this.messageyes : this.messageno;
      if (!this.ringStatus.classList.contains(translateDispo)) {
        this.ringStatus.classList.add(translateDispo);
      }
      this.messageStatus.innerHTML = messageDispo;
    }
  }]);
}();


/***/ }),

/***/ "./src/assets/js/class/nav.js":
/*!************************************!*\
  !*** ./src/assets/js/class/nav.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Nav)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Nav = /*#__PURE__*/function () {
  function Nav() {
    _classCallCheck(this, Nav);
    this.nav = document.querySelector("nav");
    this.navResponsive = document.querySelector("nav#nav_responsive");
    this.burgerButton = document.getElementById("burger-menu");
    this.toggleClassName = "showed";
    this.delayAnimRs = .3; // Time to second
    this.navFixedThreshold = 75;
    this.init();
  }
  return _createClass(Nav, [{
    key: "init",
    value: function init() {
      try {
        var _this$checkNavigation = this.checkNavigation(),
          result = _this$checkNavigation.result,
          message = _this$checkNavigation.message;
        if (!result) throw Error(message);

        // On donne au bouton burger la capacité à montrer le menu
        this.navResponsiveOpenable();
        this.setNavReady();
        this.preventWindowScroll();
      } catch (e) {
        throw new Error(e);
      }
    }
  }, {
    key: "checkNavigation",
    value: function checkNavigation() {
      // False si aucune navigation retrouvée
      if (!this.nav || this.navResponsive) return {
        result: true,
        message: "Il manque au moins une navigation"
      };
      if (!this.burgerButton) return {
        result: false,
        message: "Bouton burger non présent"
      };
      return {
        result: true,
        message: "OK"
      };
    }
  }, {
    key: "navResponsiveOpenable",
    value: function navResponsiveOpenable() {
      var _this = this;
      this.burgerButton.addEventListener("click", function (e) {
        e.preventDefault();
        var targetToToggle = _this.navResponsive;
        if (targetToToggle.classList.contains(_this.toggleClassName)) {
          targetToToggle.classList.remove(_this.toggleClassName);
        } else {
          targetToToggle.classList.add(_this.toggleClassName);
        }
      });
    }
  }, {
    key: "setNavReady",
    value: function setNavReady() {
      var _this2 = this;
      setTimeout(function () {
        _this2.nav.classList.add("ready");
      }, this.delayAnimRs * 1000);
    }
  }, {
    key: "preventWindowScroll",
    value: function preventWindowScroll() {
      var _this3 = this;
      var ticking = false;
      window.addEventListener('scroll', function () {
        if (!ticking) {
          window.requestAnimationFrame(function () {
            if (window.scrollY > _this3.navFixedThreshold) {
              _this3.nav.classList.add('fixed');
              _this3.navResponsive.classList.add('fixed');
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
  }]);
}();


/***/ }),

/***/ "./src/assets/js/class/textarea.js":
/*!*****************************************!*\
  !*** ./src/assets/js/class/textarea.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Textarea)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Textarea = /*#__PURE__*/function () {
  function Textarea() {
    _classCallCheck(this, Textarea);
    this.textarea = document.querySelector("form textarea");
    this.messageHelp = document.querySelector("form .message-help");
    this.limit = this.messageHelp.querySelector("span").innerHTML;
    if (!this.checkElement()) {
      throw new Error("Il manque soit un textarea soit son message help !");
    }
    this.setCaractereBehavior();
  }
  return _createClass(Textarea, [{
    key: "checkElement",
    value: function checkElement() {
      return this.textarea && this.messageHelp;
    }
  }, {
    key: "setCaractereBehavior",
    value: function setCaractereBehavior() {
      var _this = this;
      this.textarea.addEventListener('input', function () {
        var remaining = _this.limit - _this.textarea.value.length;
        _this.messageHelp.textContent = "".concat(remaining, " caract\xE8res restants.");
      });
    }
  }]);
}();


/***/ }),

/***/ "./src/assets/scss/style.scss":
/*!************************************!*\
  !*** ./src/assets/scss/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../scss/style.scss */ "./src/assets/scss/style.scss");
/* harmony import */ var _class_disponibility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class/disponibility */ "./src/assets/js/class/disponibility.js");
/* harmony import */ var _class_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class/nav */ "./src/assets/js/class/nav.js");
/* harmony import */ var _class_circleStep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class/circleStep */ "./src/assets/js/class/circleStep.js");
/* harmony import */ var _class_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./class/textarea */ "./src/assets/js/class/textarea.js");





document.addEventListener("DOMContentLoaded", function () {
  new _class_nav__WEBPACK_IMPORTED_MODULE_2__["default"]();
  new _class_disponibility__WEBPACK_IMPORTED_MODULE_1__["default"]();
  new _class_circleStep__WEBPACK_IMPORTED_MODULE_3__["default"]();
  new _class_textarea__WEBPACK_IMPORTED_MODULE_4__["default"]();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZ0g7QUFDakI7QUFDTztBQUN0Ryw0Q0FBNEMsK0hBQTBDO0FBQ3RGLDRDQUE0QywySEFBd0M7QUFDcEYsNENBQTRDLDZIQUF5QztBQUNyRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDB4QkFBMHhCLFlBQVksVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLFdBQVcsS0FBSyxLQUFLLGFBQWEsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksWUFBWSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksWUFBWSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxhQUFhLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxhQUFhLGFBQWEsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0scUJBQXFCLE1BQU0sTUFBTSxxQkFBcUIsTUFBTSxNQUFNLHFCQUFxQixNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsWUFBWSxZQUFZLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsWUFBWSxPQUFPLE1BQU0sV0FBVyxXQUFXLFFBQVEsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE9BQU8sV0FBVyxZQUFZLE9BQU8sS0FBSyxhQUFhLFdBQVcsV0FBVyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxZQUFZLFlBQVksWUFBWSxNQUFNLE9BQU8sV0FBVyxXQUFXLFlBQVksWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFlBQVksWUFBWSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLGFBQWEsYUFBYSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxZQUFZLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxjQUFjLGFBQWEsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxjQUFjLGFBQWEsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxZQUFZLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxjQUFjLGFBQWEsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFFBQVEsT0FBTyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsV0FBVyxRQUFRLE9BQU8sVUFBVSxX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Ly4vc3JjL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vbGFtb3R0ZWZhYmllbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGFtb3R0ZWZhYmllbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbGFtb3R0ZWZhYmllbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2xhbW90dGVmYWJpZW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbGFtb3R0ZWZhYmllbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGFtb3R0ZWZhYmllbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9sYW1vdHRlZmFiaWVuLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2xhbW90dGVmYWJpZW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9sYW1vdHRlZmFiaWVuLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbGFtb3R0ZWZhYmllbi8uL3NyYy9hc3NldHMvanMvY2xhc3MvY2lyY2xlU3RlcC5qcyIsIndlYnBhY2s6Ly9sYW1vdHRlZmFiaWVuLy4vc3JjL2Fzc2V0cy9qcy9jbGFzcy9kaXNwb25pYmlsaXR5LmpzIiwid2VicGFjazovL2xhbW90dGVmYWJpZW4vLi9zcmMvYXNzZXRzL2pzL2NsYXNzL25hdi5qcyIsIndlYnBhY2s6Ly9sYW1vdHRlZmFiaWVuLy4vc3JjL2Fzc2V0cy9qcy9jbGFzcy90ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly9sYW1vdHRlZmFiaWVuLy4vc3JjL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3M/YzU3YyIsIndlYnBhY2s6Ly9sYW1vdHRlZmFiaWVuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xhbW90dGVmYWJpZW4vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGFtb3R0ZWZhYmllbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGFtb3R0ZWZhYmllbi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2xhbW90dGVmYWJpZW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sYW1vdHRlZmFiaWVuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGFtb3R0ZWZhYmllbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9sYW1vdHRlZmFiaWVuL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2xhbW90dGVmYWJpZW4vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2xhbW90dGVmYWJpZW4vLi9zcmMvYXNzZXRzL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLy4uL2ZvbnRzL0pvbWh1cmlhLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vLi4vZm9udHMvUm9ib3RvLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vLi4vaW1nL2pwZy9oaXZlci5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogTWVkaWEgc2NyZWVuICovXG4vKiBjb2xvcnMgKi9cbi8qIFNlY3Rpb24gKi9cbi8qIGZvbnRzICovXG4vKiBHdXR0ZXJzICovXG5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUIxRDIwO1xufVxuaGVhZGVyIG5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxQjFEMjA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaGVhZGVyIG5hdiNuYXZfcmVzcG9uc2l2ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5oZWFkZXIgbmF2I25hdl9yZXNwb25zaXZlIGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbTtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFCMUQyMDtcbn1cbmhlYWRlciBuYXYjbmF2X3Jlc3BvbnNpdmUgdWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTIwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFCMUQyMDtcbiAgcGFkZGluZzogMXJlbSAwO1xuICB0cmFuc2l0aW9uOiB0b3AgMC4zcyBlYXNlO1xuICB6LWluZGV4OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuaGVhZGVyIG5hdiNuYXZfcmVzcG9uc2l2ZSAjYnVyZ2VyLW1lbnUge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmhlYWRlciBuYXYjbmF2X3Jlc3BvbnNpdmUgI2J1cmdlci1tZW51ID4gZGl2IHtcbiAgYWxsOiBpbmhlcml0O1xuICBoZWlnaHQ6IDNweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuaGVhZGVyIG5hdiNuYXZfcmVzcG9uc2l2ZS5zaG93ZWQgdWwge1xuICB0b3A6IGNhbGMoMTAwJSArIDFweCk7XG59XG5oZWFkZXIgbmF2I25hdl9yZXNwb25zaXZlLnNob3dlZCAjYnVyZ2VyLW1lbnUgZGl2Om50aC1jaGlsZCgxKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KSByb3RhdGUoNDVkZWcpO1xufVxuaGVhZGVyIG5hdiNuYXZfcmVzcG9uc2l2ZS5zaG93ZWQgI2J1cmdlci1tZW51IGRpdjpudGgtY2hpbGQoMikge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7XG59XG5oZWFkZXIgbmF2I25hdl9yZXNwb25zaXZlLnNob3dlZCAjYnVyZ2VyLW1lbnUgZGl2Om50aC1jaGlsZCgzKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCkgcm90YXRlKC00NWRlZyk7XG59XG5oZWFkZXIgbmF2IHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuaGVhZGVyIG5hdiB1bCBsaSB7XG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5oZWFkZXIgbmF2IHVsIGxpIGEge1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmhlYWRlciBuYXYuZml4ZWQge1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIGhlYWRlciBuYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cbiAgaGVhZGVyIG5hdiNuYXZfcmVzcG9uc2l2ZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBoZWFkZXIgbmF2ICNtYWluLWxvZ28ge1xuICAgIG1hcmdpbi1yaWdodDogM3JlbTtcbiAgfVxuICBoZWFkZXIgbmF2IHVsIHtcbiAgICBnYXA6IDFyZW07XG4gIH1cbiAgaGVhZGVyIG5hdiB1bCBhIHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgfVxuICBoZWFkZXIgbmF2IHVsIGE6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuICBoZWFkZXIgbmF2IHVsLnJzIHtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgfVxuICBoZWFkZXIgbmF2IHVsLnJzIGxpIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTUwJSk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG4gIH1cbiAgaGVhZGVyIG5hdiA+IGRpdiB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBoZWFkZXIgbmF2LnJlYWR5IHVsLnJzIGxpIHtcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWxsQm91bmNlO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogOTAwbXM7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjgsIDAuODQsIDAuNDIsIDEpO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIH1cbiAgaGVhZGVyIG5hdi5yZWFkeSB1bC5ycyBsaTpudGgtY2hpbGQoMSkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogMHM7XG4gIH1cbiAgaGVhZGVyIG5hdi5yZWFkeSB1bC5ycyBsaTpudGgtY2hpbGQoMikge1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4xcztcbiAgfVxuICBoZWFkZXIgbmF2LnJlYWR5IHVsLnJzIGxpOm50aC1jaGlsZCgzKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xuICB9XG4gIGhlYWRlciBuYXYucmVhZHkgdWwucnMgbGk6bnRoLWNoaWxkKDQpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XG4gIH1cbiAgaGVhZGVyIG5hdi5yZWFkeSB1bC5ycyBsaTpudGgtY2hpbGQoNSkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgfVxuICBoZWFkZXIgbmF2LnJlYWR5IHVsLnJzIGxpOm50aC1jaGlsZCg2KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xuICB9XG4gIGhlYWRlciBuYXYucmVhZHkgdWwucnMgbGk6bnRoLWNoaWxkKDcpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XG4gIH1cbiAgaGVhZGVyIG5hdi5yZWFkeSB1bC5ycyBsaTpudGgtY2hpbGQoOCkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC43cztcbiAgfVxuICBoZWFkZXIgbmF2LnJlYWR5IHVsLnJzIGxpOm50aC1jaGlsZCg5KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xuICB9XG4gIGhlYWRlciBuYXYucmVhZHkgdWwucnMgbGk6bnRoLWNoaWxkKDEwKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjlzO1xuICB9XG4gIGhlYWRlciBuYXYucmVhZHkgdWwucnMgbGk6bnRoLWNoaWxkKDExKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgfVxuICBoZWFkZXIgbmF2LnJlYWR5IHVsLnJzIGxpOm50aC1jaGlsZCgxMikge1xuICAgIGFuaW1hdGlvbi1kZWxheTogMS4xcztcbiAgfVxufVxuQGtleWZyYW1lcyBmYWxsQm91bmNlIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNTAlKTtcbiAgfVxuICAyMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgfVxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgfVxufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImpvbWh1cmlhXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcInJvYm90b1wiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cbmgxLCBoMiwgaDMge1xuICBmb250LWZhbWlseTogXCJqb21odXJpYVwiO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG5oMSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5oMSBzcGFuIHtcbiAgbGluZS1oZWlnaHQ6IDAuNjU7XG59XG5oMSBzcGFuOm50aC1jaGlsZCgxKSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjRkE5QTEwLCA1MCUsICNFQjM3MzggOTAlLCAjRUIzNzM4IDEwMCUpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbmgxIHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICMwMEUxQ0QsIDQwJSwgIzZFMzlENSA2MCUsICM2RTM5RDUgMTAwJSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5oMiB7XG4gIGxpbmUtaGVpZ2h0OiAwLjY1O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbmgyLm5vLW1iIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuaDMge1xuICBjb2xvcjogd2hpdGU7XG4gIGxpbmUtaGVpZ2h0OiAwLjY1O1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbnAge1xuICBmb250LWZhbWlseTogXCJyb2JvdG9cIjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNjJweDtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDMycHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgfVxufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBoMyB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICB9XG59XG5cbnAge1xuICBmb250LXNpemU6IDExcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgcCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICBoMSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBnYXA6IDAuNXJlbTtcbiAgfVxufVxuLmJ0biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMnJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcInJvYm90b1wiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5idG4ucHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjRkE5QTEwLCA1MCUsICNFQjM3MzggOTAlLCAjRUIzNzM4IDEwMCUpO1xufVxuLmJ0bjpoYXMoaW1nKSB7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG59XG4uYnRuOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5idG46aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuc2VjdGlvbiB7XG4gIHBhZGRpbmctdG9wOiAycmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIHNlY3Rpb24ge1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgc2VjdGlvbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XG4gIH1cbn1cbnNlY3Rpb24ubm8tZ3V0dGVycyB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cblxuZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuc2VjdGlvbiNwcmVzZW50YXRpb24ge1xuICBwYWRkaW5nOiAwO1xufVxuc2VjdGlvbiNwcmVzZW50YXRpb24gI2JyYW5kaW5nIHtcbiAgcGFkZGluZzogM3JlbSAwO1xuICB3aWR0aDogMTAwJTtcbn1cbnNlY3Rpb24jcHJlc2VudGF0aW9uICNicmFuZGluZyBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbnNlY3Rpb24jcHJlc2VudGF0aW9uICNicmFuZGluZyAud2FsbGFydCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5zZWN0aW9uI3ByZXNlbnRhdGlvbiAjYnJhbmRpbmcgLm1hdHJvZ25lIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwicm9ib3RvXCI7XG59XG5zZWN0aW9uI3ByZXNlbnRhdGlvbiAjYnJhbmRpbmcgLm1hdHJvZ25lIGRpdi5kaXNwby1ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbnNlY3Rpb24jcHJlc2VudGF0aW9uICNicmFuZGluZyAubWF0cm9nbmUgZGl2LmRpc3BvLWJvZHkgZGl2LmRpc3BvLXN0YXR1cyB7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuc2VjdGlvbiNwcmVzZW50YXRpb24gI2JyYW5kaW5nIC5tYXRyb2duZSBkaXYuZGlzcG8tYm9keSBkaXYuZGlzcG8tc3RhdHVzLnllcyB7XG4gIGJhY2tncm91bmQ6ICM1NkI1M0U7XG59XG5zZWN0aW9uI3ByZXNlbnRhdGlvbiAjYnJhbmRpbmcgLm1hdHJvZ25lIGRpdi5kaXNwby1ib2R5IGRpdi5kaXNwby1zdGF0dXMubm8ge1xuICBiYWNrZ3JvdW5kOiAjQTcwRTBFO1xufVxuc2VjdGlvbiNwcmVzZW50YXRpb24gI3B1cnBvc2Uge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgI0ZBOUExMCwgNTAlLCAjRUIzNzM4IDkwJSwgI0VCMzczOCAxMDAlKTtcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgc2VjdGlvbiNwcmVzZW50YXRpb24gI3B1cnBvc2Uge1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgc2VjdGlvbiNwcmVzZW50YXRpb24gI3B1cnBvc2Uge1xuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xuICB9XG59XG5zZWN0aW9uI3ByZXNlbnRhdGlvbiAjcHVycG9zZSBpbWcge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGFuaW1hdGlvbjogbnVhZ2VGbG90dGFudCA2cyBjdWJpYy1iZXppZXIoMC40NSwgMC4wNSwgMC41NSwgMC45NSkgaW5maW5pdGU7XG59XG5zZWN0aW9uI3ByZXNlbnRhdGlvbiAjcHVycG9zZSA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgc2VjdGlvbiNwcmVzZW50YXRpb24gI2JyYW5kaW5nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBzZWN0aW9uI3ByZXNlbnRhdGlvbiAjYnJhbmRpbmcgKiB7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICBzZWN0aW9uI3ByZXNlbnRhdGlvbiAjYnJhbmRpbmcgLndhbGxhcnQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAwO1xuICAgIHRvcDogLTE3NXB4O1xuICAgIGxlZnQ6IC0xNTBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICBzZWN0aW9uI3ByZXNlbnRhdGlvbiAjYnJhbmRpbmcge1xuICAgIHBhZGRpbmc6IDdyZW0gMDtcbiAgfVxuICBzZWN0aW9uI3ByZXNlbnRhdGlvbiAjYnJhbmRpbmcgPiBkaXYge1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cbn1cblxuQGtleWZyYW1lcyBudWFnZUZsb3R0YW50IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcbiAgfVxuICAyNSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDRweCwgLTZweCk7IC8qIMOXMiAqL1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTRweCwgNHB4KTsgLyogw5cyICovXG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIC0ycHgpOyAvKiDDlzIgKi9cbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XG4gIH1cbn1cbnNlY3Rpb24jc2VydmljZXMgaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5zZWN0aW9uI3NlcnZpY2VzIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbjogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbHVtbi1nYXA6IDEwcHg7XG4gIHJvdy1nYXA6IDUwcHg7XG59XG5zZWN0aW9uI3NlcnZpY2VzIHVsIGxpIHtcbiAgd2lkdGg6IGNhbGMoNTAlIC0gNXB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGdhcDogMTBweDtcbn1cbnNlY3Rpb24jc2VydmljZXMgdWwgbGkgcCB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbnNlY3Rpb24jc2VydmljZXMgdWwgbGkgPiBkaXY6aGFzKGltZykge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgI0ZBOUExMCwgNTAlLCAjRUIzNzM4IDkwJSwgI0VCMzczOCAxMDAlKTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbnNlY3Rpb24jc2VydmljZXMgdWwgbGkgPiBkaXY6aGFzKGltZykgaW1nIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbn1cbnNlY3Rpb24jc2VydmljZXMgdWwgbGk6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgc2VjdGlvbiNzZXJ2aWNlcyB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuICBzZWN0aW9uI3NlcnZpY2VzIHVsIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgc2VjdGlvbiNzZXJ2aWNlcyB1bCBsaSB7XG4gICAgd2lkdGg6IGNhbGMoMzMuMzMlIC0gMTBweCk7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIHNlY3Rpb24jc2VydmljZXMgdWwgbGk6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIH1cbiAgc2VjdGlvbiNzZXJ2aWNlcyB1bCBsaSBoMywgc2VjdGlvbiNzZXJ2aWNlcyB1bCBsaSBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgc2VjdGlvbiNzZXJ2aWNlcyB1bCBsaSA+IGRpdjpoYXMoaW1nKSB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuICBzZWN0aW9uI3NlcnZpY2VzIHVsIGxpID4gZGl2OmhhcyhpbWcpIGltZyB7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIHdpZHRoOiA0OHB4O1xuICB9XG59XG4vKiBBIHBhcnRpciBkZSBtZCAqL1xuLyogQSBwYXJ0aXIgZGUgbGcgKi9cbi8qIEEgcGFydGlyIGRlIHhsICovXG5zZWN0aW9uI3dvcmtpbmdfd2l0aF9tZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAzNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLyogQ29pbnMgZHUgY2VyY2xlICovXG59XG5zZWN0aW9uI3dvcmtpbmdfd2l0aF9tZSAuY2VyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICBnYXA6IDFyZW07XG4gIGxlZnQ6IC0xNTBweDtcbiAgdG9wOiA1MCU7XG4gIGJvdHRvbTogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cbnNlY3Rpb24jd29ya2luZ193aXRoX21lIC5pbm5lci1jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkUzMDM1O1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIHotaW5kZXg6IDI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgdG9wOiBjYWxjKDUwJSAtIDUwcHgpO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDUwcHgpO1xufVxuc2VjdGlvbiN3b3JraW5nX3dpdGhfbWUgLmNlcmNsZSAuaW1nLWhpdmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuc2VjdGlvbiN3b3JraW5nX3dpdGhfbWUgLmNlcmNsZSAuaW1nLWhpdmVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG5zZWN0aW9uI3dvcmtpbmdfd2l0aF9tZSAuY2VyY2xlIC5pbWctaGl2ZXI6bnRoLWNoaWxkKDIpIHtcbiAgZ3JpZC1jb2x1bW46IDE7XG4gIGdyaWQtcm93OiAxO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAwJTtcbn1cbnNlY3Rpb24jd29ya2luZ193aXRoX21lIC5jZXJjbGUgLmltZy1oaXZlcjpudGgtY2hpbGQoMik6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZykgc2NhbGUoMS41KTtcbn1cbnNlY3Rpb24jd29ya2luZ193aXRoX21lIC5jZXJjbGUgLmltZy1oaXZlcjpudGgtY2hpbGQoMykge1xuICBncmlkLWNvbHVtbjogMjtcbiAgZ3JpZC1yb3c6IDE7XG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUpO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTAwJTtcbn1cbnNlY3Rpb24jd29ya2luZ193aXRoX21lIC5jZXJjbGUgLmltZy1oaXZlcjpudGgtY2hpbGQoMyk6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgxLjUpO1xufVxuc2VjdGlvbiN3b3JraW5nX3dpdGhfbWUgLmNlcmNsZSAuaW1nLWhpdmVyOm50aC1jaGlsZCg0KSB7XG4gIGdyaWQtY29sdW1uOiAxO1xuICBncmlkLXJvdzogMjtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSk7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwMCU7XG59XG5zZWN0aW9uI3dvcmtpbmdfd2l0aF9tZSAuY2VyY2xlIC5pbWctaGl2ZXI6bnRoLWNoaWxkKDQpOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0yMjVkZWcpIHNjYWxlKDEuNSk7XG59XG5zZWN0aW9uI3dvcmtpbmdfd2l0aF9tZSAuY2VyY2xlIC5pbWctaGl2ZXI6bnRoLWNoaWxkKDUpIHtcbiAgZ3JpZC1jb2x1bW46IDI7XG4gIGdyaWQtcm93OiAyO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwMCU7XG59XG5zZWN0aW9uI3dvcmtpbmdfd2l0aF9tZSAuY2VyY2xlIC5pbWctaGl2ZXI6bnRoLWNoaWxkKDUpOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSBzY2FsZSgxLjUpO1xufVxuc2VjdGlvbiN3b3JraW5nX3dpdGhfbWUgPiBkaXYge1xuICBmbGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5zZWN0aW9uI3dvcmtpbmdfd2l0aF9tZSB1bC5zdGVwcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMzUlO1xuICBhbGlnbi1pdGVtczogYXV0bztcbn1cbnNlY3Rpb24jd29ya2luZ193aXRoX21lIHVsLnN0ZXBzIGxpIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5zZWN0aW9uI3dvcmtpbmdfd2l0aF9tZSB1bC5zdGVwcyBsaS5jdXJyZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5zZWN0aW9uI3dvcmtpbmdfd2l0aF9tZSAuc3RlcHMtbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGdhcDogMC41cmVtO1xufVxuc2VjdGlvbiN3b3JraW5nX3dpdGhfbWUgLnN0ZXBzLW5hdiBidXR0b24gaW1nIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cbnNlY3Rpb24jd29ya2luZ193aXRoX21lIC5zdGVwcy1uYXYgYnV0dG9uLnByZXZpb3VzIHtcbiAgb3BhY2l0eTogMTtcbn1cbnNlY3Rpb24jd29ya2luZ193aXRoX21lIC5zdGVwcy1uYXYgYnV0dG9uLnByZXZpb3VzOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBzZWN0aW9uI3dvcmtpbmdfd2l0aF9tZSAuY2VyY2xlIHtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBnYXA6IDEuMjVyZW07XG4gICAgbGVmdDogLTI1MHB4O1xuICB9XG4gIHNlY3Rpb24jd29ya2luZ193aXRoX21lIC5pbm5lci1jaXJjbGUge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIHRvcDogY2FsYyg1MCUgLSAxMDBweCk7XG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMDBweCk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICBzZWN0aW9uI3dvcmtpbmdfd2l0aF9tZSB7XG4gICAgcGFkZGluZy1yaWdodDogM3JlbTtcbiAgICBwYWRkaW5nLXRvcDogM3JlbTtcbiAgfVxuICBzZWN0aW9uI3dvcmtpbmdfd2l0aF9tZSAuY2VyY2xlIHtcbiAgICB3aWR0aDogMTAwMHB4O1xuICAgIGhlaWdodDogMTAwMHB4O1xuICAgIGdhcDogMnJlbTtcbiAgICBsZWZ0OiAtNTUwcHg7XG4gIH1cbiAgc2VjdGlvbiN3b3JraW5nX3dpdGhfbWUgLmlubmVyLWNpcmNsZSB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDEwMHB4KTtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwMHB4KTtcbiAgfVxuICBzZWN0aW9uI3dvcmtpbmdfd2l0aF9tZSBoMiB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIH1cbiAgc2VjdGlvbiN3b3JraW5nX3dpdGhfbWUgPiBkaXYge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgc2VjdGlvbiN3b3JraW5nX3dpdGhfbWUgLmNlcmNsZSB7XG4gICAgd2lkdGg6IDE0MDBweDtcbiAgICBoZWlnaHQ6IDE0MDBweDtcbiAgICBnYXA6IDJyZW07XG4gICAgbGVmdDogLTc1MHB4O1xuICB9XG4gIHNlY3Rpb24jd29ya2luZ193aXRoX21lIC5pbm5lci1jaXJjbGUge1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIHRvcDogY2FsYyg1MCUgLSAyMDBweCk7XG4gICAgbGVmdDogY2FsYyg1MCUgLSAyMDBweCk7XG4gIH1cbiAgc2VjdGlvbiN3b3JraW5nX3dpdGhfbWUgaDIge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcmVtO1xuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xuICB9XG4gIHNlY3Rpb24jd29ya2luZ193aXRoX21lID4gZGl2IHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XG4gIH1cbn1cbnNlY3Rpb24jcHJpY2VfcXVlc3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMxQjFEMjA7XG4gIGdhcDogMXJlbTtcbn1cbnNlY3Rpb24jcHJpY2VfcXVlc3Rpb24gaDIge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5zZWN0aW9uI2NvbnRhY3RfbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUIxRDIwO1xufVxuc2VjdGlvbiNjb250YWN0X21lIGZvcm0gLmZvcm0tZWxlbWVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuc2VjdGlvbiNjb250YWN0X21lIGZvcm0gLmZvcm0tZWxlbWVudCBsYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwicm9ib3RvXCI7XG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG59XG5zZWN0aW9uI2NvbnRhY3RfbWUgZm9ybSAuZm9ybS1lbGVtZW50IGlucHV0LCBzZWN0aW9uI2NvbnRhY3RfbWUgZm9ybSAuZm9ybS1lbGVtZW50IHRleHRhcmVhIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgZm9udC1mYW1pbHk6IFwicm9ib3RvXCI7XG59XG5zZWN0aW9uI2NvbnRhY3RfbWUgZm9ybSAuZm9ybS1lbGVtZW50IHRleHRhcmVhIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDNyZW07XG59XG5zZWN0aW9uI2NvbnRhY3RfbWUgZm9ybSAuZm9ybS1lbGVtZW50IC5tZXNzYWdlLWhlbHAge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcInJvYm90b1wiO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbn1cbnNlY3Rpb24jY29udGFjdF9tZSBmb3JtIGJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgc2VjdGlvbiNjb250YWN0X21lIGZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAycmVtO1xuICB9XG4gIHNlY3Rpb24jY29udGFjdF9tZSBmb3JtIC5jb2x1bW46bnRoLWNoaWxkKDEpIHtcbiAgICB3aWR0aDogY2FsYygyNSUgLSAxcmVtKTtcbiAgfVxuICBzZWN0aW9uI2NvbnRhY3RfbWUgZm9ybSAuY29sdW1uOm50aC1jaGlsZCgyKSB7XG4gICAgd2lkdGg6IGNhbGMoNzUlIC0gMXJlbSk7XG4gIH1cbn1cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmh0bWwsIGJvZHkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkUzMDM1O1xufVxuXG5odG1sIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5odG1sOmhhcyhuYXYuZml4ZWQpIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9jb21wb25lbnRzL25hdi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvY29tcG9uZW50cy9mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvbWl4aW5zL2ZvbnQtc2l6ZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL2NvbXBvbmVudHMvYnV0dG9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9jb21wb25lbnRzL3NlY3Rpb24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL21peGlucy9ndXR0ZXJzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9jb21wb25lbnRzL2Zvb3Rlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3Mvc2VjdGlvbnMvcHJlc2VudGF0aW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9zZWN0aW9ucy9zZXJ2aWNlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3Mvc2VjdGlvbnMvd29ya2luZ193aXRoX21lLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9zZWN0aW9ucy9wcmljZV9xdWVzdGlvbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3Mvc2VjdGlvbnMvY29udGFjdF9tZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0FoQixpQkFBQTtBQU9BLFdBQUE7QUFhQSxZQUFBO0FBR0EsVUFBQTtBQStCQSxZQUFBO0FDcERBO0VBQ0kseUJEVU07QURMVjtBRUhJO0VBc0VJLHlCRDlERTtFQytERixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRmhFUjtBRVJRO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBRlVaO0FFUlk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EseUJETk47QURnQlY7QUVSWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EseUJEZk47RUNnQk0sZUFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBRlVoQjtBRVBZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FGU2hCO0FFUGdCO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBRlNwQjtBRUpnQjtFQUNJLHFCQUFBO0FGTXBCO0FFRm9CO0VBQ0kseUNBQUE7QUZJeEI7QUVEb0I7RUFDSSxVQUFBO0VBQ0EsMkJBQUE7QUZHeEI7QUVBb0I7RUFDSSwyQ0FBQTtBRkV4QjtBRVNRO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0FGUFo7QUVRWTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUZOaEI7QUVPZ0I7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBRkxw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O0VXdmVFO0lBQ0Usb0JBQUE7SUFDQSxvQkFBQTtJQUNBLGlCQUFBO0VYeWVKO0VXdGVFO0lBQ0UsVUFBQTtJQUNBLG9CQUFBO0lBQ0EsbUJBQUE7RVh3ZUo7QUFDRjtBWTF0QkE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJYSU07RVdITixTQUFBO0FaNHRCSjtBWTF0Qkk7RUFDSSxnQkFBQTtBWjR0QlI7O0FhbnVCQTtFQUNJLHlCWk1NO0FEZ3VCVjtBYW51QlE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FicXVCWjtBYW51Qlk7RUFDSSxZQUFBO0VBQ0EscUJaVUM7RVlURCxzQkFBQTtBYnF1QmhCO0FhbHVCWTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCWkNDO0FEbXVCakI7QWFqdUJZO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0FibXVCaEI7QWFodUJZO0VBQ0ksWUFBQTtFQUNBLHFCWlRDO0VZVUQsaUJBQUE7RUFDQSxtQkFBQTtBYmt1QmhCO0FhOXRCUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QWJndUJaOztBYTF0QkE7RUFFUTtJQUNJLGFBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0EsU0F2REg7RWJteEJQO0VhMXRCVTtJQUNJLHVCQUFBO0ViNHRCZDtFYTF0QlU7SUFDSSx1QkFBQTtFYjR0QmQ7QUFDRjtBQTl3QkE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQWd4Qko7O0FBOXdCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJDVEc7QUQweEJQOztBQTl3QkE7RUFDSSx1QkFBQTtBQWl4Qko7QUFoeEJJO0VBQ0ksZ0JBQUE7QUFreEJSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgJ3ZhcmlhYmxlcycgYXMgKjtcXHJcXG5cXHJcXG5AdXNlICdjb21wb25lbnRzL25hdic7XFxyXFxuQHVzZSAnY29tcG9uZW50cy9mb250cyc7XFxyXFxuQHVzZSAnY29tcG9uZW50cy9idXR0b24nO1xcclxcbkB1c2UgJ2NvbXBvbmVudHMvc2VjdGlvbic7XFxyXFxuQHVzZSAnY29tcG9uZW50cy9mb290ZXInO1xcclxcblxcclxcbkB1c2UgJ3NlY3Rpb25zL3ByZXNlbnRhdGlvbic7XFxyXFxuQHVzZSAnc2VjdGlvbnMvc2VydmljZXMnO1xcclxcbkB1c2UgJ3NlY3Rpb25zL3dvcmtpbmdfd2l0aF9tZSc7XFxyXFxuQHVzZSAnc2VjdGlvbnMvcHJpY2VfcXVlc3Rpb24nO1xcclxcbkB1c2UgJ3NlY3Rpb25zL2NvbnRhY3RfbWUnO1xcclxcblxcclxcbip7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuaHRtbCwgYm9keXtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcms7XFxyXFxufVxcclxcblxcclxcbmh0bWx7XFxyXFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbiAgICAmOmhhcyhuYXYuZml4ZWQpe1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNzVweDtcXHJcXG4gICAgfVxcclxcbn1cIixcIi8qIE1lZGlhIHNjcmVlbiAqL1xcclxcbiRzbS1zY3JlZW46IDU3NnB4O1xcclxcbiRtZC1zY3JlZW46IDc2OHB4O1xcclxcbiRsZy1zY3JlZW46IDk5MnB4O1xcclxcbiR4bC1zY3JlZW46IDEyMDBweDtcXHJcXG4keHhsLXNjcmVlbjogMTQwMHB4O1xcclxcblxcclxcbi8qIGNvbG9ycyAqL1xcclxcbiRwcmltYXJ5LTE6ICNGQTlBMTA7XFxyXFxuJHByaW1hcnktMjogI0VCMzczODtcXHJcXG4kc2Vjb25kYXJ5LTE6ICMwMEUxQ0Q7XFxyXFxuJHNlY29uZGFyeS0yOiAjNkUzOUQ1O1xcclxcbiRkYXJrOiAjMkUzMDM1O1xcclxcbiRkYXJrZXN0OiAjMUIxRDIwO1xcclxcbiRzdWNjZXNzOiAjNTZCNTNFO1xcclxcbiRlcnJvcjogI0E3MEUwRTtcXHJcXG5cXHJcXG4kZGVncmFkZS1wcmltYXJ5OiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgJHByaW1hcnktMSwgNTAlLCAkcHJpbWFyeS0yIDkwJSwgJHByaW1hcnktMiAxMDAlKTtcXHJcXG4kZGVncmFkZS1zZWNvbmRhcnk6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAkc2Vjb25kYXJ5LTEsIDQwJSwgJHNlY29uZGFyeS0yIDYwJSwgJHNlY29uZGFyeS0yIDEwMCUpO1xcclxcblxcclxcbi8qIFNlY3Rpb24gKi8gXFxyXFxuJG1hcmdpbi1zZWN0aW9uOiAzcmVtO1xcclxcblxcclxcbi8qIGZvbnRzICovXFxyXFxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xcclxcbiRmb250LXdlaWdodC1ib2xkOiA3MDA7XFxyXFxuJG1haW4tZm9udDogXFxcImpvbWh1cmlhXFxcIjtcXHJcXG4kc2Vjb25kYXJ5LWZvbnQ6IFxcXCJyb2JvdG9cXFwiO1xcclxcblxcclxcbiRoMS1mb250LXNpemU6IChcXHJcXG4gICRzbS1zY3JlZW46IDYycHgsXFxyXFxuKTs7XFxyXFxuJGgyLWZvbnQtc2l6ZTogKFxcclxcbiAgJHNtLXNjcmVlbjogMzJweCxcXHJcXG4gICRtZC1zY3JlZW46IDQ4cHgsXFxyXFxuKTtcXHJcXG4kaDMtZm9udC1zaXplOiAoXFxyXFxuICAkc20tc2NyZWVuOiAyNHB4LFxcclxcbiAgJG1kLXNjcmVlbjogMzJweCxcXHJcXG4pO1xcclxcbiRwLWZvbnQtc2l6ZTogKFxcclxcbiAgJHNtLXNjcmVlbjogMTFweCxcXHJcXG4gICRtZC1zY3JlZW46IDEzcHgsXFxyXFxuICAkbGctc2NyZWVuOiAxNnB4LFxcclxcbik7XFxyXFxuJGZvbnQtc2l6ZXM6IChcXHJcXG4gIGgxOiAkaDEtZm9udC1zaXplLFxcclxcbiAgaDI6ICRoMi1mb250LXNpemUsXFxyXFxuICBoMzogJGgzLWZvbnQtc2l6ZSxcXHJcXG4gIHA6ICRwLWZvbnQtc2l6ZVxcclxcbik7XFxyXFxuXFxyXFxuJGgyLW1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuXFxyXFxuLyogR3V0dGVycyAqL1xcclxcbiRndXR0ZXJzLXNtOiAxcmVtO1xcclxcbiRndXR0ZXJzLW1kOiAycmVtO1xcclxcbiRndXR0ZXJzLWxnOiAzcmVtO1xcclxcblxcclxcbiRzZWN0aW9uLXBhZGRpbmc6IDJyZW07XCIsXCJAdXNlICcuLi92YXJpYWJsZXMnIGFzICo7XFxyXFxuXFxyXFxuaGVhZGVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya2VzdDtcXHJcXG5cXHJcXG4gICAgbmF2e1xcclxcbiAgICAgICAgJiNuYXZfcmVzcG9uc2l2ZXtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgICAgICAgICBkaXZ7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmtlc3Q7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIHVse1xcclxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgICAgIHRvcDogLTIwMCU7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmtlc3Q7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdG9wIC4zcyBlYXNlO1xcclxcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAwO1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAjYnVyZ2VyLW1lbnV7XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICA+IGRpdntcXHJcXG4gICAgICAgICAgICAgICAgICAgIGFsbDogaW5oZXJpdDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogM3B4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAmLnNob3dlZHtcXHJcXG4gICAgICAgICAgICAgICAgdWx7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0b3A6IGNhbGMoMTAwJSArIDFweCk7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgI2J1cmdlci1tZW51e1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGl2Om50aC1jaGlsZCgxKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpIHJvdGF0ZSg0NWRlZyk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICBkaXY6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgZGl2Om50aC1jaGlsZCgzKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KSByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmtlc3Q7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgdWx7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgICAgICAgICAgbGkge1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNXJlbSAwO1xcclxcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIGF7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICYuZml4ZWR7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICAgICAgei1pbmRleDogMjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogJGxnLXNjcmVlbil7XFxyXFxuICAgIGhlYWRlciBuYXZ7XFxyXFxuICAgICAgICAmI25hdl9yZXNwb25zaXZle1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcclxcblxcclxcbiAgICAgICAgI21haW4tbG9nb3tcXHJcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICB1bHtcXHJcXG4gICAgICAgICAgICBnYXA6IDFyZW07XFxyXFxuICAgICAgICAgICAgYXtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgZWFzZTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgJjpob3ZlcntcXHJcXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC43O1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICYucnN7XFxyXFxuICAgICAgICAgICAgICAgIGdhcDogLjVyZW07XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2U7XFxyXFxuICAgICAgICAgICAgICAgIGxpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1MCUpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgZWFzZTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgID4gZGl2e1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmLnJlYWR5IHtcXHJcXG4gICAgICAgICAgICB1bC5ycyB7XFxyXFxuICAgICAgICAgICAgICAgIGxpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmFsbEJvdW5jZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogOTAwbXM7XFxyXFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjI4LC44NCwuNDIsMSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoOyBcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDEyIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxpOm50aC1jaGlsZCgjeyRpfSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogKCRpIC0gMSkgKiAwLjFzO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFsbEJvdW5jZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTUwJSk7XFxyXFxuICB9XFxyXFxuICAyMCUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpOyBcXHJcXG4gIH1cXHJcXG4gIDYwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcclxcbiAgfVxcclxcbn1cIixcIkB1c2UgJy4uL3ZhcmlhYmxlcycgYXMgKjtcXHJcXG5AdXNlICcuLi9taXhpbnMvZm9udC1zaXplcy5zY3NzJyBhcyAqO1xcclxcblxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJG1haW4tZm9udDtcXHJcXG4gICAgc3JjOiB1cmwoXFxcIi4vLi4vZm9udHMvSm9taHVyaWEudHRmXFxcIik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcInJvYm90b1xcXCI7XFxyXFxuICAgIHNyYzogdXJsKFxcXCIuLy4uL2ZvbnRzL1JvYm90by50dGZcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuaDEsIGgyLCBoM3tcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRtYWluLWZvbnQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbmgxe1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcbiAgICBzcGFue1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDAuNjU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgc3BhbjpudGgtY2hpbGQoMSl7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAkZGVncmFkZS1wcmltYXJ5O1xcclxcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIHNwYW46bnRoLWNoaWxkKDIpe1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogJGRlZ3JhZGUtc2Vjb25kYXJ5O1xcclxcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuaDJ7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAwLjY1O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgJi5uby1tYntcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuaDN7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDAuNjU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5we1xcclxcbiAgICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbkBlYWNoICRlbGVtZW50LCAkc2l6ZXMgaW4gJGZvbnQtc2l6ZXMge1xcclxcbiAgI3skZWxlbWVudH0ge1xcclxcbiAgICBAaW5jbHVkZSByZXNwb25zaXZlLWZvbnQtc2l6ZXMoJHNpemVzKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6ICRsZy1zY3JlZW4pe1xcclxcbiAgICBoMXtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICBnYXA6IC41cmVtO1xcclxcbiAgICB9XFxyXFxufVwiLFwiQG1peGluIHJlc3BvbnNpdmUtZm9udC1zaXplcygkc2l6ZXMpIHtcXHJcXG4gICRwcmV2LXNpemU6IG51bGw7XFxyXFxuICAkZmlyc3Q6IHRydWU7XFxyXFxuXFxyXFxuICBAZWFjaCAkYnJlYWtwb2ludCwgJHNpemUgaW4gJHNpemVzIHtcXHJcXG4gICAgQGlmICRmaXJzdCB7XFxyXFxuICAgICAgLy8gVmFsZXVyIHBhciBkw6lmYXV0IChzYW5zIG1lZGlhIHF1ZXJ5KVxcclxcbiAgICAgIGZvbnQtc2l6ZTogJHNpemU7XFxyXFxuICAgICAgJGZpcnN0OiBmYWxzZTtcXHJcXG4gICAgfSBAZWxzZSBpZiAkc2l6ZSAhPSAkcHJldi1zaXplIHtcXHJcXG4gICAgICAvLyBNZWRpYSBxdWVyeSBzZXVsZW1lbnQgc2kgbGEgdGFpbGxlIGNoYW5nZVxcclxcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAjeyRicmVha3BvaW50fSkge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAkc2l6ZTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgJHByZXYtc2l6ZTogJHNpemU7XFxyXFxuICB9XFxyXFxufVwiLFwiQHVzZSAnLi4vdmFyaWFibGVzJyBhcyAqO1xcclxcblxcclxcbi5idG57XFxyXFxuICAgICYucHJpbWFyeXtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICRkZWdyYWRlLXByaW1hcnk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyBlYXNlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nOiAuNzVyZW0gMnJlbTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAkc2Vjb25kYXJ5LWZvbnQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAmOmhhcyhpbWcpe1xcclxcbiAgICAgICAgcGFkZGluZzogLjc1cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6ZGlzYWJsZWR7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRsZy1zY3JlZW4pe1xcclxcbiAgICAgICAgJjpob3ZlcntcXHJcXG4gICAgICAgICAgICBvcGFjaXR5OiAuODtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsXCJAdXNlICcuLi92YXJpYWJsZXMnIGFzICo7IFxcclxcbkB1c2UgJy4uL21peGlucy9ndXR0ZXJzJyBhcyAqO1xcclxcblxcclxcbnNlY3Rpb257XFxyXFxuICAgIHBhZGRpbmctdG9wOiAkc2VjdGlvbi1wYWRkaW5nO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogJHNlY3Rpb24tcGFkZGluZztcXHJcXG4gICAgQGluY2x1ZGUgYXBwbHktbWl4aW5zKCk7XFxyXFxuXFxyXFxuICAgICYubm8tZ3V0dGVyc3tcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxyXFxuICAgIH1cXHJcXG59XCIsXCJAdXNlICcuLi92YXJpYWJsZXMnIGFzICo7IFxcclxcblxcclxcbkBtaXhpbiBhcHBseS1taXhpbnMoKSB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogJGd1dHRlcnMtc207XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6ICRndXR0ZXJzLXNtO1xcclxcbiAgICBcXHJcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtZC1zY3JlZW4pe1xcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAkZ3V0dGVycy1tZDtcXHJcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6ICRndXR0ZXJzLW1kO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbGctc2NyZWVuKXtcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogJGd1dHRlcnMtbGc7XFxyXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAkZ3V0dGVycy1sZztcXHJcXG4gICAgfVxcclxcbn1cIixcImZvb3RlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gICAgXFxyXFxufVwiLFwiQHVzZSAnLi4vdmFyaWFibGVzJyBhcyAqO1xcclxcbkB1c2UgJy4uL21peGlucy9ndXR0ZXJzJyBhcyAqO1xcclxcblxcclxcbnNlY3Rpb24jcHJlc2VudGF0aW9ue1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gICNicmFuZGluZ3tcXHJcXG4gICAgcGFkZGluZzogM3JlbSAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgcHtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC53YWxsYXJ0e1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1hdHJvZ25le1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udDtcXHJcXG4gICAgICBkaXYuZGlzcG8tYm9keXtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBkaXYuZGlzcG8tc3RhdHVze1xcclxcbiAgICAgICAgICBoZWlnaHQ6IDE1cHg7XFxyXFxuICAgICAgICAgIHdpZHRoOiAxNXB4O1xcclxcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG5cXHJcXG4gICAgICAgICAgJi55ZXMge1xcclxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDokc3VjY2VzcztcXHJcXG4gICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAmLm5ve1xcclxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDokZXJyb3I7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gIH1cXHJcXG4gICNwdXJwb3Nle1xcclxcbiAgICBiYWNrZ3JvdW5kOiAkZGVncmFkZS1wcmltYXJ5O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIEBpbmNsdWRlIGFwcGx5LW1peGlucygpO1xcclxcblxcclxcbiAgICBpbWd7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgICAgYW5pbWF0aW9uOiBudWFnZUZsb3R0YW50IDZzIGN1YmljLWJlemllcigwLjQ1LCAwLjA1LCAwLjU1LCAwLjk1KSBpbmZpbml0ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICA+IGRpdntcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgZ2FwOiAxcmVtO1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICAgXFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogJG1kLXNjcmVlbil7XFxyXFxuICAgICNicmFuZGluZ3tcXHJcXG4gICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgIFxcclxcbiAgICAgICp7XFxyXFxuICAgICAgICB6LWluZGV4OiAxO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAud2FsbGFydHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XFxyXFxuICAgICAgICB6LWluZGV4OiAwO1xcclxcbiAgICAgICAgdG9wOi0xNzVweDtcXHJcXG4gICAgICAgIGxlZnQ6LTE1MHB4O1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogJGxnLXNjcmVlbil7XFxyXFxuICAgICNicmFuZGluZ3tcXHJcXG4gICAgICBwYWRkaW5nOiA3cmVtIDA7XFxyXFxuICAgICAgPiBkaXYge1xcclxcbiAgICAgICAgd2lkdGg6IDc1JTtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn0gXFxyXFxuXFxyXFxuQGtleWZyYW1lcyBudWFnZUZsb3R0YW50IHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xcclxcbiAgfVxcclxcbiAgMjUlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNHB4LCAtNnB4KTsgLyogw5cyICovXFxyXFxuICB9XFxyXFxuICA1MCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LCA0cHgpOyAvKiDDlzIgKi9cXHJcXG4gIH1cXHJcXG4gIDc1JSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgLTJweCk7IC8qIMOXMiAqL1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXCIsXCJAdXNlICcuLi92YXJpYWJsZXMnIGFzICo7IFxcclxcblxcclxcbiRnYXAtbGlzdC14OiAxMHB4O1xcclxcbiRnYXAtbGlzdC15OiA1MHB4O1xcclxcblxcclxcbiRyZXNwb25zaXZlLWljb24tc2l6ZTogMjRweDtcXHJcXG4kcmVzcG9uc2l2ZS1pdGVtLXNpemU6IDUwJTtcXHJcXG5cXHJcXG4kbGctaWNvbi1zaXplOiA0OHB4O1xcclxcbiRsZy1pdGVtLXNpemU6IDMzLjMzJTtcXHJcXG5cXHJcXG5zZWN0aW9uI3NlcnZpY2Vze1xcclxcbiAgICBoMntcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206ICRoMi1tYXJnaW4tYm90dG9tO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHVse1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBjb2x1bW4tZ2FwOiAkZ2FwLWxpc3QteDtcXHJcXG4gICAgICAgIHJvdy1nYXA6ICRnYXAtbGlzdC15O1xcclxcblxcclxcbiAgICAgICAgbGl7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoJHJlc3BvbnNpdmUtaXRlbS1zaXplIC0gKCRnYXAtbGlzdC14LzIpKTtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgICAgICAgICBnYXA6IDEwcHg7XFxyXFxuICAgICAgICAgICAgXFxyXFxuXFxyXFxuICAgICAgICAgICAgcHtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICA+IGRpdjpoYXMoaW1nKXtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGRlZ3JhZGUtcHJpbWFyeTtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICBpbWd7XFxyXFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICRyZXNwb25zaXZlLWljb24tc2l6ZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAkcmVzcG9uc2l2ZS1pY29uLXNpemU7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpudGgtY2hpbGQoZXZlbil7XFxyXFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6ICRsZy1zY3JlZW4pe1xcclxcbiAgICBzZWN0aW9uI3NlcnZpY2VzIHtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgICAgICB1bCB7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGxpIHtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoJGxnLWl0ZW0tc2l6ZSAtICRnYXAtbGlzdC14KTtcXHJcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcclxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoZXZlbil7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgaDMsIHB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgID4gZGl2OmhhcyhpbWcpe1xcclxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGltZ3tcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICRsZy1pY29uLXNpemU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICRsZy1pY29uLXNpemU7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XCIsXCJAdXNlICcuLi92YXJpYWJsZXMnIGFzICo7XFxyXFxuXFxyXFxuJHdpZHRoSW5uZXJDaXJjbGU6IDEwMHB4OyAgIC8vIENlcmNsZSBpbnRlcm5lXFxyXFxuJGNpcmNsZTogMjUwcHg7ICAgICAgICAgICAgIC8vIENlcmNsZSBwcmluY2lwYWxcXHJcXG4kYm9yZGVyV2lkdGg6IDFyZW07ICAgICAgICAgLy8gVGFpbGxlIGRlIGxhIGJvcmR1cmUgZW50cmUgbGVzIGltYWdlc1xcclxcblxcclxcbi8qIEEgcGFydGlyIGRlIG1kICovXFxyXFxuJHdpZHRoSW5uZXJDaXJjbGUtbWQ6IDIwMHB4OyAgIC8vIENlcmNsZSBpbnRlcm5lXFxyXFxuJGNpcmNsZS1tZDogNTAwcHg7ICAgICAgICAgICAgIC8vIENlcmNsZSBwcmluY2lwYWxcXHJcXG4kYm9yZGVyV2lkdGgtbWQ6IDEuMjVyZW07ICAgICAgICAgLy8gVGFpbGxlIGRlIGxhIGJvcmR1cmUgZW50cmUgbGVzIGltYWdlc1xcclxcblxcclxcbi8qIEEgcGFydGlyIGRlIGxnICovXFxyXFxuJHdpZHRoSW5uZXJDaXJjbGUtbGc6IDIwMHB4OyAgIC8vIENlcmNsZSBpbnRlcm5lXFxyXFxuJGNpcmNsZS1sZzogMTAwMHB4OyAgICAgICAgICAgICAvLyBDZXJjbGUgcHJpbmNpcGFsXFxyXFxuJGJvcmRlcldpZHRoLWxnOiAycmVtOyAgICAgICAgIC8vIFRhaWxsZSBkZSBsYSBib3JkdXJlIGVudHJlIGxlcyBpbWFnZXNcXHJcXG5cXHJcXG4vKiBBIHBhcnRpciBkZSB4bCAqL1xcclxcbiR3aWR0aElubmVyQ2lyY2xlLXhsOiA0MDBweDsgICAvLyBDZXJjbGUgaW50ZXJuZVxcclxcbiRjaXJjbGUteGw6IDE0MDBweDsgICAgICAgICAgICAgLy8gQ2VyY2xlIHByaW5jaXBhbFxcclxcbiRib3JkZXJXaWR0aC14bDogMnJlbTsgICAgICAgICAvLyBUYWlsbGUgZGUgbGEgYm9yZHVyZSBlbnRyZSBsZXMgaW1hZ2VzXFxyXFxuXFxyXFxuJGNvbnRlbnRNYXJnaW5MZWZ0OiBjYWxjKDM1JSk7ICAvLyBNYXJnZSBnYXVjaGUgw6AgYXBwbGlxdWVyIHBvdXIgbGUgY29udGVudSB0ZXh0dWVsXFxyXFxuJGNvbnRlbnRNaW5IZWlnaHQ6ICRjaXJjbGUgKyAxMDBweDsgICAgIC8vIEhhdXRldXIgbWluaW1hbGUgw6AgcsOpc2VydmVyIHBvdXIgbGUgYmxvY2sgKHBvdXIgYWp1c3RlciBsYSBoYXV0ZXVyIGR1IHRleHRlIMOgIGNlbGxlIGR1IGNlcmNsZVxcclxcblxcclxcbnNlY3Rpb24jd29ya2luZ193aXRoX21le1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWluLWhlaWdodDogJGNvbnRlbnRNaW5IZWlnaHQ7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcclxcbiAgLmNlcmNsZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6ICRjaXJjbGU7XFxyXFxuICAgIGhlaWdodDogJGNpcmNsZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxyXFxuICAgIGdhcDogJGJvcmRlcldpZHRoO1xcclxcbiAgICBsZWZ0OiAtMTUwcHg7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBib3R0b206IDUwJTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pbm5lci1jaXJjbGV7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrO1xcclxcbiAgICBoZWlnaHQ6ICR3aWR0aElubmVyQ2lyY2xlO1xcclxcbiAgICB3aWR0aDogJHdpZHRoSW5uZXJDaXJjbGU7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gICAgdG9wOiBjYWxjKDUwJSAtICgkd2lkdGhJbm5lckNpcmNsZS8yKSk7XFxyXFxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gKCR3aWR0aElubmVyQ2lyY2xlLzIpKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jZXJjbGUgLmltZy1oaXZlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jZXJjbGUgLmltZy1oaXZlcjo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi8uLi9pbWcvanBnL2hpdmVyLmpwZ1xcXCIpO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDsgbGVmdDogMDsgcmlnaHQ6IDA7IGJvdHRvbTogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2U7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKiBDb2lucyBkdSBjZXJjbGUgKi9cXHJcXG4gIC5jZXJjbGUgLmltZy1oaXZlcjpudGgtY2hpbGQoMikge1xcclxcbiAgICBncmlkLWNvbHVtbjogMTtcXHJcXG4gICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUpO1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDAlO1xcclxcbiAgICAmOmJlZm9yZXtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKSBzY2FsZSgxLjUpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2VyY2xlIC5pbWctaGl2ZXI6bnRoLWNoaWxkKDMpIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICAgIGdyaWQtcm93OiAxO1xcclxcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKTtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwMCU7XFxyXFxuICAgICY6YmVmb3Jle1xcclxcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMS41KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmNlcmNsZSAuaW1nLWhpdmVyOm50aC1jaGlsZCg0KSB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgICBncmlkLXJvdzogMjtcXHJcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSk7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwMCU7XFxyXFxuICAgICY6YmVmb3Jle1xcclxcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMjVkZWcpIHNjYWxlKDEuNSk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jZXJjbGUgLmltZy1oaXZlcjpudGgtY2hpbGQoNSkge1xcclxcbiAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gICAgZ3JpZC1yb3c6IDI7XFxyXFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUpO1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTAwJTtcXHJcXG4gICAgJjpiZWZvcmV7XFxyXFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNjYWxlKDEuNSk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gID4gZGl2IHtcXHJcXG4gICAgZmxleDoxO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB1bC5zdGVwc3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAkY29udGVudE1hcmdpbkxlZnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBhdXRvO1xcclxcbiAgICBcXHJcXG4gICAgbGl7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgICAmLmN1cnJlbnR7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zdGVwcy1uYXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBnYXA6IC41cmVtO1xcclxcblxcclxcbiAgICBidXR0b24ge1xcclxcbiAgICAgIGltZ3tcXHJcXG4gICAgICAgIHdpZHRoOiAxNnB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAmLnByZXZpb3Vze1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICAgICY6ZGlzYWJsZWR7XFxyXFxuICAgICAgICAgIG9wYWNpdHk6MDtcXHJcXG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgZWFzZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6ICRtZC1zY3JlZW4pe1xcclxcbiAgc2VjdGlvbiN3b3JraW5nX3dpdGhfbWV7XFxyXFxuICAgIC5jZXJjbGV7XFxyXFxuICAgICAgd2lkdGg6ICRjaXJjbGUtbWQ7XFxyXFxuICAgICAgaGVpZ2h0OiAkY2lyY2xlLW1kO1xcclxcbiAgICAgIGdhcDogJGJvcmRlcldpZHRoLW1kO1xcclxcbiAgICAgIGxlZnQ6IC0yNTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaW5uZXItY2lyY2xle1xcclxcbiAgICAgIGhlaWdodDogJHdpZHRoSW5uZXJDaXJjbGUtbWQ7XFxyXFxuICAgICAgd2lkdGg6ICR3aWR0aElubmVyQ2lyY2xlLW1kO1xcclxcbiAgICAgIHRvcDogY2FsYyg1MCUgLSAoJHdpZHRoSW5uZXJDaXJjbGUtbWQvMikpO1xcclxcbiAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gKCR3aWR0aElubmVyQ2lyY2xlLW1kLzIpKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogJGxnLXNjcmVlbil7XFxyXFxuICBzZWN0aW9uI3dvcmtpbmdfd2l0aF9tZXtcXHJcXG4gICAgLmNlcmNsZXtcXHJcXG4gICAgICB3aWR0aDogJGNpcmNsZS1sZztcXHJcXG4gICAgICBoZWlnaHQ6ICRjaXJjbGUtbGc7XFxyXFxuICAgICAgZ2FwOiAkYm9yZGVyV2lkdGgtbGc7XFxyXFxuICAgICAgbGVmdDogLTU1MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pbm5lci1jaXJjbGV7XFxyXFxuICAgICAgaGVpZ2h0OiAkd2lkdGhJbm5lckNpcmNsZS1sZztcXHJcXG4gICAgICB3aWR0aDogJHdpZHRoSW5uZXJDaXJjbGUtbGc7XFxyXFxuICAgICAgdG9wOiBjYWxjKDUwJSAtICgkd2lkdGhJbm5lckNpcmNsZS1sZy8yKSk7XFxyXFxuICAgICAgbGVmdDogY2FsYyg1MCUgLSAoJHdpZHRoSW5uZXJDaXJjbGUtbGcvMikpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xcclxcblxcclxcbiAgICBoMntcXHJcXG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICA+IGRpdiB7XFxyXFxuICAgICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogJHhsLXNjcmVlbil7XFxyXFxuICBzZWN0aW9uI3dvcmtpbmdfd2l0aF9tZXtcXHJcXG4gICAgLmNlcmNsZXtcXHJcXG4gICAgICB3aWR0aDogJGNpcmNsZS14bDtcXHJcXG4gICAgICBoZWlnaHQ6ICRjaXJjbGUteGw7XFxyXFxuICAgICAgZ2FwOiAkYm9yZGVyV2lkdGgteGw7XFxyXFxuICAgICAgbGVmdDogLTc1MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pbm5lci1jaXJjbGV7XFxyXFxuICAgICAgaGVpZ2h0OiAkd2lkdGhJbm5lckNpcmNsZS14bDtcXHJcXG4gICAgICB3aWR0aDogJHdpZHRoSW5uZXJDaXJjbGUteGw7XFxyXFxuICAgICAgdG9wOiBjYWxjKDUwJSAtICgkd2lkdGhJbm5lckNpcmNsZS14bC8yKSk7XFxyXFxuICAgICAgbGVmdDogY2FsYyg1MCUgLSAoJHdpZHRoSW5uZXJDaXJjbGUteGwvMikpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGgye1xcclxcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcmVtO1xcclxcbiAgICAgIHBhZGRpbmctdG9wOiAzcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgID4gZGl2IHtcXHJcXG4gICAgICB3aWR0aDogNTAlO1xcclxcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XCIsXCJAdXNlICcuLi92YXJpYWJsZXMnIGFzICo7IFxcclxcblxcclxcbnNlY3Rpb24jcHJpY2VfcXVlc3Rpb257XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA1cmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmtlc3Q7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG5cXHJcXG4gICAgaDJ7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICB9XFxyXFxufVwiLFwiQHVzZSAnLi4vdmFyaWFibGVzJyBhcyAqOyBcXHJcXG5cXHJcXG4kbGctZ2FwOiAycmVtO1xcclxcbiRmaXJzdC1jb2x1bW4td2lkdGg6IDI1JTtcXHJcXG4kc2Vjb25kLWNvbHVtbi13aWR0aDogNzUlO1xcclxcblxcclxcbnNlY3Rpb24jY29udGFjdF9tZXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmtlc3Q7XFxyXFxuXFxyXFxuICAgIGZvcm17XFxyXFxuICAgICAgICAuZm9ybS1lbGVtZW50IHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDA7XFxyXFxuXFxyXFxuICAgICAgICAgICAgbGFiZWx7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udDtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjI1cmVtO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICBpbnB1dCwgdGV4dGFyZWF7XFxyXFxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkc2Vjb25kYXJ5LWZvbnQ7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIHRleHRhcmVhe1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLm1lc3NhZ2UtaGVscHtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250O1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLjI1cmVtO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIGJ1dHRvbntcXHJcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAkbGctc2NyZWVuKXtcXHJcXG4gICAgc2VjdGlvbiNjb250YWN0X21le1xcclxcbiAgICAgICAgZm9ybXtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgICAgIGdhcDogJGxnLWdhcDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAuY29sdW1uOm50aC1jaGlsZCgxKXtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoJGZpcnN0LWNvbHVtbi13aWR0aCAtICgkbGctZ2FwLzIpKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgLmNvbHVtbjpudGgtY2hpbGQoMil7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKCRzZWNvbmQtY29sdW1uLXdpZHRoIC0gKCRsZy1nYXAvMikpO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENpcmNsZVN0ZXB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuY2lyY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3b3JraW5nX3dpdGhfbWUgLmNlcmNsZVwiKVxyXG4gICAgICAgIHRoaXMubmV4dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd29ya2luZ193aXRoX21lIGJ1dHRvbi5uZXh0XCIpO1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dvcmtpbmdfd2l0aF9tZSBidXR0b24ucHJldmlvdXNcIik7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsUm90YXRpb24gPSA0NTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRSb3RhdGlvbiA9IDA7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvblN0ZXAgPSA5MDtcclxuICAgICAgICB0aGlzLmNsYXNzVG9TaG93ID0gXCJjdXJyZW50XCJcclxuXHJcbiAgICAgICAgdGhpcy5zdGVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjd29ya2luZ193aXRoX21lIHVsLnN0ZXBzIGxpXCIpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXAgPSAwO1xyXG5cclxuICAgICAgICBpZighdGhpcy5jaGVja0VsZW1lbnRzKCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbCBtYW5xdWUgZGVzIMOpbMOpbWVudHMgaHRtbFwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRCdXR0b25DbGljaygpXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tFbGVtZW50cygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNpcmNsZSAmJiB0aGlzLm5leHRCdXR0b24gJiYgdGhpcy5wcmV2aW91c0J1dHRvbiAmJiB0aGlzLnN0ZXBzLmxlbmd0aCA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QnV0dG9uQ2xpY2soKXtcclxuICAgICAgICB0aGlzLnByZXZpb3VzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnByZXZpb3VzU3RlcCgpKTtcclxuICAgICAgICB0aGlzLm5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMubmV4dFN0ZXAoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dFN0ZXAoKXtcclxuICAgICAgICBpZigodGhpcy5jdXJyZW50U3RlcCArIDEpIDwgdGhpcy5zdGVwcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID09IHRoaXMuY3VycmVudFN0ZXArKztcclxuICAgICAgICAgICAgdGhpcy5zaG93Q3VycmVudFN0ZXAoKTtcclxuICAgICAgICAgICAgdGhpcy5yb2xsY2lyY2xlKFwibmV4dFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5tYW5hZ2VCdXR0b25zKClcclxuICAgIH1cclxuXHJcbiAgICBwcmV2aW91c1N0ZXAoKXtcclxuICAgICAgICBpZih0aGlzLmN1cnJlbnRTdGVwICE9IDApe1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID09IHRoaXMuY3VycmVudFN0ZXAtLTtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q3VycmVudFN0ZXAoKVxyXG4gICAgICAgICAgICB0aGlzLnJvbGxjaXJjbGUoXCJwcmV2aW91c1wiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm1hbmFnZUJ1dHRvbnMoKVxyXG4gICAgfVxyXG5cclxuICAgIG1hbmFnZUJ1dHRvbnMoKXtcclxuICAgICAgICBpZih0aGlzLmN1cnJlbnRTdGVwICsgMSA9PT0gdGhpcy5zdGVwcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVCdXR0b24odGhpcy5uZXh0QnV0dG9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVuYWJsZUJ1dHRvbih0aGlzLm5leHRCdXR0b24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmN1cnJlbnRTdGVwID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlQnV0dG9uKHRoaXMucHJldmlvdXNCdXR0b24pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbmFibGVCdXR0b24odGhpcy5wcmV2aW91c0J1dHRvbilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGlzYWJsZUJ1dHRvbihidXR0b24pe1xyXG4gICAgICAgIGlmKCFidXR0b24uZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikpe1xyXG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgdHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZW5hYmxlQnV0dG9uKGJ1dHRvbil7XHJcbiAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0N1cnJlbnRTdGVwKCl7XHJcbiAgICAgICAgdGhpcy5zdGVwcy5mb3JFYWNoKChzdGVwLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZihpbmRleCAhPSB0aGlzLmN1cnJlbnRTdGVwKXtcclxuICAgICAgICAgICAgICAgIHN0ZXAuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzVG9TaG93KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN0ZXAuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzVG9TaG93KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcm9sbGNpcmNsZShiZWhhdmlvcil7XHJcbiAgICAgICAgbGV0IHJvdGF0aW9uID0gdGhpcy5jdXJyZW50Um90YXRpb24gfHwgdGhpcy5pbml0aWFsUm90YXRpb247XHJcblxyXG4gICAgICAgIGlmKGJlaGF2aW9yID09IFwibmV4dFwiKXtcclxuICAgICAgICAgICAgcm90YXRpb24gKz0gdGhpcy5yb3RhdGlvblN0ZXA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcm90YXRpb24gLT0gdGhpcy5yb3RhdGlvblN0ZXA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNpcmNsZS5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7cm90YXRpb259ZGVnKWA7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Um90YXRpb24gPSByb3RhdGlvbjtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3Bve1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnJpbmdTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VjdGlvbiNwcmVzZW50YXRpb24gLmRpc3BvLWJvZHkgLmRpc3BvLXN0YXR1c1wiKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VjdGlvbiNwcmVzZW50YXRpb24gLmRpc3BvLWJvZHkgLmRpc3BvLW1lc3NhZ2VcIik7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdleWVzID0gXCJEaXNwb25pYmxlIGTDqHMgYXVqb3VyZCdodWlcIjtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VubyA9IFwiQWN0dWVsbGVtZW50IGVuIG1pc3Npb25cIjtcclxuICAgICAgICB0aGlzLmltaWRpc3BvID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGVja0VsZW1lbnRzKClcclxuICAgICAgICB0aGlzLmRpc3BsYXlTdGF0dXMoKVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrRWxlbWVudHMoKXtcclxuICAgICAgICBpZighdGhpcy5yaW5nU3RhdHVzIHx8ICF0aGlzLm1lc3NhZ2VTdGF0dXMpe1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJMZXMgZG9ubsOpZXMganNvbiBldCBsZXMgw6lsw6ltZW50cyBIVE1MIHNvbnQgb2JsaWdhdG9pcmVzICFcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheVN0YXR1cygpe1xyXG4gICAgICAgIGxldCB0cmFuc2xhdGVEaXNwbyA9IHRoaXMuaW1pZGlzcG8gPT09IHRydWUgPyBcInllc1wiIDogXCJub1wiO1xyXG4gICAgICAgIGxldCBtZXNzYWdlRGlzcG8gPSB0aGlzLmltaWRpc3BvID09PSB0cnVlID8gdGhpcy5tZXNzYWdleWVzIDogdGhpcy5tZXNzYWdlbm87XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLnJpbmdTdGF0dXMuY2xhc3NMaXN0LmNvbnRhaW5zKHRyYW5zbGF0ZURpc3BvKSl7XHJcbiAgICAgICAgICAgIHRoaXMucmluZ1N0YXR1cy5jbGFzc0xpc3QuYWRkKHRyYW5zbGF0ZURpc3BvKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1lc3NhZ2VTdGF0dXMuaW5uZXJIVE1MID0gbWVzc2FnZURpc3BvXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZ7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMubmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKTtcclxuICAgICAgICB0aGlzLm5hdlJlc3BvbnNpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2I25hdl9yZXNwb25zaXZlXCIpXHJcbiAgICAgICAgdGhpcy5idXJnZXJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1cmdlci1tZW51XCIpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlQ2xhc3NOYW1lID0gXCJzaG93ZWRcIjtcclxuICAgICAgICB0aGlzLmRlbGF5QW5pbVJzID0gLjM7IC8vIFRpbWUgdG8gc2Vjb25kXHJcbiAgICAgICAgdGhpcy5uYXZGaXhlZFRocmVzaG9sZCA9IDc1O1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKXtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHtyZXN1bHQsIG1lc3NhZ2V9ID0gdGhpcy5jaGVja05hdmlnYXRpb24oKVxyXG4gICAgICAgICAgICBpZighcmVzdWx0KSB0aHJvdyBFcnJvcihtZXNzYWdlKVxyXG5cclxuICAgICAgICAgICAgLy8gT24gZG9ubmUgYXUgYm91dG9uIGJ1cmdlciBsYSBjYXBhY2l0w6kgw6AgbW9udHJlciBsZSBtZW51XHJcbiAgICAgICAgICAgIHRoaXMubmF2UmVzcG9uc2l2ZU9wZW5hYmxlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TmF2UmVhZHkoKTtcclxuICAgICAgICAgICAgdGhpcy5wcmV2ZW50V2luZG93U2Nyb2xsKCk7XHJcbiAgICAgICAgfSBjYXRjaChlKXtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrTmF2aWdhdGlvbigpe1xyXG4gICAgICAgIC8vIEZhbHNlIHNpIGF1Y3VuZSBuYXZpZ2F0aW9uIHJldHJvdXbDqWVcclxuICAgICAgICBpZighdGhpcy5uYXYgfHwgdGhpcy5uYXZSZXNwb25zaXZlKSByZXR1cm4ge3Jlc3VsdDogdHJ1ZSwgbWVzc2FnZTogXCJJbCBtYW5xdWUgYXUgbW9pbnMgdW5lIG5hdmlnYXRpb25cIn07XHJcbiAgICAgICAgaWYoIXRoaXMuYnVyZ2VyQnV0dG9uKSByZXR1cm4ge3Jlc3VsdDogZmFsc2UsIG1lc3NhZ2U6IFwiQm91dG9uIGJ1cmdlciBub24gcHLDqXNlbnRcIn07XHJcblxyXG4gICAgICAgIHJldHVybiB7cmVzdWx0OiB0cnVlLCBtZXNzYWdlOiBcIk9LXCJ9O1xyXG4gICAgfVxyXG5cclxuICAgIG5hdlJlc3BvbnNpdmVPcGVuYWJsZSgpe1xyXG4gICAgICAgIHRoaXMuYnVyZ2VyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFRvVG9nZ2xlID0gdGhpcy5uYXZSZXNwb25zaXZlXHJcbiAgICAgICAgICAgIGlmKHRhcmdldFRvVG9nZ2xlLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLnRvZ2dsZUNsYXNzTmFtZSkpe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0VG9Ub2dnbGUuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnRvZ2dsZUNsYXNzTmFtZSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFRvVG9nZ2xlLmNsYXNzTGlzdC5hZGQodGhpcy50b2dnbGVDbGFzc05hbWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNldE5hdlJlYWR5KCl7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubmF2LmNsYXNzTGlzdC5hZGQoXCJyZWFkeVwiKVxyXG4gICAgICAgIH0sIHRoaXMuZGVsYXlBbmltUnMgKiAxMDAwKVxyXG4gICAgfVxyXG5cclxuICAgIHByZXZlbnRXaW5kb3dTY3JvbGwoKXtcclxuICAgICAgICBsZXQgdGlja2luZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRpY2tpbmcpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IHRoaXMubmF2Rml4ZWRUaHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXYuY2xhc3NMaXN0LmFkZCgnZml4ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZSZXNwb25zaXZlLmNsYXNzTGlzdC5hZGQoJ2ZpeGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5uYXYuY2xhc3NMaXN0LnJlbW92ZSgnZml4ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5uYXZSZXNwb25zaXZlLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpY2tpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGlja2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRhcmVhe1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnRleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0gdGV4dGFyZWFcIik7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlSGVscCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtIC5tZXNzYWdlLWhlbHBcIik7XHJcbiAgICAgICAgdGhpcy5saW1pdCA9IHRoaXMubWVzc2FnZUhlbHAucXVlcnlTZWxlY3RvcihcInNwYW5cIikuaW5uZXJIVE1MXHJcbiAgICAgICAgaWYoIXRoaXMuY2hlY2tFbGVtZW50KCkpe1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbCBtYW5xdWUgc29pdCB1biB0ZXh0YXJlYSBzb2l0IHNvbiBtZXNzYWdlIGhlbHAgIVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0Q2FyYWN0ZXJlQmVoYXZpb3IoKVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrRWxlbWVudCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHRhcmVhICYmIHRoaXMubWVzc2FnZUhlbHA7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2FyYWN0ZXJlQmVoYXZpb3IoKXtcclxuICAgICAgICB0aGlzLnRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlbWFpbmluZyA9IHRoaXMubGltaXQgLSB0aGlzLnRleHRhcmVhLnZhbHVlLmxlbmd0aDtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VIZWxwLnRleHRDb250ZW50ID0gYCR7cmVtYWluaW5nfSBjYXJhY3TDqHJlcyByZXN0YW50cy5gO1xyXG4gIH0pO1xyXG4gICAgfVxyXG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC9eYmxvYjovLCBcIlwiKS5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi8uLi9zY3NzL3N0eWxlLnNjc3MnO1xyXG5pbXBvcnQgRGlzcG8gZnJvbSAnLi9jbGFzcy9kaXNwb25pYmlsaXR5JztcclxuaW1wb3J0IE5hdiBmcm9tICcuL2NsYXNzL25hdic7XHJcbmltcG9ydCBDaXJjbGVTdGVwIGZyb20gJy4vY2xhc3MvY2lyY2xlU3RlcCc7XHJcbmltcG9ydCBUZXh0YXJlYSBmcm9tICcuL2NsYXNzL3RleHRhcmVhJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIG5ldyBOYXYoKVxyXG4gICAgbmV3IERpc3BvKClcclxuICAgIG5ldyBDaXJjbGVTdGVwKClcclxuICAgIG5ldyBUZXh0YXJlYSgpXHJcbn0pOyJdLCJuYW1lcyI6WyJDaXJjbGVTdGVwIiwiX2NsYXNzQ2FsbENoZWNrIiwiY2lyY2xlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmV4dEJ1dHRvbiIsInByZXZpb3VzQnV0dG9uIiwiaW5pdGlhbFJvdGF0aW9uIiwiY3VycmVudFJvdGF0aW9uIiwicm90YXRpb25TdGVwIiwiY2xhc3NUb1Nob3ciLCJzdGVwcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjdXJyZW50U3RlcCIsImNoZWNrRWxlbWVudHMiLCJFcnJvciIsInNldEJ1dHRvbkNsaWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJsZW5ndGgiLCJfdGhpcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcmV2aW91c1N0ZXAiLCJuZXh0U3RlcCIsInNob3dDdXJyZW50U3RlcCIsInJvbGxjaXJjbGUiLCJtYW5hZ2VCdXR0b25zIiwiZGlzYWJsZUJ1dHRvbiIsImVuYWJsZUJ1dHRvbiIsImJ1dHRvbiIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsIl90aGlzMiIsImZvckVhY2giLCJzdGVwIiwiaW5kZXgiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJiZWhhdmlvciIsInJvdGF0aW9uIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJjb25jYXQiLCJkZWZhdWx0IiwiRGlzcG8iLCJyaW5nU3RhdHVzIiwibWVzc2FnZVN0YXR1cyIsIm1lc3NhZ2V5ZXMiLCJtZXNzYWdlbm8iLCJpbWlkaXNwbyIsImRpc3BsYXlTdGF0dXMiLCJ0cmFuc2xhdGVEaXNwbyIsIm1lc3NhZ2VEaXNwbyIsImNvbnRhaW5zIiwiaW5uZXJIVE1MIiwiTmF2IiwibmF2IiwibmF2UmVzcG9uc2l2ZSIsImJ1cmdlckJ1dHRvbiIsImdldEVsZW1lbnRCeUlkIiwidG9nZ2xlQ2xhc3NOYW1lIiwiZGVsYXlBbmltUnMiLCJuYXZGaXhlZFRocmVzaG9sZCIsImluaXQiLCJfdGhpcyRjaGVja05hdmlnYXRpb24iLCJjaGVja05hdmlnYXRpb24iLCJyZXN1bHQiLCJtZXNzYWdlIiwibmF2UmVzcG9uc2l2ZU9wZW5hYmxlIiwic2V0TmF2UmVhZHkiLCJwcmV2ZW50V2luZG93U2Nyb2xsIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0VG9Ub2dnbGUiLCJzZXRUaW1lb3V0IiwiX3RoaXMzIiwidGlja2luZyIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNjcm9sbFkiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwibWVzc2FnZUhlbHAiLCJsaW1pdCIsImNoZWNrRWxlbWVudCIsInNldENhcmFjdGVyZUJlaGF2aW9yIiwicmVtYWluaW5nIiwidGV4dENvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9