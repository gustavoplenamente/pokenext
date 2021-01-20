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




var _jsxFileName = "C:\\Users\\guple\\dev\\pokedex\\pages\\index.tsx",
    _s = $RefreshSig$();



function getStaticProps(_x) {
  return _getStaticProps.apply(this, arguments);
}

function _getStaticProps() {
  _getStaticProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
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
            return _context.abrupt("return", {
              props: {}
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getStaticProps.apply(this, arguments);
}

function Home() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      pokemons = _useState[0],
      setPokemons = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    fetch('https://pokeapi.co/api/v2/pokedex/2').then(function (response) {
      return response.ok ? response.json() : null;
    }).then(function (data) {
      return setPokemons(data.pokemon_entries);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: ["Pok\xE9dex", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
      children: pokemons.map(function (pokemon) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          children: pokemon.pokemon_species.name
        }, pokemon.entry_number, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJqc29uIiwiZGF0YSIsInBva2Vtb25fZW50cmllcyIsInByb3BzIiwiSG9tZSIsInVzZVN0YXRlIiwicG9rZW1vbnMiLCJzZXRQb2tlbW9ucyIsInVzZUVmZmVjdCIsIm1hcCIsInBva2Vtb24iLCJwb2tlbW9uX3NwZWNpZXMiLCJuYW1lIiwiZW50cnlfbnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O1NBR2VBLGM7Ozs7O3FNQUFmLGlCQUE4QkMsT0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1VDLEtBQUssQ0FBQyxxQ0FBRCxDQUFMLENBQ0RDLElBREMsQ0FDSSxVQUFDQyxRQUFEO0FBQUEscUJBQXdCQSxRQUFRLENBQUNDLEVBQVQsR0FBY0QsUUFBUSxDQUFDRSxJQUFULEVBQWQsR0FBZ0MsSUFBeEQ7QUFBQSxhQURKLEVBRURILElBRkMsQ0FFSSxVQUFDSSxJQUFEO0FBQUEscUJBQW1CQSxJQUFJLENBQUNDLGVBQXhCO0FBQUEsYUFGSixDQURWOztBQUFBO0FBQUEsNkNBS1c7QUFDSEMsbUJBQUssRUFBRTtBQURKLGFBTFg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQVVBLFNBQVNDLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFFb0JDLHNEQUFRLENBQWlCLEVBQWpCLENBRjVCO0FBQUEsTUFFTEMsUUFGSztBQUFBLE1BRUtDLFdBRkw7O0FBSVpDLHlEQUFTLENBQUMsWUFBTTtBQUNaWixTQUFLLENBQUMscUNBQUQsQ0FBTCxDQUNLQyxJQURMLENBQ1UsVUFBQ0MsUUFBRDtBQUFBLGFBQXdCQSxRQUFRLENBQUNDLEVBQVQsR0FBY0QsUUFBUSxDQUFDRSxJQUFULEVBQWQsR0FBZ0MsSUFBeEQ7QUFBQSxLQURWLEVBRUtILElBRkwsQ0FFVSxVQUFDSSxJQUFEO0FBQUEsYUFBbUJNLFdBQVcsQ0FBQ04sSUFBSSxDQUFDQyxlQUFOLENBQTlCO0FBQUEsS0FGVjtBQUdILEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQSxzQkFDSTtBQUFBLDBDQUVJO0FBQUEsZ0JBQ0tJLFFBQVEsQ0FBQ0csR0FBVCxDQUFhLFVBQUFDLE9BQU87QUFBQSw0QkFDakI7QUFBQSxvQkFDS0EsT0FBTyxDQUFDQyxlQUFSLENBQXdCQztBQUQ3QixXQUFTRixPQUFPLENBQUNHLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGlCO0FBQUEsT0FBcEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFZSDs7R0F0QlFULEk7O0tBQUFBLEk7QUF3Qk1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmYyYzQ1NmU2NzY3MmNiZGEzZjgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUG9rZWRleCwgUG9rZW1vbkVudHJ5IH0gZnJvbSAnLi4vcG9rZW1vbi9wb2tlbW9uLXR5cGVzJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICAgIGF3YWl0IGZldGNoKCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2VkZXgvMicpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2Uub2sgPyByZXNwb25zZS5qc29uKCkgOiBudWxsKVxyXG4gICAgICAgIC50aGVuKChkYXRhOiBQb2tlZGV4KSA9PiBkYXRhLnBva2Vtb25fZW50cmllcyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge31cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgICBjb25zdCBbcG9rZW1vbnMsIHNldFBva2Vtb25zXSA9IHVzZVN0YXRlPFBva2Vtb25FbnRyeVtdPihbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlZGV4LzInKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS5vayA/IHJlc3BvbnNlLmpzb24oKSA6IG51bGwpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhOiBQb2tlZGV4KSA9PiBzZXRQb2tlbW9ucyhkYXRhLnBva2Vtb25fZW50cmllcykpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgUG9rw6lkZXhcclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge3Bva2Vtb25zLm1hcChwb2tlbW9uID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwb2tlbW9uLmVudHJ5X251bWJlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb2tlbW9uLnBva2Vtb25fc3BlY2llcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=