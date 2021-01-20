webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\guple\\dev\\pokedex\\pages\\index.tsx";


function getStaticProps(_x) {
  return _getStaticProps.apply(this, arguments);
}

function _getStaticProps() {
  _getStaticProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var pokemons;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://pokeapi.co/api/v2/pokedex/2').then(function (response) {
              return response.ok ? response.json() : null;
            }).then(function (data) {
              return data.pokemon_entries;
            });

          case 2:
            pokemons = _context.sent;
            return _context.abrupt("return", {
              props: {
                pokemons: pokemons
              }
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getStaticProps.apply(this, arguments);
}

function Home(_ref) {
  var _this = this;

  var pokemons = _ref.pokemons;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: ["Pok\xE9dex", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
      children: pokemons.map(function (pokemon) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          children: pokemon.pokemon_species.name
        }, pokemon.entry_number, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, this);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJqc29uIiwiZGF0YSIsInBva2Vtb25fZW50cmllcyIsInBva2Vtb25zIiwicHJvcHMiLCJIb21lIiwibWFwIiwicG9rZW1vbiIsInBva2Vtb25fc3BlY2llcyIsIm5hbWUiLCJlbnRyeV9udW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7U0FHZUEsYzs7Ozs7cU1BQWYsaUJBQThCQyxPQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUMyQkMsS0FBSyxDQUFDLHFDQUFELENBQUwsQ0FDbEJDLElBRGtCLENBQ2IsVUFBQ0MsUUFBRDtBQUFBLHFCQUF3QkEsUUFBUSxDQUFDQyxFQUFULEdBQWNELFFBQVEsQ0FBQ0UsSUFBVCxFQUFkLEdBQWdDLElBQXhEO0FBQUEsYUFEYSxFQUVsQkgsSUFGa0IsQ0FFYixVQUFDSSxJQUFEO0FBQUEscUJBQW1CQSxJQUFJLENBQUNDLGVBQXhCO0FBQUEsYUFGYSxDQUQzQjs7QUFBQTtBQUNVQyxvQkFEVjtBQUFBLDZDQUtXO0FBQ0hDLG1CQUFLLEVBQUU7QUFDSEQsd0JBQVEsRUFBUkE7QUFERztBQURKLGFBTFg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQVlBLFNBQVNFLElBQVQsT0FBNEI7QUFBQTs7QUFBQSxNQUFaRixRQUFZLFFBQVpBLFFBQVk7QUFDeEIsc0JBQ0k7QUFBQSwwQ0FFSTtBQUFBLGdCQUNLQSxRQUFRLENBQUNHLEdBQVQsQ0FBYSxVQUFBQyxPQUFPO0FBQUEsNEJBQ2pCO0FBQUEsb0JBQ0tBLE9BQU8sQ0FBQ0MsZUFBUixDQUF3QkM7QUFEN0IsV0FBU0YsT0FBTyxDQUFDRyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURpQjtBQUFBLE9BQXBCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBWUg7O0tBYlFMLEk7QUFlTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGFjZmI5MTJlNWIxM2EyMzJmOGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFBva2VkZXggfSBmcm9tICcuLi9wb2tlbW9uL3Bva2Vtb24tdHlwZXMnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gICAgY29uc3QgcG9rZW1vbnMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlZGV4LzInKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLm9rID8gcmVzcG9uc2UuanNvbigpIDogbnVsbClcclxuICAgICAgICAudGhlbigoZGF0YTogUG9rZWRleCkgPT4gZGF0YS5wb2tlbW9uX2VudHJpZXMpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgcG9rZW1vbnMsXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEhvbWUoeyBwb2tlbW9ucyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIFBva8OpZGV4XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtwb2tlbW9ucy5tYXAocG9rZW1vbiA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cG9rZW1vbi5lbnRyeV9udW1iZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cG9rZW1vbi5wb2tlbW9uX3NwZWNpZXMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9