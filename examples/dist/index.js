(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["StoneJSDotenvExample"] = factory();
	else
		root["StoneJSDotenvExample"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/index.mjs ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
class App {
  static env(key) {
    return {"DOMAIN":"stonejs.com","BASE_URL":"https://stonejs.com","API_URL":"https://stonejs.com/v1","APP_NAME":"StoneJS","APP_ID":"12","APP_EMAIL":"contact@stonejs.com","APP_DESC":"Lorem ipsum amet"}[key];
  }
}
console.log('Get env variables');
console.log('BASE_URL', App.env('BASE_URL'));
console.log('APP_EMAIL', App.env('APP_EMAIL'));
console.log('APP_DESC', App.env('APP_DESC'));
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87O1VDVkE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7OztBQ05BLE1BQU1BLEdBQUcsQ0FBQztFQUNSLE9BQU9DLEdBQUdBLENBQUVDLEdBQUcsRUFBRTtJQUNmLE9BQU9DLCtMQUFlLENBQUNELEdBQUcsQ0FBQztFQUM3QjtBQUNGO0FBRUFHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO0FBQ2hDRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLEVBQUVOLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzVDSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxXQUFXLEVBQUVOLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzlDSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLEVBQUVOLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TdG9uZUpTRG90ZW52RXhhbXBsZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vU3RvbmVKU0RvdGVudkV4YW1wbGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vU3RvbmVKU0RvdGVudkV4YW1wbGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9TdG9uZUpTRG90ZW52RXhhbXBsZS8uL3NyYy9pbmRleC5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiU3RvbmVKU0RvdGVudkV4YW1wbGVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiU3RvbmVKU0RvdGVudkV4YW1wbGVcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCAoKSA9PiB7XG5yZXR1cm4gIiwiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNsYXNzIEFwcCB7XG4gIHN0YXRpYyBlbnYgKGtleSkge1xuICAgIHJldHVybiBwcm9jZXNzLl9fZW52X19ba2V5XVxuICB9XG59XG5cbmNvbnNvbGUubG9nKCdHZXQgZW52IHZhcmlhYmxlcycpXG5jb25zb2xlLmxvZygnQkFTRV9VUkwnLCBBcHAuZW52KCdCQVNFX1VSTCcpKVxuY29uc29sZS5sb2coJ0FQUF9FTUFJTCcsIEFwcC5lbnYoJ0FQUF9FTUFJTCcpKVxuY29uc29sZS5sb2coJ0FQUF9ERVNDJywgQXBwLmVudignQVBQX0RFU0MnKSlcbiJdLCJuYW1lcyI6WyJBcHAiLCJlbnYiLCJrZXkiLCJwcm9jZXNzIiwiX19lbnZfXyIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9