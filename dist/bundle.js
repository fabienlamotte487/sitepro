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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./../fonts/roboto.ttf */ "./src/assets/fonts/roboto.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
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
  line-height: 0.75;
  color: white;
  text-align: center;
  margin-bottom: 1rem;
}

h3 {
  color: white;
}

p {
  font-family: "roboto";
  color: white;
}

h1 {
  font-size: 62px;
}

h2 {
  font-size: 40px;
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
@media (min-width: 992px) {
  .btn:hover {
    opacity: 0.8;
    cursor: pointer;
  }
}

main {
  gap: 3rem;
  display: flex;
  flex-direction: column;
}

section:not(.no-gutters) {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
@media (min-width: 768px) {
  section:not(.no-gutters) {
    margin-left: 2rem;
    margin-right: 2rem;
  }
}
@media (min-width: 992px) {
  section:not(.no-gutters) {
    margin-left: 3rem;
    margin-right: 3rem;
  }
}

section#presentation #branding {
  padding: 3rem 0;
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
  padding: 1.5rem;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  gap: 2rem;
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
section#why h2 {
  text-align: center;
  margin-bottom: 2rem;
}
section#why ul {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;
  list-style: none;
  width: 100%;
  column-gap: 10px;
  row-gap: 50px;
}
section#why ul li {
  width: calc(50% - 5px);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  gap: 10px;
}
section#why ul li p {
  font-style: italic;
}
section#why ul li > div:has(img) {
  background: linear-gradient(-180deg, #FA9A10, 50%, #EB3738 90%, #EB3738 100%);
  padding: 0.5rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
section#why ul li > div:has(img) img {
  height: 24px;
  width: 24px;
}
section#why ul li:nth-child(even) {
  text-align: left;
  flex-direction: row-reverse;
}

@media (min-width: 992px) {
  section#why ul {
    align-items: flex-start;
  }
  section#why ul li {
    width: calc(33.33% - 10px);
    flex-direction: column-reverse;
    justify-content: center;
  }
  section#why ul li:nth-child(even) {
    flex-direction: column-reverse;
  }
  section#why ul li h3, section#why ul li p {
    text-align: center;
  }
  section#why ul li > div:has(img) {
    padding: 1rem;
  }
  section#why ul li > div:has(img) img {
    height: 48px;
    width: 48px;
  }
}
section#working_with_me {
  /* Coins du cercle */
}
section#working_with_me .cercle {
  position: relative;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}
section#working_with_me .cercle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
section#working_with_me .cercle img:nth-child(1) {
  grid-column: 1;
  grid-row: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  border-top-left-radius: 100%;
}
section#working_with_me .cercle img:nth-child(2) {
  grid-column: 2;
  grid-row: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  border-top-right-radius: 100%;
}
section#working_with_me .cercle img:nth-child(3) {
  grid-column: 1;
  grid-row: 2;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  border-bottom-left-radius: 100%;
}
section#working_with_me .cercle img:nth-child(4) {
  grid-column: 2;
  grid-row: 2;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  border-bottom-right-radius: 100%;
}
section#working_with_me div {
  position: absolute;
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
}`, "",{"version":3,"sources":["webpack://./src/assets/scss/style.scss","webpack://./src/assets/scss/variables.scss","webpack://./src/assets/scss/components/nav.scss","webpack://./src/assets/scss/components/fonts.scss","webpack://./src/assets/scss/mixins/font-sizes.scss","webpack://./src/assets/scss/components/button.scss","webpack://./src/assets/scss/components/section.scss","webpack://./src/assets/scss/mixins/gutters.scss","webpack://./src/assets/scss/sections/presentation.scss","webpack://./src/assets/scss/sections/why.scss","webpack://./src/assets/scss/sections/working_with_me.scss"],"names":[],"mappings":"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","sourcesContent":["@use 'variables' as *;\r\n\r\n@use 'components/nav';\r\n@use 'components/fonts';\r\n@use 'components/button';\r\n@use 'components/section';\r\n\r\n@use 'sections/presentation';\r\n@use 'sections/why';\r\n@use 'sections/working_with_me';\r\n\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\nhtml, body{\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: $dark;\r\n}\r\n\r\nhtml{\r\n    scroll-behavior: smooth;\r\n    &:has(nav.fixed){\r\n        margin-top: 75px;\r\n    }\r\n}","/* Media screen */\r\n$sm-screen: 576px;\r\n$md-screen: 768px;\r\n$lg-screen: 992px;\r\n$xl-screen: 1200px;\r\n$xxl-screen: 1400px;\r\n\r\n/* colors */\r\n$primary-1: #FA9A10;\r\n$primary-2: #EB3738;\r\n$secondary-1: #00E1CD;\r\n$secondary-2: #6E39D5;\r\n$dark: #2E3035;\r\n$darkest: #1B1D20;\r\n$success: #56B53E;\r\n$error: #A70E0E;\r\n\r\n$degrade-primary: linear-gradient(-180deg, $primary-1, 50%, $primary-2 90%, $primary-2 100%);\r\n$degrade-secondary: linear-gradient(-180deg, $secondary-1, 40%, $secondary-2 60%, $secondary-2 100%);\r\n\r\n/* Section */ \r\n$margin-section: 3rem;\r\n\r\n/* fonts */\r\n$font-weight-normal: 400;\r\n$font-weight-bold: 700;\r\n$main-font: \"jomhuria\";\r\n$secondary-font: \"roboto\";\r\n\r\n$h1-font-size: (\r\n  $sm-screen: 62px,\r\n);;\r\n$h2-font-size: (\r\n  $sm-screen: 40px,\r\n  $md-screen: 48px,\r\n);\r\n$h3-font-size: (\r\n  $sm-screen: 24px,\r\n  $md-screen: 32px,\r\n);\r\n$p-font-size: (\r\n  $sm-screen: 11px,\r\n  $md-screen: 13px,\r\n  $lg-screen: 16px,\r\n);\r\n$font-sizes: (\r\n  h1: $h1-font-size,\r\n  h2: $h2-font-size,\r\n  h3: $h3-font-size,\r\n  p: $p-font-size\r\n);\r\n\r\n$h2-margin-bottom: 2rem;\r\n\r\n\r\n/* Gutters */\r\n$gutters-map: (\r\n  $sm-screen: .5rem,\r\n  $md-screen: 2rem,\r\n  $lg-screen: 3rem\r\n);","@use '../variables' as *;\r\n\r\nheader{\r\n    background-color: $darkest;\r\n\r\n    nav{\r\n        &#nav_responsive{\r\n            display: flex;\r\n            position: relative;\r\n            width: 100%;\r\n\r\n            div{\r\n                display: flex;\r\n                justify-content: space-between;\r\n                align-items: center;\r\n                padding: 1rem;\r\n                z-index: 1;\r\n                width: 100%;\r\n                border-bottom: 1px solid white;\r\n                background-color: $darkest;\r\n            }\r\n            ul{\r\n                position: absolute;\r\n                top: -200%;\r\n                width: 100%;\r\n                overflow: hidden;\r\n                left: 0;\r\n                right: 0;\r\n                background-color: $darkest;\r\n                padding: 1rem 0;\r\n                transition: top .3s ease;\r\n                z-index: 0;\r\n                display: flex;\r\n                flex-direction: column;\r\n            }\r\n\r\n            #burger-menu{\r\n                height: 30px;\r\n                width: 30px;\r\n                display: flex;\r\n                flex-direction: column;\r\n                justify-content: space-around;\r\n                align-items: center;\r\n\r\n                > div{\r\n                    all: inherit;\r\n                    height: 3px;\r\n                    width: 100%;\r\n                    background: white;\r\n                    transition: all .3s ease;\r\n                }\r\n            }\r\n\r\n            &.showed{\r\n                ul{\r\n                    top: calc(100% + 1px);\r\n                }\r\n\r\n                #burger-menu{\r\n                    div:nth-child(1) {\r\n                        transform: translateY(10px) rotate(45deg);\r\n                    }\r\n\r\n                    div:nth-child(2) {\r\n                        opacity: 0;\r\n                        transform: translateX(-5px)\r\n                    }\r\n\r\n                    div:nth-child(3) {\r\n                        transform: translateY(-10px) rotate(-45deg);\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        \r\n        background-color: $darkest;\r\n        display: none;\r\n        justify-content: center;\r\n        align-items: center;\r\n\r\n        ul{\r\n            display: flex;\r\n            list-style-type: none;\r\n            li {\r\n                padding: .5rem 0;\r\n                text-align: center;\r\n                a{\r\n                    color: white;\r\n                    height: 100%;\r\n                    width: 100%;\r\n                    text-decoration: none;\r\n                }\r\n            }\r\n        }\r\n\r\n        &.fixed{\r\n            position: fixed !important;\r\n            top: 0;\r\n            right: 0;\r\n            left: 0;\r\n            z-index: 2;\r\n        }\r\n    }\r\n}\r\n\r\n\r\n@media (min-width: $lg-screen){\r\n    header nav{\r\n        &#nav_responsive{\r\n            display: none;\r\n        }\r\n        \r\n        display: flex;\r\n        justify-content: flex-start;\r\n        padding: 1rem;\r\n\r\n        #main-logo{\r\n            margin-right: 3rem;\r\n        }\r\n\r\n        ul{\r\n            gap: 1rem;\r\n            a{\r\n                transition: opacity .3s ease;\r\n\r\n                &:hover{\r\n                    opacity: .7;\r\n                }\r\n            }\r\n\r\n            &.rs{\r\n                gap: .5rem;\r\n                margin-right: .5rem;\r\n                transition: opacity .3s ease;\r\n                li {\r\n                    opacity: 0;\r\n                    transform: translateY(-150%);\r\n                    transition: opacity .3s ease;\r\n                }\r\n            }\r\n        }\r\n\r\n        > div{\r\n            margin-left: auto;\r\n            display: flex;\r\n        }\r\n\r\n        &.ready {\r\n            ul.rs {\r\n                li {\r\n                    will-change: transform, opacity;\r\n\r\n                    animation-name: fallBounce;\r\n                    animation-duration: 900ms;\r\n                    animation-timing-function: cubic-bezier(.28,.84,.42,1);\r\n                    animation-fill-mode: both; \r\n                }\r\n\r\n                @for $i from 1 through 12 {\r\n                    li:nth-child(#{$i}) {\r\n                        animation-delay: ($i - 1) * 0.1s;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n@keyframes fallBounce {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateY(-150%);\r\n  }\r\n  20% {\r\n    opacity: 1;\r\n    transform: translateY(0%); \r\n  }\r\n  60% {\r\n    opacity: 1;\r\n    transform: translateY(-20%);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateY(0%);\r\n  }\r\n}","@use '../variables' as *;\r\n@use '../mixins/font-sizes.scss' as *;\r\n\r\n\r\n@font-face {\r\n    font-family: $main-font;\r\n    src: url(\"./../fonts/Jomhuria.ttf\");\r\n}\r\n\r\n@font-face {\r\n    font-family: \"roboto\";\r\n    src: url(\"./../fonts/roboto.ttf\");\r\n}\r\n\r\nh1, h2, h3{\r\n    font-family: $main-font;\r\n    font-weight: 300;\r\n}\r\n\r\nh1{\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    span{\r\n        line-height: 0.65;\r\n    }\r\n\r\n    span:nth-child(1){\r\n        background: $degrade-primary;\r\n        -webkit-background-clip: text;\r\n        background-clip: text;\r\n        color: transparent;\r\n        -webkit-text-fill-color: transparent;\r\n    }\r\n    \r\n    span:nth-child(2){\r\n        background: $degrade-secondary;\r\n        -webkit-background-clip: text;\r\n        background-clip: text;\r\n        color: transparent;\r\n        -webkit-text-fill-color: transparent;\r\n    }\r\n}\r\n\r\nh2{\r\n    line-height: 0.75;\r\n    color: white;\r\n    text-align: center;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\nh3{\r\n    color: white;\r\n}\r\n\r\np{\r\n    font-family: $secondary-font;\r\n    color: white;\r\n}\r\n\r\n@each $element, $sizes in $font-sizes {\r\n  #{$element} {\r\n    @include responsive-font-sizes($sizes);\r\n  }\r\n}\r\n\r\n\r\n@media (min-width: $lg-screen){\r\n    h1{\r\n        flex-direction: row;\r\n        gap: .5rem;\r\n    }\r\n}","@mixin responsive-font-sizes($sizes) {\r\n  $prev-size: null;\r\n  $first: true;\r\n\r\n  @each $breakpoint, $size in $sizes {\r\n    @if $first {\r\n      // Valeur par défaut (sans media query)\r\n      font-size: $size;\r\n      $first: false;\r\n    } @else if $size != $prev-size {\r\n      // Media query seulement si la taille change\r\n      @media (min-width: #{$breakpoint}) {\r\n        font-size: $size;\r\n      }\r\n    }\r\n    $prev-size: $size;\r\n  }\r\n}","@use '../variables' as *;\r\n\r\n.btn{\r\n    &.primary{\r\n        background: $degrade-primary;\r\n    }\r\n\r\n    border: none;\r\n    border-radius: 30px;\r\n    transition: opacity .3s ease;\r\n    display: flex;\r\n    padding: .75rem 2rem;\r\n    text-decoration: none;\r\n    color: white;\r\n    font-family: $secondary-font;\r\n    font-weight: 500;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    @media (min-width: $lg-screen){\r\n        &:hover{\r\n            opacity: .8;\r\n            cursor: pointer;\r\n        }\r\n    }\r\n}\r\n","@use '../variables' as *; \r\n@use '../mixins/gutters.scss' as *; \r\n\r\nmain{\r\n    gap: $margin-section;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\nsection{\r\n    &:not(.no-gutters){\r\n        @include generate-gutters(margin-left, margin-right);\r\n    }\r\n}","@use '../variables' as *; \r\n\r\n@mixin generate-gutters($property: padding-left, $property2: padding-right) {\r\n  $first: true;\r\n  $prev: null;\r\n\r\n  @each $breakpoint, $gutter in $gutters-map {\r\n    @if $first {\r\n      #{$property}: $gutter;\r\n      #{$property2}: $gutter;\r\n      $first: false;\r\n    } @else if $gutter != $prev {\r\n      @media (min-width: #{$breakpoint}) {\r\n        #{$property}: $gutter;\r\n        #{$property2}: $gutter;\r\n      }\r\n    }\r\n    $prev: $gutter;\r\n  }\r\n}","@use '../variables' as *;\r\n\r\nsection#presentation{\r\n    #branding{\r\n      padding: 3rem 0;\r\n\r\n      p{\r\n        margin-bottom: 1rem;\r\n      }\r\n\r\n      .wallart{\r\n        display: none;\r\n      }\r\n\r\n      .matrogne{\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n\r\n        color: white;\r\n        font-family: $secondary-font;\r\n        div.dispo-body{\r\n          display: flex;\r\n          div.dispo-status{\r\n            height: 15px;\r\n            width: 15px;\r\n            border-radius: 15px;\r\n            margin-right: 5px;\r\n\r\n            &.yes {\r\n                background:$success;\r\n            }\r\n\r\n            &.no{\r\n                background:$error;\r\n            }\r\n          }\r\n        }\r\n      }\r\n\r\n    }\r\n    #purpose{\r\n      background: $degrade-primary;\r\n      padding: 1.5rem;\r\n\r\n      color: white;\r\n      text-align: center;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      flex-direction: column;\r\n\r\n      img{\r\n        height: 100px;\r\n        width: 100px;\r\n        animation: nuageFlottant 6s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;\r\n      }\r\n\r\n      > div{\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        gap: 2rem;\r\n        margin-top: 2rem;\r\n      }\r\n    }\r\n    \r\n  @media (min-width: $md-screen){\r\n    #branding{\r\n      position:relative;\r\n      overflow: hidden;\r\n      \r\n      *{\r\n        z-index: 1;\r\n      }\r\n\r\n      .wallart{\r\n        display: block;\r\n        position:absolute;\r\n        z-index: 0;\r\n        top:-175px;\r\n        left:-150px;\r\n        transform: rotate(20deg);\r\n      }\r\n    }\r\n  }\r\n  \r\n  @media (min-width: $lg-screen){\r\n    #branding{\r\n      padding: 7rem 0;\r\n      > div {\r\n        width: 75%;\r\n        margin-left: auto;\r\n      }\r\n    }\r\n  }\r\n} \r\n\r\n@keyframes nuageFlottant {\r\n  0% {\r\n    transform: translate(0px, 0px);\r\n  }\r\n  25% {\r\n    transform: translate(4px, -6px); /* ×2 */\r\n  }\r\n  50% {\r\n    transform: translate(-4px, 4px); /* ×2 */\r\n  }\r\n  75% {\r\n    transform: translate(2px, -2px); /* ×2 */\r\n  }\r\n  100% {\r\n    transform: translate(0px, 0px);\r\n  }\r\n}\r\n\r\n","@use '../variables' as *; \r\n\r\n$gap-list-x: 10px;\r\n$gap-list-y: 50px;\r\n$responsive-icon-size: 24px;\r\n$lg-icon-size: 48px;\r\n$responsive-item-size: 50%;\r\n$lg-item-size: 33.33%;\r\n\r\nsection#why{\r\n    h2{\r\n        text-align: center;\r\n        margin-bottom: $h2-margin-bottom;\r\n    }\r\n\r\n    ul{\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        flex-wrap: wrap;\r\n        margin: 0;\r\n        list-style: none;\r\n        width: 100%;\r\n        column-gap: $gap-list-x;\r\n        row-gap: $gap-list-y;\r\n\r\n        li{\r\n            width: calc($responsive-item-size - ($gap-list-x/2));\r\n            display: flex;\r\n            justify-content: flex-end;\r\n            align-items: center;\r\n            text-align: right;\r\n            gap: 10px;\r\n            \r\n\r\n            p{\r\n                font-style: italic;\r\n            }\r\n\r\n            > div:has(img){\r\n                background: $degrade-primary;\r\n                padding: .5rem;\r\n                border-radius: 100%;\r\n                display: flex;\r\n                justify-content: center;\r\n                align-items: center;\r\n                img{\r\n                    height: $responsive-icon-size;\r\n                    width: $responsive-icon-size;\r\n                }\r\n            }\r\n\r\n\r\n            &:nth-child(even){\r\n                text-align: left;\r\n                flex-direction: row-reverse;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n\r\n@media (min-width: $lg-screen){\r\n    section#why ul {\r\n        align-items: flex-start;\r\n        li {\r\n            width: calc($lg-item-size - $gap-list-x);\r\n            flex-direction: column-reverse;\r\n            justify-content: center;\r\n            &:nth-child(even){\r\n                flex-direction: column-reverse;\r\n            }\r\n\r\n            h3, p{\r\n                text-align: center;\r\n            }\r\n            \r\n            > div:has(img){\r\n                padding: 1rem;\r\n                img{\r\n                    height: $lg-icon-size;\r\n                    width: $lg-icon-size;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}","section#working_with_me{\r\n    .cercle {\r\n      position: relative;\r\n      width: 400px;\r\n      height: 400px;\r\n      border-radius: 50%;\r\n      overflow: hidden;\r\n      display: grid;\r\n      grid-template-columns: 1fr 1fr;\r\n      grid-template-rows: 1fr 1fr;\r\n    }\r\n\r\n    .cercle img {\r\n      width: 100%;\r\n      height: 100%;\r\n      object-fit: cover;\r\n    }\r\n\r\n    /* Coins du cercle */\r\n    .cercle img:nth-child(1) {\r\n      grid-column: 1;\r\n      grid-row: 1;\r\n      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\r\n      border-top-left-radius: 100%;\r\n    }\r\n\r\n    .cercle img:nth-child(2) {\r\n      grid-column: 2;\r\n      grid-row: 1;\r\n      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\r\n      border-top-right-radius: 100%;\r\n    }\r\n\r\n    .cercle img:nth-child(3) {\r\n      grid-column: 1;\r\n      grid-row: 2;\r\n      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\r\n      border-bottom-left-radius: 100%;\r\n    }\r\n\r\n    .cercle img:nth-child(4) {\r\n      grid-column: 2;\r\n      grid-row: 2;\r\n      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\r\n      border-bottom-right-radius: 100%;\r\n    }\r\n\r\n    div{\r\n        position: absolute;\r\n    }\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/assets/fonts/roboto.ttf":
/*!*************************************!*\
  !*** ./src/assets/fonts/roboto.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c9d0f6513f7cfe91016.ttf";

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



document.addEventListener("DOMContentLoaded", function () {
  new _class_nav__WEBPACK_IMPORTED_MODULE_2__["default"]();
  new _class_disponibility__WEBPACK_IMPORTED_MODULE_1__["default"]();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZ0g7QUFDakI7QUFDTztBQUN0Ryw0Q0FBNEMsK0hBQTBDO0FBQ3RGLDRDQUE0QywySEFBd0M7QUFDcEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDhtQkFBOG1CLFlBQVksVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLFdBQVcsS0FBSyxLQUFLLGFBQWEsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksWUFBWSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxxQkFBcUIsTUFBTSxNQUFNLHFCQUFxQixNQUFNLE1BQU0scUJBQXFCLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLFlBQVksTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxZQUFZLE9BQU8sTUFBTSxXQUFXLFdBQVcsUUFBUSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsWUFBWSxNQUFNLEtBQUssTUFBTSxZQUFZLE1BQU0sTUFB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O1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUEsb0I7Ozs7O1dDckJBLG1DOzs7Ozs7Ozs7Ozs7OztBQ0E4QjtBQUNZO0FBQ1o7QUFHOUI1QyxRQUFRLENBQUNxQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZO0VBQ3RELElBQUlsQixrREFBRyxDQUFDLENBQUM7RUFDVCxJQUFJdEIsNERBQUssQ0FBQyxDQUFDO0FBQ2YsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYW1vdHRlZmFiaWVuLy4vc3JjL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vbGFtb3R0ZWZhYmllbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGFtb3R0ZWZhYmllbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbGFtb3R0ZWZhYmllbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2xhbW90dGVmYWJpZW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbGFtb3R0ZWZhYmllbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGFtb3R0ZWZhYmllbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9sYW1vdHRlZmFiaWVuLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2xhbW90dGVmYWJpZW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9sYW1vdHRlZmFiaWVuLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbGFtb3R0ZWZhYmllbi8uL3NyYy9hc3NldHMvanMvY2xhc3MvZGlzcG9uaWJpbGl0eS5qcyIsIndlYnBhY2s6Ly9sYW1vdHRlZmFiaWVuLy4vc3JjL2Fzc2V0cy9qcy9jbGFzcy9uYXYuanMiLCJ3ZWJwYWNrOi8vbGFtb3R0ZWZhYmllbi8uL3NyYy9hc3NldHMvc2Nzcy9zdHlsZS5zY3NzP2M1N2MiLCJ3ZWJwYWNrOi8vbGFtb3R0ZWZhYmllbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sYW1vdHRlZmFiaWVuL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xhbW90dGVmYWJpZW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xhbW90dGVmYWJpZW4vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9sYW1vdHRlZmFiaWVuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGFtb3R0ZWZhYmllbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xhbW90dGVmYWJpZW4vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbGFtb3R0ZWZhYmllbi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9sYW1vdHRlZmFiaWVuL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9sYW1vdHRlZmFiaWVuLy4vc3JjL2Fzc2V0cy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi8uLi9mb250cy9Kb21odXJpYS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLy4uL2ZvbnRzL3JvYm90by50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7XG4vKiBNZWRpYSBzY3JlZW4gKi9cbi8qIGNvbG9ycyAqL1xuLyogU2VjdGlvbiAqL1xuLyogZm9udHMgKi9cbi8qIEd1dHRlcnMgKi9cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxQjFEMjA7XG59XG5oZWFkZXIgbmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFCMUQyMDtcbiAgZGlzcGxheTogbm9uZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5oZWFkZXIgbmF2I25hdl9yZXNwb25zaXZlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cbmhlYWRlciBuYXYjbmF2X3Jlc3BvbnNpdmUgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUIxRDIwO1xufVxuaGVhZGVyIG5hdiNuYXZfcmVzcG9uc2l2ZSB1bCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUIxRDIwO1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIHRyYW5zaXRpb246IHRvcCAwLjNzIGVhc2U7XG4gIHotaW5kZXg6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5oZWFkZXIgbmF2I25hdl9yZXNwb25zaXZlICNidXJnZXItbWVudSB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaGVhZGVyIG5hdiNuYXZfcmVzcG9uc2l2ZSAjYnVyZ2VyLW1lbnUgPiBkaXYge1xuICBhbGw6IGluaGVyaXQ7XG4gIGhlaWdodDogM3B4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5oZWFkZXIgbmF2I25hdl9yZXNwb25zaXZlLnNob3dlZCB1bCB7XG4gIHRvcDogY2FsYygxMDAlICsgMXB4KTtcbn1cbmhlYWRlciBuYXYjbmF2X3Jlc3BvbnNpdmUuc2hvd2VkICNidXJnZXItbWVudSBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpIHJvdGF0ZSg0NWRlZyk7XG59XG5oZWFkZXIgbmF2I25hdl9yZXNwb25zaXZlLnNob3dlZCAjYnVyZ2VyLW1lbnUgZGl2Om50aC1jaGlsZCgyKSB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTtcbn1cbmhlYWRlciBuYXYjbmF2X3Jlc3BvbnNpdmUuc2hvd2VkICNidXJnZXItbWVudSBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KSByb3RhdGUoLTQ1ZGVnKTtcbn1cbmhlYWRlciBuYXYgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5oZWFkZXIgbmF2IHVsIGxpIHtcbiAgcGFkZGluZzogMC41cmVtIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmhlYWRlciBuYXYgdWwgbGkgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuaGVhZGVyIG5hdi5maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAyO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgaGVhZGVyIG5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuICBoZWFkZXIgbmF2I25hdl9yZXNwb25zaXZlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIGhlYWRlciBuYXYgI21haW4tbG9nbyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xuICB9XG4gIGhlYWRlciBuYXYgdWwge1xuICAgIGdhcDogMXJlbTtcbiAgfVxuICBoZWFkZXIgbmF2IHVsIGEge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICB9XG4gIGhlYWRlciBuYXYgdWwgYTpob3ZlciB7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG4gIGhlYWRlciBuYXYgdWwucnMge1xuICAgIGdhcDogMC41cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICB9XG4gIGhlYWRlciBuYXYgdWwucnMgbGkge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNTAlKTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgfVxuICBoZWFkZXIgbmF2ID4gZGl2IHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIGhlYWRlciBuYXYucmVhZHkgdWwucnMgbGkge1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhbGxCb3VuY2U7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA5MDBtcztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yOCwgMC44NCwgMC40MiwgMSk7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgfVxuICBoZWFkZXIgbmF2LnJlYWR5IHVsLnJzIGxpOm50aC1jaGlsZCgxKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbiAgfVxuICBoZWFkZXIgbmF2LnJlYWR5IHVsLnJzIGxpOm50aC1jaGlsZCgyKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xuICB9XG4gIGhlYWRlciBuYXYucmVhZHkgdWwucnMgbGk6bnRoLWNoaWxkKDMpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XG4gIH1cbiAgaGVhZGVyIG5hdi5yZWFkeSB1bC5ycyBsaTpudGgtY2hpbGQoNCkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4zcztcbiAgfVxuICBoZWFkZXIgbmF2LnJlYWR5IHVsLnJzIGxpOm50aC1jaGlsZCg1KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xuICB9XG4gIGhlYWRlciBuYXYucmVhZHkgdWwucnMgbGk6bnRoLWNoaWxkKDYpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XG4gIH1cbiAgaGVhZGVyIG5hdi5yZWFkeSB1bC5ycyBsaTpudGgtY2hpbGQoNykge1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC42cztcbiAgfVxuICBoZWFkZXIgbmF2LnJlYWR5IHVsLnJzIGxpOm50aC1jaGlsZCg4KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjdzO1xuICB9XG4gIGhlYWRlciBuYXYucmVhZHkgdWwucnMgbGk6bnRoLWNoaWxkKDkpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XG4gIH1cbiAgaGVhZGVyIG5hdi5yZWFkeSB1bC5ycyBsaTpudGgtY2hpbGQoMTApIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuOXM7XG4gIH1cbiAgaGVhZGVyIG5hdi5yZWFkeSB1bC5ycyBsaTpudGgtY2hpbGQoMTEpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICB9XG4gIGhlYWRlciBuYXYucmVhZHkgdWwucnMgbGk6bnRoLWNoaWxkKDEyKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxLjFzO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhbGxCb3VuY2Uge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1MCUpO1xuICB9XG4gIDIwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICB9XG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICB9XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiam9taHVyaWFcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwicm9ib3RvXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuaDEsIGgyLCBoMyB7XG4gIGZvbnQtZmFtaWx5OiBcImpvbWh1cmlhXCI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbmgxIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbmgxIHNwYW4ge1xuICBsaW5lLWhlaWdodDogMC42NTtcbn1cbmgxIHNwYW46bnRoLWNoaWxkKDEpIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICNGQTlBMTAsIDUwJSwgI0VCMzczOCA5MCUsICNFQjM3MzggMTAwJSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuaDEgc3BhbjpudGgtY2hpbGQoMikge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgIzAwRTFDRCwgNDAlLCAjNkUzOUQ1IDYwJSwgIzZFMzlENSAxMDAlKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmgyIHtcbiAgbGluZS1oZWlnaHQ6IDAuNzU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG5oMyB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiBcInJvYm90b1wiO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA2MnB4O1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBoMiB7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICB9XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGgzIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gIH1cbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBwIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIGgxIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGdhcDogMC41cmVtO1xuICB9XG59XG4uYnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMC43NXJlbSAycmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwicm9ib3RvXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJ0bi5wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICNGQTlBMTAsIDUwJSwgI0VCMzczOCA5MCUsICNFQjM3MzggMTAwJSk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmJ0bjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG5tYWluIHtcbiAgZ2FwOiAzcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5zZWN0aW9uOm5vdCgubm8tZ3V0dGVycykge1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBzZWN0aW9uOm5vdCgubm8tZ3V0dGVycykge1xuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIHNlY3Rpb246bm90KC5uby1ndXR0ZXJzKSB7XG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xuICB9XG59XG5cbnNlY3Rpb24jcHJlc2VudGF0aW9uICNicmFuZGluZyB7XG4gIHBhZGRpbmc6IDNyZW0gMDtcbn1cbnNlY3Rpb24jcHJlc2VudGF0aW9uICNicmFuZGluZyBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbnNlY3Rpb24jcHJlc2VudGF0aW9uICNicmFuZGluZyAud2FsbGFydCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5zZWN0aW9uI3ByZXNlbnRhdGlvbiAjYnJhbmRpbmcgLm1hdHJvZ25lIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwicm9ib3RvXCI7XG59XG5zZWN0aW9uI3ByZXNlbnRhdGlvbiAjYnJhbmRpbmcgLm1hdHJvZ25lIGRpdi5kaXNwby1ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbnNlY3Rpb24jcHJlc2VudGF0aW9uICNicmFuZGluZyAubWF0cm9nbmUgZGl2LmRpc3BvLWJvZHkgZGl2LmRpc3BvLXN0YXR1cyB7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuc2VjdGlvbiNwcmVzZW50YXRpb24gI2JyYW5kaW5nIC5tYXRyb2duZSBkaXYuZGlzcG8tYm9keSBkaXYuZGlzcG8tc3RhdHVzLnllcyB7XG4gIGJhY2tncm91bmQ6ICM1NkI1M0U7XG59XG5zZWN0aW9uI3ByZXNlbnRhdGlvbiAjYnJhbmRpbmcgLm1hdHJvZ25lIGRpdi5kaXNwby1ib2R5IGRpdi5kaXNwby1zdGF0dXMubm8ge1xuICBiYWNrZ3JvdW5kOiAjQTcwRTBFO1xufVxuc2VjdGlvbiNwcmVzZW50YXRpb24gI3B1cnBvc2Uge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgI0ZBOUExMCwgNTAlLCAjRUIzNzM4IDkwJSwgI0VCMzczOCAxMDAlKTtcbiAgcGFkZGluZzogMS41cmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5zZWN0aW9uI3ByZXNlbnRhdGlvbiAjcHVycG9zZSBpbWcge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGFuaW1hdGlvbjogbnVhZ2VGbG90dGFudCA2cyBjdWJpYy1iZXppZXIoMC40NSwgMC4wNSwgMC41NSwgMC45NSkgaW5maW5pdGU7XG59XG5zZWN0aW9uI3ByZXNlbnRhdGlvbiAjcHVycG9zZSA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDJyZW07XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgc2VjdGlvbiNwcmVzZW50YXRpb24gI2JyYW5kaW5nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBzZWN0aW9uI3ByZXNlbnRhdGlvbiAjYnJhbmRpbmcgKiB7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICBzZWN0aW9uI3ByZXNlbnRhdGlvbiAjYnJhbmRpbmcgLndhbGxhcnQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAwO1xuICAgIHRvcDogLTE3NXB4O1xuICAgIGxlZnQ6IC0xNTBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICBzZWN0aW9uI3ByZXNlbnRhdGlvbiAjYnJhbmRpbmcge1xuICAgIHBhZGRpbmc6IDdyZW0gMDtcbiAgfVxuICBzZWN0aW9uI3ByZXNlbnRhdGlvbiAjYnJhbmRpbmcgPiBkaXYge1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cbn1cblxuQGtleWZyYW1lcyBudWFnZUZsb3R0YW50IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcbiAgfVxuICAyNSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDRweCwgLTZweCk7IC8qIMOXMiAqL1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTRweCwgNHB4KTsgLyogw5cyICovXG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIC0ycHgpOyAvKiDDlzIgKi9cbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XG4gIH1cbn1cbnNlY3Rpb24jd2h5IGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuc2VjdGlvbiN3aHkgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2x1bW4tZ2FwOiAxMHB4O1xuICByb3ctZ2FwOiA1MHB4O1xufVxuc2VjdGlvbiN3aHkgdWwgbGkge1xuICB3aWR0aDogY2FsYyg1MCUgLSA1cHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZ2FwOiAxMHB4O1xufVxuc2VjdGlvbiN3aHkgdWwgbGkgcCB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbnNlY3Rpb24jd2h5IHVsIGxpID4gZGl2OmhhcyhpbWcpIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICNGQTlBMTAsIDUwJSwgI0VCMzczOCA5MCUsICNFQjM3MzggMTAwJSk7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5zZWN0aW9uI3doeSB1bCBsaSA+IGRpdjpoYXMoaW1nKSBpbWcge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xufVxuc2VjdGlvbiN3aHkgdWwgbGk6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgc2VjdGlvbiN3aHkgdWwge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG4gIHNlY3Rpb24jd2h5IHVsIGxpIHtcbiAgICB3aWR0aDogY2FsYygzMy4zMyUgLSAxMHB4KTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgc2VjdGlvbiN3aHkgdWwgbGk6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIH1cbiAgc2VjdGlvbiN3aHkgdWwgbGkgaDMsIHNlY3Rpb24jd2h5IHVsIGxpIHAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBzZWN0aW9uI3doeSB1bCBsaSA+IGRpdjpoYXMoaW1nKSB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuICBzZWN0aW9uI3doeSB1bCBsaSA+IGRpdjpoYXMoaW1nKSBpbWcge1xuICAgIGhlaWdodDogNDhweDtcbiAgICB3aWR0aDogNDhweDtcbiAgfVxufVxuc2VjdGlvbiN3b3JraW5nX3dpdGhfbWUge1xuICAvKiBDb2lucyBkdSBjZXJjbGUgKi9cbn1cbnNlY3Rpb24jd29ya2luZ193aXRoX21lIC5jZXJjbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbn1cbnNlY3Rpb24jd29ya2luZ193aXRoX21lIC5jZXJjbGUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5zZWN0aW9uI3dvcmtpbmdfd2l0aF9tZSAuY2VyY2xlIGltZzpudGgtY2hpbGQoMSkge1xuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDE7XG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDAlO1xufVxuc2VjdGlvbiN3b3JraW5nX3dpdGhfbWUgLmNlcmNsZSBpbWc6bnRoLWNoaWxkKDIpIHtcbiAgZ3JpZC1jb2x1bW46IDI7XG4gIGdyaWQtcm93OiAxO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwMCU7XG59XG5zZWN0aW9uI3dvcmtpbmdfd2l0aF9tZSAuY2VyY2xlIGltZzpudGgtY2hpbGQoMykge1xuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDI7XG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMDAlO1xufVxuc2VjdGlvbiN3b3JraW5nX3dpdGhfbWUgLmNlcmNsZSBpbWc6bnRoLWNoaWxkKDQpIHtcbiAgZ3JpZC1jb2x1bW46IDI7XG4gIGdyaWQtcm93OiAyO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwMCU7XG59XG5zZWN0aW9uI3dvcmtpbmdfd2l0aF9tZSBkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmh0bWwsIGJvZHkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkUzMDM1O1xufVxuXG5odG1sIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5odG1sOmhhcyhuYXYuZml4ZWQpIHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9jb21wb25lbnRzL25hdi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvY29tcG9uZW50cy9mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvbWl4aW5zL2ZvbnQtc2l6ZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL2NvbXBvbmVudHMvYnV0dG9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9jb21wb25lbnRzL3NlY3Rpb24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL21peGlucy9ndXR0ZXJzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9zZWN0aW9ucy9wcmVzZW50YXRpb24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL3NlY3Rpb25zL3doeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3Mvc2VjdGlvbnMvd29ya2luZ193aXRoX21lLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQWhCLGlCQUFBO0FBT0EsV0FBQTtBQWFBLFlBQUE7QUFHQSxVQUFBO0FBZ0NBLFlBQUE7QUNyREE7RUFDSSx5QkRVTTtBRExWO0FFSEk7RUFzRUks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QUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUh1TEo7O0FHcExBO0VBQ0ksWUFBQTtBSHVMSjs7QUdwTEE7RUFDSSxxQkY3QmE7RUU4QmIsWUFBQTtBSHVMSjs7QUduTEU7RUN0REksZUhzQ087QUR1TWI7O0FHdkxFO0VDdERJLGVIc0NPO0FEMk1iO0FJN09NO0VEa0RKO0lDakRNLGVIaUNLO0VEK01YO0FBQ0Y7O0FHaE1FO0VDdERJLGVIc0NPO0FEb05iO0FJdFBNO0VEa0RKO0lDakRNLGVIaUNLO0VEd05YO0FBQ0Y7O0FHek1FO0VDdERJLGVIc0NPO0FENk5iO0FJL1BNO0VEa0RKO0lDakRNLGVIaUNLO0VEaU9YO0FBQ0Y7QUlwUU07RURrREo7SUNqRE0sZUhpQ0s7RURzT1g7QUFDRjs7QUdqTkE7RUFDSTtJQUNJLG1CQUFBO0lBQ0EsV0FBQTtFSG9OTjtBQUNGO0FLelJBO0VBS0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkphYTtFSVpiLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUx1Uko7QUt0U0k7RUFDSSw2RUphVTtBRDJSbEI7QUt4Ukk7RUFDSTtJQUNJLFlBQUE7SUFDQSxlQUFBO0VMMFJWO0FBQ0Y7O0FNL1NBO0VBQ0ksU0xpQmE7RUtoQmIsYUFBQTtFQUNBLHNCQUFBO0FOa1RKOztBTTlTSTtFQ0ZFLG1CTmdEUTtFTS9DUixvQk4rQ1E7QURxUWQ7QU9qVE07RURGRjtJQ0dJLGlCTjJDTTtJTTFDTixrQk4wQ007RUQwUVo7QUFDRjtBT3ZUTTtFREZGO0lDR0ksaUJOMkNNO0lNMUNOLGtCTjBDTTtFRGdSWjtBQUNGOztBUXRVSTtFQUNFLGVBQUE7QVJ5VU47QVF2VU07RUFDRSxtQkFBQTtBUnlVUjtBUXRVTTtFQUNFLGFBQUE7QVJ3VVI7QVFyVU07RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7RUFDQSxxQlBPUztBRCtUakI7QVFyVVE7RUFDRSxhQUFBO0FSdVVWO0FRdFVVO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FSd1VaO0FRdFVZO0VBQ0ksbUJQaEJOO0FEd1ZWO0FRclVZO0VBQ0ksbUJQbkJSO0FEMFZSO0FRaFVJO0VBQ0UsNkVQekJZO0VPMEJaLGVBQUE7RUFFQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FSaVVOO0FRL1RNO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx5RUFBQTtBUmlVUjtBUTlUTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FSZ1VSO0FRNVRFO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLGdCQUFBO0VSOFRKO0VRNVRJO0lBQ0UsVUFBQTtFUjhUTjtFUTNUSTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLHdCQUFBO0VSNlROO0FBQ0Y7QVF6VEU7RUFDRTtJQUNFLGVBQUE7RVIyVEo7RVExVEk7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RVI0VE47QUFDRjs7QVF2VEE7RUFDRTtJQUNFLDhCQUFBO0VSMFRGO0VReFRBO0lBQ0UsK0JBQUEsRUFBQSxPQUFBO0VSMFRGO0VReFRBO0lBQ0UsK0JBQUEsRUFBQSxPQUFBO0VSMFRGO0VReFRBO0lBQ0UsK0JBQUEsRUFBQSxPQUFBO0VSMFRGO0VReFRBO0lBQ0UsOEJBQUE7RVIwVEY7QUFDRjtBU2phSTtFQUNJLGtCQUFBO0VBQ0EsbUJSd0NXO0FEMlhuQjtBU2hhSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFyQks7RUFzQkwsYUFyQks7QVR1YmI7QVNoYVE7RUFDSSxzQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FUa2FaO0FTL1pZO0VBQ0ksa0JBQUE7QVRpYWhCO0FTOVpZO0VBQ0ksNkVSdkJFO0VRd0JGLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FUZ2FoQjtBUy9aZ0I7RUFDSSxZQTNDRztFQTRDSCxXQTVDRztBVDZjdkI7QVM1Wlk7RUFDSSxnQkFBQTtFQUNBLDJCQUFBO0FUOFpoQjs7QVN2WkE7RUFDSTtJQUNJLHVCQUFBO0VUMFpOO0VTelpNO0lBQ0ksMEJBQUE7SUFDQSw4QkFBQTtJQUNBLHVCQUFBO0VUMlpWO0VTMVpVO0lBQ0ksOEJBQUE7RVQ0WmQ7RVN6WlU7SUFDSSxrQkFBQTtFVDJaZDtFU3haVTtJQUNJLGFBQUE7RVQwWmQ7RVN6WmM7SUFDSSxZQTNFTDtJQTRFSyxXQTVFTDtFVHVlYjtBQUNGO0FVN2VBO0VBa0JJLG9CQUFBO0FWOGRKO0FVL2VJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtBVmlmTjtBVTllSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QVZnZk47QVU1ZUk7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtEQUFBO0VBQ0EsNEJBQUE7QVY4ZU47QVUzZUk7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtEQUFBO0VBQ0EsNkJBQUE7QVY2ZU47QVUxZUk7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtEQUFBO0VBQ0EsK0JBQUE7QVY0ZU47QVV6ZUk7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtEQUFBO0VBQ0EsZ0NBQUE7QVYyZU47QVV4ZUk7RUFDSSxrQkFBQTtBVjBlUjs7QUEvZ0JBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFraEJKOztBQWhoQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQ05HO0FEeWhCUDs7QUFoaEJBO0VBQ0ksdUJBQUE7QUFtaEJKO0FBbGhCSTtFQUNJLGdCQUFBO0FBb2hCUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlICd2YXJpYWJsZXMnIGFzICo7XFxyXFxuXFxyXFxuQHVzZSAnY29tcG9uZW50cy9uYXYnO1xcclxcbkB1c2UgJ2NvbXBvbmVudHMvZm9udHMnO1xcclxcbkB1c2UgJ2NvbXBvbmVudHMvYnV0dG9uJztcXHJcXG5AdXNlICdjb21wb25lbnRzL3NlY3Rpb24nO1xcclxcblxcclxcbkB1c2UgJ3NlY3Rpb25zL3ByZXNlbnRhdGlvbic7XFxyXFxuQHVzZSAnc2VjdGlvbnMvd2h5JztcXHJcXG5AdXNlICdzZWN0aW9ucy93b3JraW5nX3dpdGhfbWUnO1xcclxcblxcclxcbip7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuaHRtbCwgYm9keXtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcms7XFxyXFxufVxcclxcblxcclxcbmh0bWx7XFxyXFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbiAgICAmOmhhcyhuYXYuZml4ZWQpe1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNzVweDtcXHJcXG4gICAgfVxcclxcbn1cIixcIi8qIE1lZGlhIHNjcmVlbiAqL1xcclxcbiRzbS1zY3JlZW46IDU3NnB4O1xcclxcbiRtZC1zY3JlZW46IDc2OHB4O1xcclxcbiRsZy1zY3JlZW46IDk5MnB4O1xcclxcbiR4bC1zY3JlZW46IDEyMDBweDtcXHJcXG4keHhsLXNjcmVlbjogMTQwMHB4O1xcclxcblxcclxcbi8qIGNvbG9ycyAqL1xcclxcbiRwcmltYXJ5LTE6ICNGQTlBMTA7XFxyXFxuJHByaW1hcnktMjogI0VCMzczODtcXHJcXG4kc2Vjb25kYXJ5LTE6ICMwMEUxQ0Q7XFxyXFxuJHNlY29uZGFyeS0yOiAjNkUzOUQ1O1xcclxcbiRkYXJrOiAjMkUzMDM1O1xcclxcbiRkYXJrZXN0OiAjMUIxRDIwO1xcclxcbiRzdWNjZXNzOiAjNTZCNTNFO1xcclxcbiRlcnJvcjogI0E3MEUwRTtcXHJcXG5cXHJcXG4kZGVncmFkZS1wcmltYXJ5OiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgJHByaW1hcnktMSwgNTAlLCAkcHJpbWFyeS0yIDkwJSwgJHByaW1hcnktMiAxMDAlKTtcXHJcXG4kZGVncmFkZS1zZWNvbmRhcnk6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAkc2Vjb25kYXJ5LTEsIDQwJSwgJHNlY29uZGFyeS0yIDYwJSwgJHNlY29uZGFyeS0yIDEwMCUpO1xcclxcblxcclxcbi8qIFNlY3Rpb24gKi8gXFxyXFxuJG1hcmdpbi1zZWN0aW9uOiAzcmVtO1xcclxcblxcclxcbi8qIGZvbnRzICovXFxyXFxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xcclxcbiRmb250LXdlaWdodC1ib2xkOiA3MDA7XFxyXFxuJG1haW4tZm9udDogXFxcImpvbWh1cmlhXFxcIjtcXHJcXG4kc2Vjb25kYXJ5LWZvbnQ6IFxcXCJyb2JvdG9cXFwiO1xcclxcblxcclxcbiRoMS1mb250LXNpemU6IChcXHJcXG4gICRzbS1zY3JlZW46IDYycHgsXFxyXFxuKTs7XFxyXFxuJGgyLWZvbnQtc2l6ZTogKFxcclxcbiAgJHNtLXNjcmVlbjogNDBweCxcXHJcXG4gICRtZC1zY3JlZW46IDQ4cHgsXFxyXFxuKTtcXHJcXG4kaDMtZm9udC1zaXplOiAoXFxyXFxuICAkc20tc2NyZWVuOiAyNHB4LFxcclxcbiAgJG1kLXNjcmVlbjogMzJweCxcXHJcXG4pO1xcclxcbiRwLWZvbnQtc2l6ZTogKFxcclxcbiAgJHNtLXNjcmVlbjogMTFweCxcXHJcXG4gICRtZC1zY3JlZW46IDEzcHgsXFxyXFxuICAkbGctc2NyZWVuOiAxNnB4LFxcclxcbik7XFxyXFxuJGZvbnQtc2l6ZXM6IChcXHJcXG4gIGgxOiAkaDEtZm9udC1zaXplLFxcclxcbiAgaDI6ICRoMi1mb250LXNpemUsXFxyXFxuICBoMzogJGgzLWZvbnQtc2l6ZSxcXHJcXG4gIHA6ICRwLWZvbnQtc2l6ZVxcclxcbik7XFxyXFxuXFxyXFxuJGgyLW1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuXFxyXFxuXFxyXFxuLyogR3V0dGVycyAqL1xcclxcbiRndXR0ZXJzLW1hcDogKFxcclxcbiAgJHNtLXNjcmVlbjogLjVyZW0sXFxyXFxuICAkbWQtc2NyZWVuOiAycmVtLFxcclxcbiAgJGxnLXNjcmVlbjogM3JlbVxcclxcbik7XCIsXCJAdXNlICcuLi92YXJpYWJsZXMnIGFzICo7XFxyXFxuXFxyXFxuaGVhZGVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya2VzdDtcXHJcXG5cXHJcXG4gICAgbmF2e1xcclxcbiAgICAgICAgJiNuYXZfcmVzcG9uc2l2ZXtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgICAgICAgICBkaXZ7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmtlc3Q7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIHVse1xcclxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgICAgIHRvcDogLTIwMCU7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmtlc3Q7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdG9wIC4zcyBlYXNlO1xcclxcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAwO1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAjYnVyZ2VyLW1lbnV7XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICA+IGRpdntcXHJcXG4gICAgICAgICAgICAgICAgICAgIGFsbDogaW5oZXJpdDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogM3B4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAmLnNob3dlZHtcXHJcXG4gICAgICAgICAgICAgICAgdWx7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0b3A6IGNhbGMoMTAwJSArIDFweCk7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgI2J1cmdlci1tZW51e1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGl2Om50aC1jaGlsZCgxKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpIHJvdGF0ZSg0NWRlZyk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICBkaXY6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgZGl2Om50aC1jaGlsZCgzKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KSByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmtlc3Q7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgdWx7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgICAgICAgICAgbGkge1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNXJlbSAwO1xcclxcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIGF7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICYuZml4ZWR7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICAgICAgei1pbmRleDogMjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogJGxnLXNjcmVlbil7XFxyXFxuICAgIGhlYWRlciBuYXZ7XFxyXFxuICAgICAgICAmI25hdl9yZXNwb25zaXZle1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcclxcblxcclxcbiAgICAgICAgI21haW4tbG9nb3tcXHJcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICB1bHtcXHJcXG4gICAgICAgICAgICBnYXA6IDFyZW07XFxyXFxuICAgICAgICAgICAgYXtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgZWFzZTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgJjpob3ZlcntcXHJcXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC43O1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICYucnN7XFxyXFxuICAgICAgICAgICAgICAgIGdhcDogLjVyZW07XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2U7XFxyXFxuICAgICAgICAgICAgICAgIGxpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1MCUpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgZWFzZTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgID4gZGl2e1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmLnJlYWR5IHtcXHJcXG4gICAgICAgICAgICB1bC5ycyB7XFxyXFxuICAgICAgICAgICAgICAgIGxpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmFsbEJvdW5jZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogOTAwbXM7XFxyXFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjI4LC44NCwuNDIsMSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoOyBcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDEyIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxpOm50aC1jaGlsZCgjeyRpfSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogKCRpIC0gMSkgKiAwLjFzO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFsbEJvdW5jZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTUwJSk7XFxyXFxuICB9XFxyXFxuICAyMCUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpOyBcXHJcXG4gIH1cXHJcXG4gIDYwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcclxcbiAgfVxcclxcbn1cIixcIkB1c2UgJy4uL3ZhcmlhYmxlcycgYXMgKjtcXHJcXG5AdXNlICcuLi9taXhpbnMvZm9udC1zaXplcy5zY3NzJyBhcyAqO1xcclxcblxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJG1haW4tZm9udDtcXHJcXG4gICAgc3JjOiB1cmwoXFxcIi4vLi4vZm9udHMvSm9taHVyaWEudHRmXFxcIik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcInJvYm90b1xcXCI7XFxyXFxuICAgIHNyYzogdXJsKFxcXCIuLy4uL2ZvbnRzL3JvYm90by50dGZcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuaDEsIGgyLCBoM3tcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRtYWluLWZvbnQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbmgxe1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcbiAgICBzcGFue1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDAuNjU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgc3BhbjpudGgtY2hpbGQoMSl7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAkZGVncmFkZS1wcmltYXJ5O1xcclxcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIHNwYW46bnRoLWNoaWxkKDIpe1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogJGRlZ3JhZGUtc2Vjb25kYXJ5O1xcclxcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuaDJ7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAwLjc1O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDN7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxucHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5AZWFjaCAkZWxlbWVudCwgJHNpemVzIGluICRmb250LXNpemVzIHtcXHJcXG4gICN7JGVsZW1lbnR9IHtcXHJcXG4gICAgQGluY2x1ZGUgcmVzcG9uc2l2ZS1mb250LXNpemVzKCRzaXplcyk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAkbGctc2NyZWVuKXtcXHJcXG4gICAgaDF7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAgZ2FwOiAuNXJlbTtcXHJcXG4gICAgfVxcclxcbn1cIixcIkBtaXhpbiByZXNwb25zaXZlLWZvbnQtc2l6ZXMoJHNpemVzKSB7XFxyXFxuICAkcHJldi1zaXplOiBudWxsO1xcclxcbiAgJGZpcnN0OiB0cnVlO1xcclxcblxcclxcbiAgQGVhY2ggJGJyZWFrcG9pbnQsICRzaXplIGluICRzaXplcyB7XFxyXFxuICAgIEBpZiAkZmlyc3Qge1xcclxcbiAgICAgIC8vIFZhbGV1ciBwYXIgZMOpZmF1dCAoc2FucyBtZWRpYSBxdWVyeSlcXHJcXG4gICAgICBmb250LXNpemU6ICRzaXplO1xcclxcbiAgICAgICRmaXJzdDogZmFsc2U7XFxyXFxuICAgIH0gQGVsc2UgaWYgJHNpemUgIT0gJHByZXYtc2l6ZSB7XFxyXFxuICAgICAgLy8gTWVkaWEgcXVlcnkgc2V1bGVtZW50IHNpIGxhIHRhaWxsZSBjaGFuZ2VcXHJcXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogI3skYnJlYWtwb2ludH0pIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogJHNpemU7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICRwcmV2LXNpemU6ICRzaXplO1xcclxcbiAgfVxcclxcbn1cIixcIkB1c2UgJy4uL3ZhcmlhYmxlcycgYXMgKjtcXHJcXG5cXHJcXG4uYnRue1xcclxcbiAgICAmLnByaW1hcnl7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAkZGVncmFkZS1wcmltYXJ5O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgZWFzZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcGFkZGluZzogLjc1cmVtIDJyZW07XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRsZy1zY3JlZW4pe1xcclxcbiAgICAgICAgJjpob3ZlcntcXHJcXG4gICAgICAgICAgICBvcGFjaXR5OiAuODtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsXCJAdXNlICcuLi92YXJpYWJsZXMnIGFzICo7IFxcclxcbkB1c2UgJy4uL21peGlucy9ndXR0ZXJzLnNjc3MnIGFzICo7IFxcclxcblxcclxcbm1haW57XFxyXFxuICAgIGdhcDogJG1hcmdpbi1zZWN0aW9uO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9ue1xcclxcbiAgICAmOm5vdCgubm8tZ3V0dGVycyl7XFxyXFxuICAgICAgICBAaW5jbHVkZSBnZW5lcmF0ZS1ndXR0ZXJzKG1hcmdpbi1sZWZ0LCBtYXJnaW4tcmlnaHQpO1xcclxcbiAgICB9XFxyXFxufVwiLFwiQHVzZSAnLi4vdmFyaWFibGVzJyBhcyAqOyBcXHJcXG5cXHJcXG5AbWl4aW4gZ2VuZXJhdGUtZ3V0dGVycygkcHJvcGVydHk6IHBhZGRpbmctbGVmdCwgJHByb3BlcnR5MjogcGFkZGluZy1yaWdodCkge1xcclxcbiAgJGZpcnN0OiB0cnVlO1xcclxcbiAgJHByZXY6IG51bGw7XFxyXFxuXFxyXFxuICBAZWFjaCAkYnJlYWtwb2ludCwgJGd1dHRlciBpbiAkZ3V0dGVycy1tYXAge1xcclxcbiAgICBAaWYgJGZpcnN0IHtcXHJcXG4gICAgICAjeyRwcm9wZXJ0eX06ICRndXR0ZXI7XFxyXFxuICAgICAgI3skcHJvcGVydHkyfTogJGd1dHRlcjtcXHJcXG4gICAgICAkZmlyc3Q6IGZhbHNlO1xcclxcbiAgICB9IEBlbHNlIGlmICRndXR0ZXIgIT0gJHByZXYge1xcclxcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAjeyRicmVha3BvaW50fSkge1xcclxcbiAgICAgICAgI3skcHJvcGVydHl9OiAkZ3V0dGVyO1xcclxcbiAgICAgICAgI3skcHJvcGVydHkyfTogJGd1dHRlcjtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgJHByZXY6ICRndXR0ZXI7XFxyXFxuICB9XFxyXFxufVwiLFwiQHVzZSAnLi4vdmFyaWFibGVzJyBhcyAqO1xcclxcblxcclxcbnNlY3Rpb24jcHJlc2VudGF0aW9ue1xcclxcbiAgICAjYnJhbmRpbmd7XFxyXFxuICAgICAgcGFkZGluZzogM3JlbSAwO1xcclxcblxcclxcbiAgICAgIHB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAud2FsbGFydHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5tYXRyb2duZXtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250O1xcclxcbiAgICAgICAgZGl2LmRpc3BvLWJvZHl7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgIGRpdi5kaXNwby1zdGF0dXN7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuXFxyXFxuICAgICAgICAgICAgJi55ZXMge1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiRzdWNjZXNzO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAmLm5ve1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiRlcnJvcjtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgIH1cXHJcXG4gICAgI3B1cnBvc2V7XFxyXFxuICAgICAgYmFja2dyb3VuZDogJGRlZ3JhZGUtcHJpbWFyeTtcXHJcXG4gICAgICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuXFxyXFxuICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gICAgICBpbWd7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICAgICAgYW5pbWF0aW9uOiBudWFnZUZsb3R0YW50IDZzIGN1YmljLWJlemllcigwLjQ1LCAwLjA1LCAwLjU1LCAwLjk1KSBpbmZpbml0ZTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgPiBkaXZ7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgZ2FwOiAycmVtO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogJG1kLXNjcmVlbil7XFxyXFxuICAgICNicmFuZGluZ3tcXHJcXG4gICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgIFxcclxcbiAgICAgICp7XFxyXFxuICAgICAgICB6LWluZGV4OiAxO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAud2FsbGFydHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XFxyXFxuICAgICAgICB6LWluZGV4OiAwO1xcclxcbiAgICAgICAgdG9wOi0xNzVweDtcXHJcXG4gICAgICAgIGxlZnQ6LTE1MHB4O1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogJGxnLXNjcmVlbil7XFxyXFxuICAgICNicmFuZGluZ3tcXHJcXG4gICAgICBwYWRkaW5nOiA3cmVtIDA7XFxyXFxuICAgICAgPiBkaXYge1xcclxcbiAgICAgICAgd2lkdGg6IDc1JTtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn0gXFxyXFxuXFxyXFxuQGtleWZyYW1lcyBudWFnZUZsb3R0YW50IHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xcclxcbiAgfVxcclxcbiAgMjUlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNHB4LCAtNnB4KTsgLyogw5cyICovXFxyXFxuICB9XFxyXFxuICA1MCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LCA0cHgpOyAvKiDDlzIgKi9cXHJcXG4gIH1cXHJcXG4gIDc1JSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgLTJweCk7IC8qIMOXMiAqL1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXCIsXCJAdXNlICcuLi92YXJpYWJsZXMnIGFzICo7IFxcclxcblxcclxcbiRnYXAtbGlzdC14OiAxMHB4O1xcclxcbiRnYXAtbGlzdC15OiA1MHB4O1xcclxcbiRyZXNwb25zaXZlLWljb24tc2l6ZTogMjRweDtcXHJcXG4kbGctaWNvbi1zaXplOiA0OHB4O1xcclxcbiRyZXNwb25zaXZlLWl0ZW0tc2l6ZTogNTAlO1xcclxcbiRsZy1pdGVtLXNpemU6IDMzLjMzJTtcXHJcXG5cXHJcXG5zZWN0aW9uI3doeXtcXHJcXG4gICAgaDJ7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAkaDItbWFyZ2luLWJvdHRvbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB1bHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBjb2x1bW4tZ2FwOiAkZ2FwLWxpc3QteDtcXHJcXG4gICAgICAgIHJvdy1nYXA6ICRnYXAtbGlzdC15O1xcclxcblxcclxcbiAgICAgICAgbGl7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoJHJlc3BvbnNpdmUtaXRlbS1zaXplIC0gKCRnYXAtbGlzdC14LzIpKTtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgICAgICAgICBnYXA6IDEwcHg7XFxyXFxuICAgICAgICAgICAgXFxyXFxuXFxyXFxuICAgICAgICAgICAgcHtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICA+IGRpdjpoYXMoaW1nKXtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGRlZ3JhZGUtcHJpbWFyeTtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICBpbWd7XFxyXFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICRyZXNwb25zaXZlLWljb24tc2l6ZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAkcmVzcG9uc2l2ZS1pY29uLXNpemU7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpudGgtY2hpbGQoZXZlbil7XFxyXFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6ICRsZy1zY3JlZW4pe1xcclxcbiAgICBzZWN0aW9uI3doeSB1bCB7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgICAgIGxpIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogY2FsYygkbGctaXRlbS1zaXplIC0gJGdhcC1saXN0LXgpO1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAmOm50aC1jaGlsZChldmVuKXtcXHJcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICBoMywgcHtcXHJcXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICA+IGRpdjpoYXMoaW1nKXtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgaW1ne1xcclxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkbGctaWNvbi1zaXplO1xcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICRsZy1pY29uLXNpemU7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XCIsXCJzZWN0aW9uI3dvcmtpbmdfd2l0aF9tZXtcXHJcXG4gICAgLmNlcmNsZSB7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2VyY2xlIGltZyB7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8qIENvaW5zIGR1IGNlcmNsZSAqL1xcclxcbiAgICAuY2VyY2xlIGltZzpudGgtY2hpbGQoMSkge1xcclxcbiAgICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgICAgIGdyaWQtcm93OiAxO1xcclxcbiAgICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUpO1xcclxcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNlcmNsZSBpbWc6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gICAgICBncmlkLXJvdzogMTtcXHJcXG4gICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKTtcXHJcXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2VyY2xlIGltZzpudGgtY2hpbGQoMykge1xcclxcbiAgICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgICAgIGdyaWQtcm93OiAyO1xcclxcbiAgICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUpO1xcclxcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNlcmNsZSBpbWc6bnRoLWNoaWxkKDQpIHtcXHJcXG4gICAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gICAgICBncmlkLXJvdzogMjtcXHJcXG4gICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKTtcXHJcXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBkaXZ7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwb3tcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5yaW5nU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlY3Rpb24jcHJlc2VudGF0aW9uIC5kaXNwby1ib2R5IC5kaXNwby1zdGF0dXNcIik7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlY3Rpb24jcHJlc2VudGF0aW9uIC5kaXNwby1ib2R5IC5kaXNwby1tZXNzYWdlXCIpO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXllcyA9IFwiRGlzcG9uaWJsZSBkw6hzIGF1am91cmQnaHVpXCI7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlbm8gPSBcIkFjdHVlbGxlbWVudCBlbiBtaXNzaW9uXCI7XHJcbiAgICAgICAgdGhpcy5pbWlkaXNwbyA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tFbGVtZW50cygpXHJcbiAgICAgICAgdGhpcy5kaXNwbGF5U3RhdHVzKClcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0VsZW1lbnRzKCl7XHJcbiAgICAgICAgaWYoIXRoaXMucmluZ1N0YXR1cyB8fCAhdGhpcy5tZXNzYWdlU3RhdHVzKXtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTGVzIGRvbm7DqWVzIGpzb24gZXQgbGVzIMOpbMOpbWVudHMgSFRNTCBzb250IG9ibGlnYXRvaXJlcyAhXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlTdGF0dXMoKXtcclxuICAgICAgICBsZXQgdHJhbnNsYXRlRGlzcG8gPSB0aGlzLmltaWRpc3BvID09PSB0cnVlID8gXCJ5ZXNcIiA6IFwibm9cIjtcclxuICAgICAgICBsZXQgbWVzc2FnZURpc3BvID0gdGhpcy5pbWlkaXNwbyA9PT0gdHJ1ZSA/IHRoaXMubWVzc2FnZXllcyA6IHRoaXMubWVzc2FnZW5vO1xyXG5cclxuICAgICAgICBpZighdGhpcy5yaW5nU3RhdHVzLmNsYXNzTGlzdC5jb250YWlucyh0cmFuc2xhdGVEaXNwbykpe1xyXG4gICAgICAgICAgICB0aGlzLnJpbmdTdGF0dXMuY2xhc3NMaXN0LmFkZCh0cmFuc2xhdGVEaXNwbylcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlU3RhdHVzLmlubmVySFRNTCA9IG1lc3NhZ2VEaXNwb1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2e1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLm5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XHJcbiAgICAgICAgdGhpcy5uYXZSZXNwb25zaXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdiNuYXZfcmVzcG9uc2l2ZVwiKVxyXG4gICAgICAgIHRoaXMuYnVyZ2VyQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXJnZXItbWVudVwiKTtcclxuICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzTmFtZSA9IFwic2hvd2VkXCI7XHJcbiAgICAgICAgdGhpcy5kZWxheUFuaW1ScyA9IC4zOyAvLyBUaW1lIHRvIHNlY29uZFxyXG4gICAgICAgIHRoaXMubmF2Rml4ZWRUaHJlc2hvbGQgPSA3NTtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCl7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCB7cmVzdWx0LCBtZXNzYWdlfSA9IHRoaXMuY2hlY2tOYXZpZ2F0aW9uKClcclxuICAgICAgICAgICAgaWYoIXJlc3VsdCkgdGhyb3cgRXJyb3IobWVzc2FnZSlcclxuXHJcbiAgICAgICAgICAgIC8vIE9uIGRvbm5lIGF1IGJvdXRvbiBidXJnZXIgbGEgY2FwYWNpdMOpIMOgIG1vbnRyZXIgbGUgbWVudVxyXG4gICAgICAgICAgICB0aGlzLm5hdlJlc3BvbnNpdmVPcGVuYWJsZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldE5hdlJlYWR5KCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJldmVudFdpbmRvd1Njcm9sbCgpO1xyXG4gICAgICAgIH0gY2F0Y2goZSl7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja05hdmlnYXRpb24oKXtcclxuICAgICAgICAvLyBGYWxzZSBzaSBhdWN1bmUgbmF2aWdhdGlvbiByZXRyb3V2w6llXHJcbiAgICAgICAgaWYoIXRoaXMubmF2IHx8IHRoaXMubmF2UmVzcG9uc2l2ZSkgcmV0dXJuIHtyZXN1bHQ6IHRydWUsIG1lc3NhZ2U6IFwiSWwgbWFucXVlIGF1IG1vaW5zIHVuZSBuYXZpZ2F0aW9uXCJ9O1xyXG4gICAgICAgIGlmKCF0aGlzLmJ1cmdlckJ1dHRvbikgcmV0dXJuIHtyZXN1bHQ6IGZhbHNlLCBtZXNzYWdlOiBcIkJvdXRvbiBidXJnZXIgbm9uIHByw6lzZW50XCJ9O1xyXG5cclxuICAgICAgICByZXR1cm4ge3Jlc3VsdDogdHJ1ZSwgbWVzc2FnZTogXCJPS1wifTtcclxuICAgIH1cclxuXHJcbiAgICBuYXZSZXNwb25zaXZlT3BlbmFibGUoKXtcclxuICAgICAgICB0aGlzLmJ1cmdlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRUb1RvZ2dsZSA9IHRoaXMubmF2UmVzcG9uc2l2ZVxyXG4gICAgICAgICAgICBpZih0YXJnZXRUb1RvZ2dsZS5jbGFzc0xpc3QuY29udGFpbnModGhpcy50b2dnbGVDbGFzc05hbWUpKXtcclxuICAgICAgICAgICAgICAgIHRhcmdldFRvVG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUodGhpcy50b2dnbGVDbGFzc05hbWUpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRUb1RvZ2dsZS5jbGFzc0xpc3QuYWRkKHRoaXMudG9nZ2xlQ2xhc3NOYW1lKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzZXROYXZSZWFkeSgpe1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5hdi5jbGFzc0xpc3QuYWRkKFwicmVhZHlcIilcclxuICAgICAgICB9LCB0aGlzLmRlbGF5QW5pbVJzICogMTAwMClcclxuICAgIH1cclxuXHJcbiAgICBwcmV2ZW50V2luZG93U2Nyb2xsKCl7XHJcbiAgICAgICAgbGV0IHRpY2tpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aWNraW5nKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgPiB0aGlzLm5hdkZpeGVkVGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2LmNsYXNzTGlzdC5hZGQoJ2ZpeGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2UmVzcG9uc2l2ZS5jbGFzc0xpc3QuYWRkKCdmaXhlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubmF2UmVzcG9uc2l2ZS5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aWNraW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRpY2tpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoL15ibG9iOi8sIFwiXCIpLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLy4uL3Njc3Mvc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCBEaXNwbyBmcm9tICcuL2NsYXNzL2Rpc3BvbmliaWxpdHknO1xyXG5pbXBvcnQgTmF2IGZyb20gJy4vY2xhc3MvbmF2JztcclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBuZXcgTmF2KClcclxuICAgIG5ldyBEaXNwbygpXHJcbn0pOyJdLCJuYW1lcyI6WyJEaXNwbyIsIl9jbGFzc0NhbGxDaGVjayIsInJpbmdTdGF0dXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZXNzYWdlU3RhdHVzIiwibWVzc2FnZXllcyIsIm1lc3NhZ2VubyIsImltaWRpc3BvIiwiY2hlY2tFbGVtZW50cyIsImRpc3BsYXlTdGF0dXMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIkVycm9yIiwidHJhbnNsYXRlRGlzcG8iLCJtZXNzYWdlRGlzcG8iLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCIsImlubmVySFRNTCIsImRlZmF1bHQiLCJOYXYiLCJuYXYiLCJuYXZSZXNwb25zaXZlIiwiYnVyZ2VyQnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b2dnbGVDbGFzc05hbWUiLCJkZWxheUFuaW1ScyIsIm5hdkZpeGVkVGhyZXNob2xkIiwiaW5pdCIsIl90aGlzJGNoZWNrTmF2aWdhdGlvbiIsImNoZWNrTmF2aWdhdGlvbiIsInJlc3VsdCIsIm1lc3NhZ2UiLCJuYXZSZXNwb25zaXZlT3BlbmFibGUiLCJzZXROYXZSZWFkeSIsInByZXZlbnRXaW5kb3dTY3JvbGwiLCJlIiwiX3RoaXMiLCJhZGRFdmVudExpc3RlbmVyIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXRUb1RvZ2dsZSIsInJlbW92ZSIsIl90aGlzMiIsInNldFRpbWVvdXQiLCJfdGhpczMiLCJ0aWNraW5nIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2Nyb2xsWSJdLCJzb3VyY2VSb290IjoiIn0=