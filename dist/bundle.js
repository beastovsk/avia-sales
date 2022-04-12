/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./server/src/server.ts":
/*!******************************!*\
  !*** ./server/src/server.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getAviaTickets)\n/* harmony export */ });\nfunction getAviaTickets() {\r\n    var url = \"http://map.aviasales.ru/supported_directions.json?origin_iata=LED&one_way=false&locale=ru\";\r\n    return new Promise(function (resolve, reject) {\r\n        var xhr = new XMLHttpRequest();\r\n        xhr.open(\"GET\", url);\r\n        xhr.addEventListener(\"load\", function () {\r\n            if (xhr.status >= 200 && xhr.status < 400) {\r\n                resolve(JSON.parse(xhr.responseText));\r\n            }\r\n            else {\r\n                reject(\"Oops! We've got a error: \".concat(xhr.statusText));\r\n            }\r\n        });\r\n        xhr.send();\r\n    })\r\n        .catch()\r\n        .then(function (response) {\r\n        // Getting an object which returns origin and directions of ticket\r\n        var arrayOfDirections = response.directions;\r\n        // We interesed in directions\r\n        arrayOfDirections.forEach(\r\n        // Getting only non-stop tickets for quick requests\r\n        function (direction) {\r\n            if (direction.direct === true) {\r\n                console.log(direction);\r\n            }\r\n        });\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://server/./server/src/server.ts?");

/***/ }),

/***/ "./webapp/src/index.ts":
/*!*****************************!*\
  !*** ./webapp/src/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _server_src_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../server/src/server */ \"./server/src/server.ts\");\n\r\n(0,_server_src_server__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(function (item) { return console.log(item); });\r\n// Tickets API to HTML\r\n\n\n//# sourceURL=webpack://server/./webapp/src/index.ts?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./webapp/src/index.ts");
/******/ 	
/******/ })()
;