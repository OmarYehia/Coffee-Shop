(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-page-user-page-module"],{

/***/ "./src/app/pages/user-page/user-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/user-page/user-page.module.ts ***!
  \*****************************************************/
/*! exports provided: UserPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPagePageModule", function() { return UserPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-page.page */ "./src/app/pages/user-page/user-page.page.ts");







var routes = [
    {
        path: '',
        component: _user_page_page__WEBPACK_IMPORTED_MODULE_6__["UserPagePage"]
    }
];
var UserPagePageModule = /** @class */ (function () {
    function UserPagePageModule() {
    }
    UserPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_user_page_page__WEBPACK_IMPORTED_MODULE_6__["UserPagePage"]]
        })
    ], UserPagePageModule);
    return UserPagePageModule;
}());



/***/ }),

/***/ "./src/app/pages/user-page/user-page.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/user-page/user-page.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>user-page</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"!auth.token\">\n  <ion-button [href]=\"loginURL\">Log In</ion-button>\n</ion-content>\n<ion-content *ngIf=\"auth.token\">\n  <ion-button (click)=\"auth.logout()\">Log Out</ion-button>\n      <ion-item>\n        <ion-label>Active JWT</ion-label>\n        <ion-textarea [ngModel]=\"auth.token\" name=\"Active JWT\"></ion-textarea>\n      </ion-item>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/user-page/user-page.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/user-page/user-page.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItcGFnZS91c2VyLXBhZ2UucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/user-page/user-page.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/user-page/user-page.page.ts ***!
  \***************************************************/
/*! exports provided: UserPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPagePage", function() { return UserPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");



var UserPagePage = /** @class */ (function () {
    function UserPagePage(auth) {
        this.auth = auth;
        this.loginURL = auth.build_login_link('/tabs/user-page');
    }
    UserPagePage.prototype.ngOnInit = function () {
    };
    UserPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-page',
            template: __webpack_require__(/*! ./user-page.page.html */ "./src/app/pages/user-page/user-page.page.html"),
            styles: [__webpack_require__(/*! ./user-page.page.scss */ "./src/app/pages/user-page/user-page.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], UserPagePage);
    return UserPagePage;
}());



/***/ })

}]);
//# sourceMappingURL=user-page-user-page-module.js.map