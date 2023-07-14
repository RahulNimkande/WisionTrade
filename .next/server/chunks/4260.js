"use strict";
exports.id = 4260;
exports.ids = [4260];
exports.modules = {

/***/ 6802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fadeWhenScroll = ()=>{
    window.addEventListener("scroll", ()=>{
        var scrolled = window.pageYOffset;
        if (document.querySelector(".fixed-slider .caption")) {
            document.querySelectorAll(".fixed-slider .caption").forEach((caption)=>{
                caption.style.transform = "translate3d(0, " + -(scrolled * 0.2) + "px, 0)";
                caption.style.opacity = 1 - scrolled / 600;
            });
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fadeWhenScroll);


/***/ }),

/***/ 5850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const removeSlashFromPagination = ()=>{
    if (document.querySelector(".swiper-pagination")) {
        document.querySelector(".swiper-pagination").innerHTML = document.querySelector(".swiper-pagination").innerHTML.replace(" / ", "");
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeSlashFromPagination);


/***/ }),

/***/ 3526:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"title":{"first":"Marbles & Stones","second":"Timeless Beauty in Stone"},"image":"/img/slideimg/01.jpg"},{"id":2,"title":{"first":"Black Marble","second":""},"image":"/img/slideimg/Black-Marble.jpg"},{"id":3,"title":{"first":"HM ONYX","second":""},"image":"/img/slideimg/HM-ONYX.jpg"},{"id":4,"title":{"first":"Z Mercury","second":""},"image":"/img/slideimg/Z-Mercury.jpg"},{"id":5,"title":{"first":"Rosa Levanto","second":""},"image":"/img/slideimg/Rosa-Levanto.jpg"},{"id":6,"title":{"first":"Rain Forest Gold","second":""},"image":"/img/slideimg/rain.jpg"}]');

/***/ })

};
;