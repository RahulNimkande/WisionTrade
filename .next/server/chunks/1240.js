"use strict";
exports.id = 1240;
exports.ids = [1240];
exports.modules = {

/***/ 1240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Portfolio_custom_column)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(8636);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/common/initIsotope.js
var initIsotope = __webpack_require__(8063);
;// CONCATENATED MODULE: ./src/data/sections/portfolio1.json
const portfolio1_namespaceObject = JSON.parse('[{"id":1,"image":"/img/products/marbles/Black-Marble.jpg","title":"Black Marble","tags":["Design","WordPress"],"filterCategory":["marble"]},{"id":2,"image":"/img/products/marbles/HM-ONYX.jpg","title":"HM Onyx","tags":["Design","WordPress"],"filterCategory":["marble"]},{"id":3,"image":"/img/products/marbles/Z-Mercury.jpg","title":"Z Mercury","tags":["Design","WordPress"],"filterCategory":["marble"]},{"id":4,"image":"/img/products/marbles/Rain-Forest-Gold.jpg","title":"Rain Forest Gold","tags":["Design","WordPress"],"filterCategory":["marble"]},{"id":5,"image":"/img/products/marbles/Rosa-Levanto.jpg","title":"Rosa Levanto","tags":["Design","WordPress"],"filterCategory":["marble"]},{"id":6,"image":"/img/products/marbles/Spider-Green.jpg","title":"Spider Green","tags":["Design","WordPress"],"filterCategory":["marble"]},{"id":7,"image":"/img/products/marbles/Onyx-White.jpg","title":"Onyx White","tags":["Design","WordPress"],"filterCategory":["marble"]},{"id":8,"image":"/img/products/marbles/ONYX-HONEY.jpg","title":"Onyx Honey","tags":["Design","WordPress"],"filterCategory":["marble"]}]');
;// CONCATENATED MODULE: ./src/components/Portfolio-custom-column/index.jsx

/* eslint-disable @next/next/no-img-element */ 




const PortfolioCustomColumn = ({ column , filterPosition , hideFilter , hideSectionTitle , filterCategory  })=>{
    const [pageLoaded, setPageLoaded] = external_react_default().useState(false);
    external_react_default().useEffect(()=>{
        setPageLoaded(true);
        if (pageLoaded) {
            setTimeout(()=>{
                (0,initIsotope/* default */.Z)();
            }, 1000);
        }
    }, [
        pageLoaded
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "portfolio section-padding pb-70",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `${column === 3 ? "container" : "container"}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    !hideFilter && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `filtering ${filterPosition === "center" ? "text-center" : filterPosition === "left" ? "text-left" : "text-right"} col-12`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "filter",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    "data-filter": "*",
                                    className: "active",
                                    children: "All"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    "data-filter": ".marble",
                                    children: "Stones and Marble"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    "data-filter": ".web",
                                    children: "Pharma"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    "data-filter": ".graphic",
                                    children: "Fabric"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "gallery full-width",
                        children: portfolio1_namespaceObject.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: `${column === 3 ? "col-lg-4 col-md-6" : column === 2 ? "col-md-6" : "col-12"} items ${item.filterCategory} wow fadeInUp ${item.id === 2 && column == 3 ? "lg-mr" : item.id === 1 && column == 2 ? "lg-mr" : ""}`,
                                "data-wow-delay": ".4s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "item-img",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "imago wow",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: item.image,
                                                        alt: "image"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "item-img-overlay"
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "cont",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            children: item.title
                                        })
                                    })
                                ]
                            }, item.id)
                        )
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const Portfolio_custom_column = (PortfolioCustomColumn);


/***/ }),

/***/ 8636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class Split extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    target = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
    split = ()=>{
        if (this.target.current) {
            Splitting({
                target: this.target.current
            });
        }
    };
    componentDidMount = this.split;
    componentDidUpdate = this.split;
    render() {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ref: this.target,
            children: this.props.children
        }));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Split);


/***/ })

};
;