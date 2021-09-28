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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/forms.js":
/*!********************************!*\
  !*** ./src/assets/js/forms.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nconst form = document.querySelector('.contact-form');\r\n\r\nconst message = {\r\n    loading: 'Загрузка', //'img/form/spinner.svg',\r\n    success: 'Спасибо! Скоро мы с вами свяжемся',\r\n    failure: 'Что-то пошло не так...'\r\n};\r\n\r\npostData(form);\r\n\r\nfunction postData(form){\r\n    form.addEventListener('submit', (e) =>{\r\n        e.preventDefault();\r\n\r\n        const statusMessage = document.createElement('div');\r\n        statusMessage.classList.add('status');\r\n        statusMessage.textContent = message.loading;\r\n        form.append(statusMessage);\r\n\r\n        const request = new XMLHttpRequest();\r\n        request.open('POST', 'server.php');\r\n\r\n        request.setRequestHeader('Content-type', 'application/json');\r\n        const formData = new FormData(form);\r\n\r\n        const object = {};\r\n        formData.forEach(function(value, key){\r\n            object[key] = value;\r\n        });\r\n\r\n        const json = JSON.stringify(object);\r\n\r\n        request.send(json);\r\n\r\n        request.addEventListener('load', () =>{\r\n            if (request.status === 200){\r\n                console.log(request.response);\r\n                showThanksModal(message.success);\r\n                form.reset();\r\n                statusMessage.remove();\r\n            } else {\r\n                showThanksModal(message.failure);\r\n            }\r\n        });\r\n    });\r\n}\r\n\r\nfunction showThanksModal(){\r\n    const prevModalDialog = document.querySelector('.contact-form');\r\n\r\n    prevModalDialog.classList.add('hide');\r\n    // openModal();\r\n\r\n    const thanksModal = document.createElement('div');\r\n    thanksModal.classList.add('thanks__text');\r\n    thanksModal.innerHTML = `\r\n        <div class=\"thanks__title\">${message}</div>\r\n    `;\r\n\r\n    document.querySelector('.modal__content').append(thanksModal); // Доработать \r\n}\r\n\n\n//# sourceURL=webpack:///./src/assets/js/forms.js?");

/***/ }),

/***/ "./src/assets/js/mobile-nav.js":
/*!*************************************!*\
  !*** ./src/assets/js/mobile-nav.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const burger = document.getElementById('sidebarToggle');\r\nconst sidebar = document.getElementById('sidebar');\r\nconst page = document.getElementById('page');\r\nconst body = document.body;\r\n\r\nburger.addEventListener('click', event =>{\r\n    if(body.classList.contains('show-sidebar')){\r\n        closeSidebar();\r\n    } else{\r\n        showSidebar();\r\n    }\r\n});\r\n\r\nfunction showSidebar(){\r\n    let mask = document.createElement('div');\r\n    mask.classList.add('page__mask');\r\n    mask.addEventListener('click', closeSidebar);\r\n    page.appendChild(mask);\r\n\r\n    body.classList.add('show-sidebar');\r\n}\r\n\r\nfunction closeSidebar(){\r\n    body.classList.remove('show-sidebar');\r\n    document.querySelector('.page__mask').remove();\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/mobile-nav.js?");

/***/ }),

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const modalBtn = document.querySelectorAll('[data-modal]');\r\nconst body = document.body;\r\nconst modalClose = document.querySelectorAll('.modal__close');\r\nconst modal = document.querySelectorAll('.modal');\r\n\r\nmodalBtn.forEach(item => {\r\n    item.addEventListener('click', event =>{\r\n        let $this = event.currentTarget;\r\n        let modalId =$this.getAttribute('data-modal');\r\n        let modal = document.getElementById(modalId);\r\n        let modalContent = modal.querySelector('.modal__content');\r\n\r\n        modalContent.addEventListener('click', event => {\r\n            event.stopPropagation();\r\n        });\r\n\r\n        modal.classList.add('show');\r\n        body.classList.add('no-scroll');\r\n\r\n        setTimeout(() =>{\r\n            modalContent.style.transform = 'none';\r\n            modalContent.style.opacity = '1';\r\n        }, 1);\r\n\r\n    });\r\n});\r\n\r\nmodalClose.forEach(item =>{\r\n    item.addEventListener('click', event =>{\r\n        let currentModal = event.currentTarget.closest('.modal');\r\n        \r\n        closeModal(currentModal);\r\n    });\r\n});\r\n\r\nmodal.forEach(item =>{\r\n    item.addEventListener('click', event =>{\r\n        let currentModal = event.target;\r\n        \r\n        closeModal(currentModal);\r\n    });\r\n});\r\n\r\nfunction closeModal(currentModal){\r\n    let modalContent = currentModal.querySelector('.modal__content');\r\n    modalContent.removeAttribute('style');\r\n\r\n    setTimeout(() =>{\r\n        currentModal.classList.remove('show');\r\n        body.classList.remove('no-scroll');\r\n        //form.classList.remove('hide');   надо убрать класс hide после закрытия модального окна\r\n    }, 200);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/assets/js/modal.js?");

/***/ }),

/***/ "./src/assets/js/textarea.js":
/*!***********************************!*\
  !*** ./src/assets/js/textarea.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const textArea = document.querySelectorAll('[data-autoresize]');\r\n\r\ntextArea.forEach(item =>{\r\n    let textAreaH = item.offsetHeight;\r\n\r\n    item.addEventListener('input', event =>{\r\n        let $this = event.target;\r\n\r\n        $this.style.height= textAreaH + 'px';\r\n        $this.style.height= $this.scrollHeight + 'px';\r\n        \r\n\r\n        if ($this.style.height.slice(0, -2) >= 150){\r\n            $this.style.overflow = \"auto\";\r\n        } else{\r\n            $this.style.overflow = \"hidden\";\r\n        }\r\n    });\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/textarea.js?");

/***/ }),

/***/ "./src/assets/js/thanks-modal.js":
/*!***************************************!*\
  !*** ./src/assets/js/thanks-modal.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n//import {closeModal, openModal} from './modal';\r\n/*\r\nconst form = document.querySelector('.contact-form');\r\nfunction showThanksModal(){\r\n    const prevModalDialog = document.querySelector(\"modal__content\");\r\n\r\n    form.addEventListener('submit', () =>{\r\n        prevModalDialog.classList.add('hide');\r\n\r\n        const thanksModal = document.createElement('div');\r\n        thanksModal.classList.add('modal__content');\r\n        thanksModal.innerHTML = `\r\n        <button class=\"modal__close\" type=\"button\">\r\n            <img src=\"assets/images/close.svg\" alt=\"close\">\r\n        </button>\r\n            <div class=\"thanks\">\r\n                Текст текст текст\r\n            </div>\r\n        `;\r\n\r\n    });\r\n\r\n}\r\n*/\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/thanks-modal.js?");

/***/ }),

/***/ 0:
/*!*********************************************************************************************************************************************************!*\
  !*** multi ./src/assets/js/forms.js ./src/assets/js/mobile-nav.js ./src/assets/js/modal.js ./src/assets/js/textarea.js ./src/assets/js/thanks-modal.js ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! D:\\Рабочий стол\\Сайты\\Многостраничный сайт\\src\\assets\\js\\forms.js */\"./src/assets/js/forms.js\");\n__webpack_require__(/*! D:\\Рабочий стол\\Сайты\\Многостраничный сайт\\src\\assets\\js\\mobile-nav.js */\"./src/assets/js/mobile-nav.js\");\n__webpack_require__(/*! D:\\Рабочий стол\\Сайты\\Многостраничный сайт\\src\\assets\\js\\modal.js */\"./src/assets/js/modal.js\");\n__webpack_require__(/*! D:\\Рабочий стол\\Сайты\\Многостраничный сайт\\src\\assets\\js\\textarea.js */\"./src/assets/js/textarea.js\");\nmodule.exports = __webpack_require__(/*! D:\\Рабочий стол\\Сайты\\Многостраничный сайт\\src\\assets\\js\\thanks-modal.js */\"./src/assets/js/thanks-modal.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/forms.js_./src/assets/js/mobile-nav.js_./src/assets/js/modal.js_./src/assets/js/textarea.js_./src/assets/js/thanks-modal.js?");

/***/ })

/******/ });