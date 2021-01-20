webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\guple\\dev\\pokedex\\pages\\index.tsx",
    _s = $RefreshSig$();



function Home() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      pokemons = _useState[0],
      setPokemons = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetch('https://pokeapi.co/api/v2/pokedex/2').then(function (response) {
      return response.ok ? response.json() : null;
    }).then(function (data) {
      return setPokemons(data.pokemon_entries);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: ["Pok\xE9dex", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: pokemons.map(function (pokemon) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: pokemon.pokemon_species.name
        }, pokemon.entry_number, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

_s(Home, "HTV26hiVYObM9ZdttYFfm0Hoy8g=");

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsInBva2Vtb25zIiwic2V0UG9rZW1vbnMiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwianNvbiIsImRhdGEiLCJwb2tlbW9uX2VudHJpZXMiLCJtYXAiLCJwb2tlbW9uIiwicG9rZW1vbl9zcGVjaWVzIiwibmFtZSIsImVudHJ5X251bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBRW9CQyxzREFBUSxDQUFpQixFQUFqQixDQUY1QjtBQUFBLE1BRUxDLFFBRks7QUFBQSxNQUVLQyxXQUZMOztBQUlaQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsU0FBSyxDQUFDLHFDQUFELENBQUwsQ0FDS0MsSUFETCxDQUNVLFVBQUNDLFFBQUQ7QUFBQSxhQUF3QkEsUUFBUSxDQUFDQyxFQUFULEdBQWNELFFBQVEsQ0FBQ0UsSUFBVCxFQUFkLEdBQWdDLElBQXhEO0FBQUEsS0FEVixFQUVLSCxJQUZMLENBRVUsVUFBQ0ksSUFBRDtBQUFBLGFBQW1CUCxXQUFXLENBQUNPLElBQUksQ0FBQ0MsZUFBTixDQUE5QjtBQUFBLEtBRlY7QUFHSCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEsc0JBQ0k7QUFBQSwwQ0FFSTtBQUFBLGdCQUNLVCxRQUFRLENBQUNVLEdBQVQsQ0FBYSxVQUFBQyxPQUFPO0FBQUEsNEJBQ2pCO0FBQUEsb0JBQ0tBLE9BQU8sQ0FBQ0MsZUFBUixDQUF3QkM7QUFEN0IsV0FBU0YsT0FBTyxDQUFDRyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURpQjtBQUFBLE9BQXBCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBWUg7O0dBdEJRaEIsSTs7S0FBQUEsSTtBQXdCTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDRhZjJmMjU2OTVmZTUzMjE0MWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQb2tlZGV4LCBQb2tlbW9uRW50cnkgfSBmcm9tICcuLi9wb2tlbW9uL3Bva2Vtb24tdHlwZXMnO1xyXG5cclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgICBjb25zdCBbcG9rZW1vbnMsIHNldFBva2Vtb25zXSA9IHVzZVN0YXRlPFBva2Vtb25FbnRyeVtdPihbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlZGV4LzInKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS5vayA/IHJlc3BvbnNlLmpzb24oKSA6IG51bGwpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhOiBQb2tlZGV4KSA9PiBzZXRQb2tlbW9ucyhkYXRhLnBva2Vtb25fZW50cmllcykpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgUG9rw6lkZXhcclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge3Bva2Vtb25zLm1hcChwb2tlbW9uID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwb2tlbW9uLmVudHJ5X251bWJlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb2tlbW9uLnBva2Vtb25fc3BlY2llcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=