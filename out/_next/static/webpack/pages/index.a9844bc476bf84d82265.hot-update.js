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
          lineNumber: 31,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJqc29uIiwiZGF0YSIsInBva2Vtb25fZW50cmllcyIsInBva2Vtb25zIiwicHJvcHMiLCJIb21lIiwidXNlU3RhdGUiLCJzZXRQb2tlbW9ucyIsInVzZUVmZmVjdCIsIm1hcCIsInBva2Vtb24iLCJwb2tlbW9uX3NwZWNpZXMiLCJuYW1lIiwiZW50cnlfbnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O1NBR2VBLGM7Ozs7O3FNQUFmLGlCQUE4QkMsT0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDMkJDLEtBQUssQ0FBQyxxQ0FBRCxDQUFMLENBQ2xCQyxJQURrQixDQUNiLFVBQUNDLFFBQUQ7QUFBQSxxQkFBd0JBLFFBQVEsQ0FBQ0MsRUFBVCxHQUFjRCxRQUFRLENBQUNFLElBQVQsRUFBZCxHQUFnQyxJQUF4RDtBQUFBLGFBRGEsRUFFbEJILElBRmtCLENBRWIsVUFBQ0ksSUFBRDtBQUFBLHFCQUFtQkEsSUFBSSxDQUFDQyxlQUF4QjtBQUFBLGFBRmEsQ0FEM0I7O0FBQUE7QUFDVUMsb0JBRFY7QUFBQSw2Q0FLVztBQUNIQyxtQkFBSyxFQUFFO0FBQ0hELHdCQUFRLEVBQVJBO0FBREc7QUFESixhQUxYOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFZQSxTQUFTRSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBRW9CQyxzREFBUSxDQUFpQixFQUFqQixDQUY1QjtBQUFBLE1BRUxILFFBRks7QUFBQSxNQUVLSSxXQUZMOztBQUlaQyx5REFBUyxDQUFDLFlBQU07QUFDWlosU0FBSyxDQUFDLHFDQUFELENBQUwsQ0FDS0MsSUFETCxDQUNVLFVBQUNDLFFBQUQ7QUFBQSxhQUF3QkEsUUFBUSxDQUFDQyxFQUFULEdBQWNELFFBQVEsQ0FBQ0UsSUFBVCxFQUFkLEdBQWdDLElBQXhEO0FBQUEsS0FEVixFQUVLSCxJQUZMLENBRVUsVUFBQ0ksSUFBRDtBQUFBLGFBQW1CTSxXQUFXLENBQUNOLElBQUksQ0FBQ0MsZUFBTixDQUE5QjtBQUFBLEtBRlY7QUFHSCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEsc0JBQ0k7QUFBQSwwQ0FFSTtBQUFBLGdCQUNLQyxRQUFRLENBQUNNLEdBQVQsQ0FBYSxVQUFBQyxPQUFPO0FBQUEsNEJBQ2pCO0FBQUEsb0JBQ0tBLE9BQU8sQ0FBQ0MsZUFBUixDQUF3QkM7QUFEN0IsV0FBU0YsT0FBTyxDQUFDRyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURpQjtBQUFBLE9BQXBCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBWUg7O0dBdEJRUixJOztLQUFBQSxJO0FBd0JNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hOTg0NGJjNDc2YmY4NGQ4MjI2NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFBva2VkZXgsIFBva2Vtb25FbnRyeSB9IGZyb20gJy4uL3Bva2Vtb24vcG9rZW1vbi10eXBlcyc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbiAgICBjb25zdCBwb2tlbW9ucyA9IGF3YWl0IGZldGNoKCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2VkZXgvMicpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2Uub2sgPyByZXNwb25zZS5qc29uKCkgOiBudWxsKVxyXG4gICAgICAgIC50aGVuKChkYXRhOiBQb2tlZGV4KSA9PiBkYXRhLnBva2Vtb25fZW50cmllcyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBwb2tlbW9uc1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICAgIGNvbnN0IFtwb2tlbW9ucywgc2V0UG9rZW1vbnNdID0gdXNlU3RhdGU8UG9rZW1vbkVudHJ5W10+KFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2VkZXgvMicpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLm9rID8gcmVzcG9uc2UuanNvbigpIDogbnVsbClcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGE6IFBva2VkZXgpID0+IHNldFBva2Vtb25zKGRhdGEucG9rZW1vbl9lbnRyaWVzKSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBQb2vDqWRleFxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7cG9rZW1vbnMubWFwKHBva2Vtb24gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Bva2Vtb24uZW50cnlfbnVtYmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Bva2Vtb24ucG9rZW1vbl9zcGVjaWVzLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==