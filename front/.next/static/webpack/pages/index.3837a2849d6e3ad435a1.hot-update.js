webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LoginFrom.js":
/*!*********************************!*\
  !*** ./components/LoginFrom.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_major_react_NodeBird_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");



var _jsxFileName = "C:\\major\\react-NodeBird\\prepare\\front\\components\\LoginFrom.js",
    _this = undefined,
    _s = $RefreshSig$();






 // import styled from 'styled-components';
// const ButtonWrapper = styled.div`
//     margin-top: 10px;
// `;
// const FormWrapper = styled(Form)`
//     padding: 10px;
// `;

var LoginForm = function LoginForm() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.user;
  }),
      logInLoading = _useSelector.logInLoading,
      logInError = _useSelector.logInError;

  var ButtonStyle = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return {
      marginTop: 10
    };
  }, []);
  var FormStyle = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return {
      padding: 10
    };
  }, []);

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])(''),
      _useInput2 = Object(C_major_react_NodeBird_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput, 2),
      email = _useInput2[0],
      onChangeEmail = _useInput2[1];

  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])(''),
      _useInput4 = Object(C_major_react_NodeBird_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput3, 2),
      password = _useInput4[0],
      onChangePassword = _useInput4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);
  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    console.log(email, password);
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_7__["loginRequestAction"])({
      email: email,
      password: password
    }));
  }, [email, password]);
  return (
    /*#__PURE__*/
    // antd 에서 제공하는 onFinish는 PreventDefault가 이미 적용되어있다.
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
      style: FormStyle,
      onFinish: onSubmitForm,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "user-email",
          children: "\uC774\uBA54\uC77C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
          name: "user-email",
          type: "email",
          value: email,
          onChange: onChangeEmail,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "user-password",
          children: "\uBE44\uBC00\uBC88\uD638"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
          name: "user-password",
          type: "password",
          value: password,
          onChange: onChangePassword,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: ButtonStyle,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          type: "primary",
          htmlType: "submit",
          loading: logInLoading,
          children: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/signup",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              children: "\uD68C\uC6D0\uAC00\uC785"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 41
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 38
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, _this)
  );
};

_s(LoginForm, "Tst96Nl/NzGaFBEaGZXFnrKXO00=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c;

$RefreshReg$(_c, "LoginForm");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZyb20uanMiXSwibmFtZXMiOlsiTG9naW5Gb3JtIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5FcnJvciIsIkJ1dHRvblN0eWxlIiwidXNlTWVtbyIsIm1hcmdpblRvcCIsIkZvcm1TdHlsZSIsInBhZGRpbmciLCJ1c2VJbnB1dCIsImVtYWlsIiwib25DaGFuZ2VFbWFpbCIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsInVzZUVmZmVjdCIsImFsZXJ0Iiwib25TdWJtaXRGb3JtIiwidXNlQ2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwibG9naW5SZXF1ZXN0QWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3BCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRG9CLHFCQUVpQkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FGNUI7QUFBQSxNQUVaQyxZQUZZLGdCQUVaQSxZQUZZO0FBQUEsTUFFRUMsVUFGRixnQkFFRUEsVUFGRjs7QUFHcEIsTUFBTUMsV0FBVyxHQUFHQyxxREFBTyxDQUFDO0FBQUEsV0FBTztBQUFFQyxlQUFTLEVBQUU7QUFBYixLQUFQO0FBQUEsR0FBRCxFQUE0QixFQUE1QixDQUEzQjtBQUNBLE1BQU1DLFNBQVMsR0FBR0YscURBQU8sQ0FBQztBQUFBLFdBQU87QUFBRUcsYUFBTyxFQUFFO0FBQVgsS0FBUDtBQUFBLEdBQUQsRUFBMEIsRUFBMUIsQ0FBekI7O0FBSm9CLGtCQUtXQywrREFBUSxDQUFDLEVBQUQsQ0FMbkI7QUFBQTtBQUFBLE1BS2JDLEtBTGE7QUFBQSxNQUtOQyxhQUxNOztBQUFBLG1CQU1pQkYsK0RBQVEsQ0FBQyxFQUFELENBTnpCO0FBQUE7QUFBQSxNQU1iRyxRQU5hO0FBQUEsTUFNSEMsZ0JBTkc7O0FBUXBCQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJWCxVQUFKLEVBQWdCO0FBQ1pZLFdBQUssQ0FBQ1osVUFBRCxDQUFMO0FBQ0g7QUFDSixHQUpRLEVBSU4sQ0FBQ0EsVUFBRCxDQUpNLENBQVQ7QUFNQSxNQUFNYSxZQUFZLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUNuQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVlULEtBQVosRUFBbUJFLFFBQW5CO0FBQ0FmLFlBQVEsQ0FBQ3VCLHlFQUFrQixDQUFDO0FBQUVWLFdBQUssRUFBTEEsS0FBRjtBQUFTRSxjQUFRLEVBQVJBO0FBQVQsS0FBRCxDQUFuQixDQUFSO0FBQ0gsR0FIK0IsRUFHN0IsQ0FBQ0YsS0FBRCxFQUFRRSxRQUFSLENBSDZCLENBQWhDO0FBS0E7QUFBQTtBQUNJO0FBQ0EseUVBQUMseUNBQUQ7QUFBTSxXQUFLLEVBQUVMLFNBQWI7QUFBd0IsY0FBUSxFQUFFUyxZQUFsQztBQUFBLDhCQUNJO0FBQUEsZ0NBRUk7QUFBTyxpQkFBTyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKLGVBSUkscUVBQUMsMENBQUQ7QUFBTyxjQUFJLEVBQUMsWUFBWjtBQUF5QixjQUFJLEVBQUMsT0FBOUI7QUFBc0MsZUFBSyxFQUFFTixLQUE3QztBQUFvRCxrQkFBUSxFQUFFQyxhQUE5RDtBQUE2RSxrQkFBUTtBQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBT0k7QUFBQSxnQ0FDSTtBQUFPLGlCQUFPLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSSxxRUFBQywwQ0FBRDtBQUFPLGNBQUksRUFBQyxlQUFaO0FBQTRCLGNBQUksRUFBQyxVQUFqQztBQUE0QyxlQUFLLEVBQUVDLFFBQW5EO0FBQTZELGtCQUFRLEVBQUVDLGdCQUF2RTtBQUF5RixrQkFBUTtBQUFqRztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBKLGVBWUk7QUFBSyxhQUFLLEVBQUVULFdBQVo7QUFBQSxnQ0FDSSxxRUFBQywyQ0FBRDtBQUFRLGNBQUksRUFBQyxTQUFiO0FBQXVCLGtCQUFRLEVBQUMsUUFBaEM7QUFBeUMsaUJBQU8sRUFBRUYsWUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxTQUFYO0FBQUEsaUNBQXFCO0FBQUEsbUNBQUcscUVBQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFvQkgsQ0F2Q0Q7O0dBQU1OLFM7VUFDZUUsdUQsRUFDb0JDLHVELEVBR05VLHVELEVBQ01BLHVEOzs7S0FObkNiLFM7QUF5Q1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM4MzdhMjg0OWQ2ZTNhZDQzNWExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB7IGxvZ2luUmVxdWVzdEFjdGlvbiB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG4vLyBpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbi8vIGNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IEZvcm1XcmFwcGVyID0gc3R5bGVkKEZvcm0pYFxyXG4vLyAgICAgcGFkZGluZzogMTBweDtcclxuLy8gYDtcclxuXHJcbmNvbnN0IExvZ2luRm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgbG9nSW5Mb2FkaW5nLCBsb2dJbkVycm9yIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgQnV0dG9uU3R5bGUgPSB1c2VNZW1vKCgpID0+ICh7IG1hcmdpblRvcDogMTAgfSksIFtdKTtcclxuICAgIGNvbnN0IEZvcm1TdHlsZSA9IHVzZU1lbW8oKCkgPT4gKHsgcGFkZGluZzogMTAgfSksIFtdKTtcclxuICAgIGNvbnN0IFtlbWFpbCwgb25DaGFuZ2VFbWFpbF0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoJycpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGxvZ0luRXJyb3IpIHtcclxuICAgICAgICAgICAgYWxlcnQobG9nSW5FcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2xvZ0luRXJyb3JdKTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZW1haWwsIHBhc3N3b3JkKTtcclxuICAgICAgICBkaXNwYXRjaChsb2dpblJlcXVlc3RBY3Rpb24oeyBlbWFpbCwgcGFzc3dvcmQgfSkpO1xyXG4gICAgfSwgW2VtYWlsLCBwYXNzd29yZF0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gYW50ZCDsl5DshJwg7KCc6rO17ZWY64qUIG9uRmluaXNo64qUIFByZXZlbnREZWZhdWx06rCAIOydtOuvuCDsoIHsmqnrkJjslrTsnojri6QuXHJcbiAgICAgICAgPEZvcm0gc3R5bGU9e0Zvcm1TdHlsZX0gb25GaW5pc2g9e29uU3VibWl0Rm9ybX0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogcmVhY3Tsl5DshJwgZm9yLT5odG1sRm9yICovfVxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLWVtYWlsXCI+7J2066mU7J28PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IG5hbWU9XCJ1c2VyLWVtYWlsXCIgdHlwZT1cImVtYWlsXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17b25DaGFuZ2VFbWFpbH0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItcGFzc3dvcmRcIj7ruYTrsIDrsojtmLg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgbmFtZT1cInVzZXItcGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17QnV0dG9uU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgbG9hZGluZz17bG9nSW5Mb2FkaW5nfT7roZzqt7jsnbg8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+PGE+PEJ1dHRvbj7tmozsm5DqsIDsnoU8L0J1dHRvbj48L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9