/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/assets/scripts/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/scripts/App.js":
/*!***********************************!*\
  !*** ./app/assets/scripts/App.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _MobileMenu = __webpack_require__(/*! ./modules/MobileMenu.js */ \"./app/assets/scripts/modules/MobileMenu.js\");\n\nvar _MobileMenu2 = _interopRequireDefault(_MobileMenu);\n\nvar _RevealOnScroll = __webpack_require__(/*! ./modules/RevealOnScroll.js */ \"./app/assets/scripts/modules/RevealOnScroll.js\");\n\nvar _RevealOnScroll2 = _interopRequireDefault(_RevealOnScroll);\n\nvar _Modal = __webpack_require__(/*! ./modules/Modal.js */ \"./app/assets/scripts/modules/Modal.js\");\n\nvar _Modal2 = _interopRequireDefault(_Modal);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mobileMenu = new _MobileMenu2.default();\nvar revealOnScroll = new _RevealOnScroll2.default();\nvar modal = new _Modal2.default();\n\nAOS.init();\nfunction alerttt() {\n\talert('hi');\n};\n\nfunction isInViewport(element) {\n\tvar rect = element.getBoundingClientRect();\n\tvar html = document.documentElement;\n\treturn rect.top <= 150 && rect.left >= 0 && rect.bottom >= 180;\n}\n\n// function isInViewport(element) {\n//   var rect = element.getBoundingClientRect();\n//   var html = document.documentElement;\n//   return (\n//     rect.top >= 0 &&\n//     rect.left >= 0 &&\n//     rect.bottom <= (window.innerHeight || html.clientHeight) &&\n//     rect.right <= (window.innerWidth || html.clientWidth)\n//   );\n// }\nvar linkTarget = document.querySelectorAll('.link-target');\nvar navLink = document.querySelectorAll('.nav-link');\n\nwindow.addEventListener('scroll', function (event) {\n\tlinkTarget.forEach(function (el, index) {\n\t\t//console.log(el,el.getBoundingClientRect())\n\t\tif (isInViewport(el) && !navLink[index].classList.contains(\"aos-init\")) {\n\t\t\tnavLink[index].setAttribute('frameborder', '0');\n\t\t\tnavLink[index].className += \" aos-init aos-animate\";\n\t\t\tnavLink[index].setAttribute(\"data-aos-duration\", 500);\n\t\t\tnavLink[index].setAttribute(\"data-aos\", \"orange-link\");\n\t\t} else if (!isInViewport(el) && navLink[index].classList.contains(\"aos-init\")) {\n\t\t\t//is in view needs to be checked again\n\t\t\tnavLink[index].classList.remove(\"aos-init\");\n\t\t\tnavLink[index].classList.remove(\"aos-animate\");\n\t\t\tnavLink[index].removeAttribute(\"frameborder\");\n\t\t\tnavLink[index].removeAttribute(\"data-aos\");\n\t\t\tnavLink[index].removeAttribute(\"data-aos-duration\");\n\t\t}\n\t});\n});\n\n// smooth scroll\nvar scroll = new SmoothScroll('a[href*=\"#\"]', {\n\tignore: '.open-modal'\n});\n\n//# sourceURL=webpack:///./app/assets/scripts/App.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/MobileMenu.js":
/*!**************************************************!*\
  !*** ./app/assets/scripts/modules/MobileMenu.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar MobileMenu = function () {\n\tfunction MobileMenu() {\n\t\t_classCallCheck(this, MobileMenu);\n\n\t\tthis.menuIcon = document.querySelector('.site-header__menu-icon');\n\t\tthis.menuContent = document.querySelector('.site-header__menu-content');\n\t\tthis.siteHeader = document.querySelector('.site-header');\n\t\tconsole.log(this.menuContent);\n\n\t\tthis.events(); // will run the events when called\n\t}\n\n\t_createClass(MobileMenu, [{\n\t\tkey: 'events',\n\t\tvalue: function events() {\n\t\t\tthis.menuIcon.addEventListener('click', this.toggleTheMenu.bind(this));\n\t\t}\n\t}, {\n\t\tkey: 'toggleTheMenu',\n\t\tvalue: function toggleTheMenu() {\n\t\t\tthis.menuContent.classList.toggle('site-header__menu-content--is-visible');\n\t\t\tthis.siteHeader.classList.toggle('site-header--is-expanded');\n\t\t\tthis.menuIcon.classList.toggle('site-header__menu-icon--close-x');\n\t\t}\n\t}]);\n\n\treturn MobileMenu;\n}();\n\nexports.default = MobileMenu;\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/MobileMenu.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/Modal.js":
/*!*********************************************!*\
  !*** ./app/assets/scripts/modules/Modal.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Modal = function () {\n\tfunction Modal() {\n\t\t_classCallCheck(this, Modal);\n\n\t\tthis.openModalButton = document.querySelectorAll(\".open-modal\");\n\t\tthis.modal = document.querySelector('.modal');\n\t\tthis.closeModalButton = document.querySelector('.modal__close');\n\t\tthis.events();\n\t}\n\n\t_createClass(Modal, [{\n\t\tkey: 'events',\n\t\tvalue: function events() {\n\t\t\tvar _this = this;\n\n\t\t\t//clicking the open modal button\n\t\t\tthis.openModalButton.forEach(function (el) {\n\t\t\t\treturn el.addEventListener('click', _this.openModal.bind(_this));\n\t\t\t});\n\t\t\t//clicking the x close modal button\n\t\t\tthis.closeModalButton.addEventListener('click', this.closeModal.bind(this));\n\t\t\t//pushes the escape key\n\t\t\tdocument.addEventListener('keyup', this.keyPressHandler.bind(this), true);\n\t\t}\n\t}, {\n\t\tkey: 'openModal',\n\t\tvalue: function openModal(event) {\n\n\t\t\tthis.modal.classList.add(\"modal--is-visible\");\n\t\t\tevent.preventDefault();\n\t\t}\n\t}, {\n\t\tkey: 'closeModal',\n\t\tvalue: function closeModal() {\n\t\t\tthis.modal.classList.remove(\"modal--is-visible\");\n\t\t}\n\t}, {\n\t\tkey: 'keyPressHandler',\n\t\tvalue: function keyPressHandler(e) {\n\n\t\t\tif (e.key == 'Escape' || e.key == 'Esc' || e.keyCode == 27) {\n\t\t\t\tthis.modal.classList.remove(\"modal--is-visible\");\n\t\t\t\te.preventDefault();\n\t\t\t\treturn false;\n\t\t\t}\n\t\t}\n\t}]);\n\n\treturn Modal;\n}();\n\nexports.default = Modal;\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/Modal.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/RevealOnScroll.js":
/*!******************************************************!*\
  !*** ./app/assets/scripts/modules/RevealOnScroll.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\t\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar RevealOnScroll = function () {\n\t\tfunction RevealOnScroll() {\n\t\t\t\t_classCallCheck(this, RevealOnScroll);\n\n\t\t\t\tthis.itemsToReveal = document.querySelectorAll('.feature-item');\n\t\t\t\tthis.hideInitially(); // will run the events when called\n\t\t}\n\n\t\t_createClass(RevealOnScroll, [{\n\t\t\t\tkey: 'hideInitially',\n\t\t\t\tvalue: function hideInitially() {\n\t\t\t\t\t\t// this.itemsToReveal.forEach((e) => {\n\t\t\t\t\t\t// \te.classList.add(\"wow bounceInUp\" )\n\t\t\t\t\t\t// })\n\t\t\t\t}\n\t\t}]);\n\n\t\treturn RevealOnScroll;\n}();\n\nexports.default = RevealOnScroll;\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/RevealOnScroll.js?");

/***/ })

/******/ });