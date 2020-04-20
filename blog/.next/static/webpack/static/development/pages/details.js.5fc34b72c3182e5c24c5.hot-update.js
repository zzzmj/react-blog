webpackHotUpdate("static\\development\\pages\\details.js",{

/***/ "./pages/details/index.js":
/*!********************************!*\
  !*** ./pages/details/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Rainbow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Rainbow */ "./components/Rainbow/index.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! marked */ "./node_modules/marked/src/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var highlight_js_styles_github_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highlight.js/styles/github.css */ "./node_modules/highlight.js/styles/github.css");
/* harmony import */ var highlight_js_styles_github_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_github_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_apiUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/apiUrl */ "./config/apiUrl.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.less */ "./pages/details/style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "D:\\code\\\u524D\u7AEF\\react\\react-blog\\blog\\pages\\details\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var Details = function Details(props) {
  var input = '# P01:课程介绍和环境搭建\n' + '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' + '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' + '**这是加粗的文字**\n\n' + '*这是倾斜的文字*`\n\n' + '***这是斜体加粗的文字***\n\n' + '~~这是加删除线的文字~~ \n\n' + '\`console.log(111)\` \n\n' + '# p02:来个Hello World 初始Vue3.0\n' + '> aaaaaaaaa\n' + '>> bbbbbbbbb\n' + '>>> cccccccccc\n' + '***\n\n\n' + '# p03:Vue3.0基础知识讲解\n' + '> aaaaaaaaa\n' + '>> bbbbbbbbb\n' + '>>> cccccccccc\n\n' + '# p04:Vue3.0基础知识讲解\n' + '> aaaaaaaaa\n' + '>> bbbbbbbbb\n' + '>>> cccccccccc\n\n' + '#5 p05:Vue3.0基础知识讲解\n' + '> aaaaaaaaa\n' + '>> bbbbbbbbb\n' + '>>> cccccccccc\n\n' + '# p06:Vue3.0基础知识讲解\n' + '> aaaaaaaaa\n' + '>> bbbbbbbbb\n' + '>>> cccccccccc\n\n' + '# p07:Vue3.0基础知识讲解\n' + '> aaaaaaaaa\n' + '>> bbbbbbbbb\n' + '>>> cccccccccc\n\n' + '``` var a=11; ```';
  var renderer = new marked__WEBPACK_IMPORTED_MODULE_3___default.a.Renderer();
  marked__WEBPACK_IMPORTED_MODULE_3___default.a.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function highlight(code) {
      return highlight_js__WEBPACK_IMPORTED_MODULE_4___default.a.highlightAuto(code).value;
    }
  });
  var html = marked__WEBPACK_IMPORTED_MODULE_3___default()(input);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(_components_Rainbow__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("ul", {
    className: "details-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("li", {
    className: "menu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "\u535A\u5BA2")), __jsx("li", {
    className: "menu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "\xA0\xBB\xA0"), __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "\u968F\u7B14"))), __jsx("div", {
    className: "post-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("h1", {
    className: "post-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Coding \u4E94\u5E74\uFF0C\u6211\u5728\u963F\u91CC\u201C\u5543\u201D\u4E86\u5757\u786C\u9AA8\u5934"), __jsx("div", {
    className: "post-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("span", {
    className: "author",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "\u4F5C\u8005\uFF1A", __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Morty")), __jsx("span", {
    className: "time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, " 2019-11-30 13:25:00"), __jsx("span", {
    className: "category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "\u5206\u7C7B\uFF1A", __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "\u968F\u7B14")), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "\u6807\u7B7E\uFF1A", __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "alibaba")), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "\u8BC4\u8BBA\u6570\uFF1A", __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "\u70ED\u5EA6\uFF1A1567")), __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: html
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }))));
};

Details.getInitialProps = function _callee() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_7___default()(_config_apiUrl__WEBPACK_IMPORTED_MODULE_6__["default"].getArticleById).then(function (res) {
            return {
              articleList: res.data
            };
          })["catch"](function (err) {
            console.log(err);
            return {
              err: err
            };
          }));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Details);

/***/ })

})
//# sourceMappingURL=details.js.5fc34b72c3182e5c24c5.hot-update.js.map