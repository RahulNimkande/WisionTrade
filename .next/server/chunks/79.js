"use strict";
exports.id = 79;
exports.ids = [79];
exports.modules = {

/***/ 2115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const addParlx = ()=>{
    window.addEventListener("scroll", ()=>{
        var scrolled = window.pageYOffset;
        if (document.querySelector(".fixed-slider .capt .parlx")) {
            document.querySelector(".fixed-slider .capt .parlx").style.transform = "translate3d(0, " + -(scrolled * 0.2) + "px, 0)";
            document.querySelector(".fixed-slider .capt .parlx").style.opacity = 1 - scrolled / 600;
        }
        if (document.querySelector(".fixed-slider .caption")) {
            document.querySelector(".fixed-slider .caption").style.transform = "translate3d(0, " + -(scrolled * 0.2) + "px, 0)";
            document.querySelector(".fixed-slider .caption").style.opacity = 1 - scrolled / 600;
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addParlx);


/***/ }),

/***/ 2623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const SmallFooter = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "footer-half sub-bg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "copyrights text-center mt-0",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        "\xa9 2023, ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            href: "/",
                            children: "WISION TRADE."
                        }),
                        " Driving International Trade Success."
                    ]
                })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SmallFooter);


/***/ }),

/***/ 9507:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);

/* eslint-disable @next/next/no-img-element */ 


const WorksThreeColumnWithFilter = ({ filterPosition  })=>{
    const [pageLoaded, setPageLoaded] = React.useState(false);
    React.useEffect(()=>{
        setPageLoaded(true);
        if (pageLoaded) {
            setTimeout(()=>{
                initIsotope();
            }, 1000);
        }
    }, [
        pageLoaded
    ]);
    return(/*#__PURE__*/ _jsx("section", {
        className: "portfolio section-padding pb-70",
        children: /*#__PURE__*/ _jsx("div", {
            className: "container",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: `filtering ${filterPosition === "center" ? "text-center" : filterPosition === "left" ? "text-left" : "text-right"} smplx col-12`,
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "filter",
                            children: [
                                /*#__PURE__*/ _jsx("span", {
                                    "data-filter": "*",
                                    className: "active",
                                    children: "All"
                                }),
                                /*#__PURE__*/ _jsx("span", {
                                    "data-filter": ".brand",
                                    children: "Branding"
                                }),
                                /*#__PURE__*/ _jsx("span", {
                                    "data-filter": ".web",
                                    children: "Mobile App"
                                }),
                                /*#__PURE__*/ _jsx("span", {
                                    "data-filter": ".graphic",
                                    children: "Creative"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "gallery full-width",
                        children: [
                            /*#__PURE__*/ _jsxs("div", {
                                className: "col-lg-4 col-md-6 items graphic lg-mr",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "item-img wow fadeInUp",
                                        "data-wow-delay": ".4s",
                                        children: /*#__PURE__*/ _jsx(Link, {
                                            href: "/project-details/project-details-dark",
                                            children: /*#__PURE__*/ _jsx("a", {
                                                children: /*#__PURE__*/ _jsx("img", {
                                                    src: "/img/products/marbles/Black-Marble.jpg",
                                                    alt: "image"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "cont",
                                        children: /*#__PURE__*/ _jsx("h6", {
                                            children: "Black Marble"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "col-lg-4 col-md-6 items web",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "item-img wow fadeInUp",
                                        "data-wow-delay": ".4s",
                                        children: /*#__PURE__*/ _jsx(Link, {
                                            href: "/project-details/project-details-dark",
                                            children: /*#__PURE__*/ _jsx("a", {
                                                children: /*#__PURE__*/ _jsx("img", {
                                                    src: "/img/products/marbles/HM-ONYX.jpg",
                                                    alt: "image"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "cont",
                                        children: /*#__PURE__*/ _jsx("h6", {
                                            children: "HM Onyx"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "col-lg-4 col-md-6 items brand lg-mr",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "item-img wow fadeInUp",
                                        "data-wow-delay": ".4s",
                                        children: /*#__PURE__*/ _jsx(Link, {
                                            href: "/project-details/project-details-dark",
                                            children: /*#__PURE__*/ _jsx("a", {
                                                children: /*#__PURE__*/ _jsx("img", {
                                                    src: "/img/products/marbles/Z-Mercury.jpg",
                                                    alt: "image"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "cont ",
                                        children: /*#__PURE__*/ _jsx("h6", {
                                            children: "Z Mercury"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "col-lg-4 col-md-6 items brand",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "item-img wow fadeInUp",
                                        "data-wow-delay": ".4s",
                                        children: /*#__PURE__*/ _jsx(Link, {
                                            href: "/project-details/project-details-dark",
                                            children: /*#__PURE__*/ _jsx("a", {
                                                children: /*#__PURE__*/ _jsx("img", {
                                                    src: "/img/products/marbles/Onyx-White.jpg",
                                                    alt: "image"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "cont",
                                        children: /*#__PURE__*/ _jsx("h6", {
                                            children: "Onyx White"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "col-lg-4 col-md-6 items web",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "item-img wow fadeInUp",
                                        "data-wow-delay": ".4s",
                                        children: /*#__PURE__*/ _jsx(Link, {
                                            href: "/project-details/project-details-dark",
                                            children: /*#__PURE__*/ _jsx("a", {
                                                children: /*#__PURE__*/ _jsx("img", {
                                                    src: "/img/products/marbles/Rain-Forest-Gold.jpg",
                                                    alt: "image"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "cont",
                                        children: /*#__PURE__*/ _jsx("h6", {
                                            children: "Rain Forest Gold"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "col-lg-4 col-md-6 items graphic",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "item-img wow fadeInUp",
                                        "data-wow-delay": ".4s",
                                        children: /*#__PURE__*/ _jsx(Link, {
                                            href: "/project-details/project-details-dark",
                                            children: /*#__PURE__*/ _jsx("a", {
                                                children: /*#__PURE__*/ _jsx("img", {
                                                    src: "/img/products/marbles/Rosa-Levanto.jpg",
                                                    alt: "image"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "cont",
                                        children: /*#__PURE__*/ _jsx("h6", {
                                            children: "Rosa Levanto"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "col-lg-4 col-md-6 items graphic",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "item-img wow fadeInUp",
                                        "data-wow-delay": ".4s",
                                        children: /*#__PURE__*/ _jsx(Link, {
                                            href: "/project-details/project-details-dark",
                                            children: /*#__PURE__*/ _jsx("a", {
                                                children: /*#__PURE__*/ _jsx("img", {
                                                    src: "/img/products/marbles/Spider-Green.jpg",
                                                    alt: "image"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "cont",
                                        children: /*#__PURE__*/ _jsx("h6", {
                                            children: "Spider Green"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "col-lg-4 col-md-6 items graphic",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "item-img wow fadeInUp",
                                        "data-wow-delay": ".4s",
                                        children: /*#__PURE__*/ _jsx(Link, {
                                            href: "/project-details/project-details-dark",
                                            children: /*#__PURE__*/ _jsx("a", {
                                                children: /*#__PURE__*/ _jsx("img", {
                                                    src: "/img/products/marbles/ONYX-HONEY.jpg",
                                                    alt: "image"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "cont",
                                        children: [
                                            /*#__PURE__*/ _jsx("h6", {
                                                children: "Onyx Honey"
                                            }),
                                            /*#__PURE__*/ _jsxs("span", {
                                                children: [
                                                    /*#__PURE__*/ _jsx("a", {
                                                        href: "#0",
                                                        children: "Design"
                                                    }),
                                                    ", ",
                                                    /*#__PURE__*/ _jsx("a", {
                                                        href: "#0",
                                                        children: "WordPress"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (WorksThreeColumnWithFilter)));


/***/ })

};
;