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

/***/ "./src/consultaAPI.ts":
/*!****************************!*\
  !*** ./src/consultaAPI.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getClima: () => (/* binding */ getClima)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nfunction setClima(response) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const data = yield response.json();\n        const umidade = data.main.humidity;\n        const temperatura = Math.round(data.main.temp);\n        const descricao = data.weather[0].description;\n        const info = {\n            temperatura,\n            descricao,\n            umidade,\n        };\n        return info;\n    });\n}\nfunction getClima(local) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const apiKey = \"a1f4196e80a7b321eadf2b3cc2e2e702\";\n        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(local)}&appid=${apiKey}&units=metric&lang=pt_br`;\n        try {\n            const response = yield fetch(url);\n            if (!response.ok) {\n                throw new Error(`Erro na requisição: ${response.status}`);\n            }\n            const clima = setClima(response);\n            return clima;\n        }\n        catch (error) { }\n    });\n}\n\n\n//# sourceURL=webpack:///./src/consultaAPI.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _consultaAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consultaAPI */ \"./src/consultaAPI.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nconst pesquisa = document.getElementById(\"caixa-pesquisa\");\nconst botaoConfirmar = document.getElementById(\"confirmar\");\nconst localEscolhido = document.getElementById(\"local\");\nconst temperaturaLocal = (document.getElementById(\"temperatura\"));\nconst umidadeLocal = document.getElementById(\"umidade\");\nconst descricaoLocal = (document.getElementById(\"descricao\"));\nbotaoConfirmar.addEventListener(\"click\", () => __awaiter(void 0, void 0, void 0, function* () {\n    const local = pesquisa.value;\n    const dados = yield (0,_consultaAPI__WEBPACK_IMPORTED_MODULE_0__.getClima)(local);\n    localEscolhido.textContent = `${local}`;\n    temperaturaLocal.textContent = `${dados === null || dados === void 0 ? void 0 : dados.temperatura}°C`;\n    umidadeLocal.textContent = `Umidade de ${dados === null || dados === void 0 ? void 0 : dados.umidade}%`;\n    descricaoLocal.textContent = `${dados === null || dados === void 0 ? void 0 : dados.descricao}`;\n}));\n\n\n//# sourceURL=webpack:///./src/index.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;