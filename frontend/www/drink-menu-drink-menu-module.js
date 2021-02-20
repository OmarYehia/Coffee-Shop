(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["drink-menu-drink-menu-module"],{

/***/ "./src/app/pages/drink-menu/drink-form/drink-form.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/drink-menu/drink-form/drink-form.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title *ngIf=\"isNew\">New Drink Creator</ion-title>\n    <ion-title *ngIf=\"!isNew\">Drink Editor</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"drink\">\n    <app-drink-graphic [drink]=\"drink\"></app-drink-graphic>\n\n    <form (ngSubmit)=\"logForm()\">\n      <ion-item>\n        <ion-label>Drink Title</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"drink.title\" name=\"title\"></ion-input>\n      </ion-item>\n\n      <ion-item *ngFor=\"let ingredient of drink.recipe; let i = index;  trackBy: customTrackBy\">\n        <ion-label>Ingredient Name</ion-label>\n        <ion-input [(ngModel)]=\"drink.recipe[i].name\" [name]=\"'Ingredient Title'+i\"></ion-input>\n\n        <ion-label>Number of Parts</ion-label>\n        <ion-input type=\"number\" [(ngModel)]=\"drink.recipe[i].parts\" [name]=\"'Ingredient Parts'+i\"></ion-input>\n\n        <ion-label>Color</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"drink.recipe[i].color\" [name]=\"'Ingredient Color'+i\"></ion-input>\n\n        <ion-button (click)=\"removeIngredient(i)\" [disabled]=\"i==0 && drink.recipe.length==1\">Remove</ion-button><br />\n        <ion-button (click)=\"addIngredient(i)\" [disabled]=\"drink.recipe.length==5\">ADD</ion-button><br />\n\n      </ion-item>\n\n      <ion-button \n        [disabled]=\"!auth.can('delete:drinks')\"\n        (click)=\"deleteClicked()\">Delete</ion-button><br />\n      <ion-button (click)=\"closeModal()\">Cancel</ion-button>\n      <ion-button \n        [disabled]=\"!auth.can('patch:drinks') || !auth.can('post:drinks')\"\n        (click)=\"saveClicked()\">Save</ion-button>\n\n    </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/drink-menu/drink-form/drink-form.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/drink-menu/drink-form/drink-form.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RyaW5rLW1lbnUvZHJpbmstZm9ybS9kcmluay1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/drink-menu/drink-form/drink-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/drink-menu/drink-form/drink-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: DrinkFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkFormComponent", function() { return DrinkFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_drinks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/drinks.service */ "./src/app/services/drinks.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");





var DrinkFormComponent = /** @class */ (function () {
    function DrinkFormComponent(auth, modalCtrl, drinkService) {
        this.auth = auth;
        this.modalCtrl = modalCtrl;
        this.drinkService = drinkService;
    }
    DrinkFormComponent.prototype.ngOnInit = function () {
        if (this.isNew) {
            this.drink = {
                id: -1,
                title: '',
                recipe: []
            };
            this.addIngredient();
        }
    };
    DrinkFormComponent.prototype.customTrackBy = function (index, obj) {
        return index;
    };
    DrinkFormComponent.prototype.addIngredient = function (i) {
        if (i === void 0) { i = 0; }
        this.drink.recipe.splice(i + 1, 0, { name: '', color: 'white', parts: 1 });
    };
    DrinkFormComponent.prototype.removeIngredient = function (i) {
        this.drink.recipe.splice(i, 1);
    };
    DrinkFormComponent.prototype.closeModal = function () {
        this.modalCtrl.dismiss();
    };
    DrinkFormComponent.prototype.saveClicked = function () {
        this.drinkService.saveDrink(this.drink);
        this.closeModal();
    };
    DrinkFormComponent.prototype.deleteClicked = function () {
        this.drinkService.deleteDrink(this.drink);
        this.closeModal();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DrinkFormComponent.prototype, "drink", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DrinkFormComponent.prototype, "isNew", void 0);
    DrinkFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-drink-form',
            template: __webpack_require__(/*! ./drink-form.component.html */ "./src/app/pages/drink-menu/drink-form/drink-form.component.html"),
            styles: [__webpack_require__(/*! ./drink-form.component.scss */ "./src/app/pages/drink-menu/drink-form/drink-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_drinks_service__WEBPACK_IMPORTED_MODULE_2__["DrinksService"]])
    ], DrinkFormComponent);
    return DrinkFormComponent;
}());



/***/ }),

/***/ "./src/app/pages/drink-menu/drink-graphic/drink-graphic.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/drink-menu/drink-graphic/drink-graphic.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cup\">\n  <div \n  *ngFor=\"let ingredient of drink && drink.recipe\"\n  class=\"ingredient\"\n  [style.flexGrow]=\"ingredient.parts\"\n  [style.background]=\"ingredient.color\">\n    {{t}}\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/drink-menu/drink-graphic/drink-graphic.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/drink-menu/drink-graphic/drink-graphic.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cup {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  flex-direction: column;\n  border-radius: 7px;\n  overflow: hidden; }\n\n.ingredient {\n  width: 50px;\n  flex-grow: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29tYXIvRGVza3RvcC9zdGFydGVyX2NvZGUvZnJvbnRlbmQvc3JjL2FwcC9wYWdlcy9kcmluay1tZW51L2RyaW5rLWdyYXBoaWMvZHJpbmstZ3JhcGhpYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksV0FBVztFQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RyaW5rLW1lbnUvZHJpbmstZ3JhcGhpYy9kcmluay1ncmFwaGljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1cCB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmluZ3JlZGllbnQge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGZsZXgtZ3JvdzogMTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/drink-menu/drink-graphic/drink-graphic.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/drink-menu/drink-graphic/drink-graphic.component.ts ***!
  \***************************************************************************/
/*! exports provided: DrinkGraphicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkGraphicComponent", function() { return DrinkGraphicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DrinkGraphicComponent = /** @class */ (function () {
    function DrinkGraphicComponent() {
    }
    DrinkGraphicComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DrinkGraphicComponent.prototype, "drink", void 0);
    DrinkGraphicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-drink-graphic',
            template: __webpack_require__(/*! ./drink-graphic.component.html */ "./src/app/pages/drink-menu/drink-graphic/drink-graphic.component.html"),
            styles: [__webpack_require__(/*! ./drink-graphic.component.scss */ "./src/app/pages/drink-menu/drink-graphic/drink-graphic.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DrinkGraphicComponent);
    return DrinkGraphicComponent;
}());



/***/ }),

/***/ "./src/app/pages/drink-menu/drink-menu.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/drink-menu/drink-menu.module.ts ***!
  \*******************************************************/
/*! exports provided: DrinkMenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkMenuPageModule", function() { return DrinkMenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _drink_menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drink-menu.page */ "./src/app/pages/drink-menu/drink-menu.page.ts");
/* harmony import */ var _drink_graphic_drink_graphic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./drink-graphic/drink-graphic.component */ "./src/app/pages/drink-menu/drink-graphic/drink-graphic.component.ts");
/* harmony import */ var _drink_form_drink_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./drink-form/drink-form.component */ "./src/app/pages/drink-menu/drink-form/drink-form.component.ts");









var routes = [
    {
        path: '',
        component: _drink_menu_page__WEBPACK_IMPORTED_MODULE_6__["DrinkMenuPage"]
    }
];
var DrinkMenuPageModule = /** @class */ (function () {
    function DrinkMenuPageModule() {
    }
    DrinkMenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            entryComponents: [_drink_form_drink_form_component__WEBPACK_IMPORTED_MODULE_8__["DrinkFormComponent"]],
            declarations: [_drink_menu_page__WEBPACK_IMPORTED_MODULE_6__["DrinkMenuPage"], _drink_graphic_drink_graphic_component__WEBPACK_IMPORTED_MODULE_7__["DrinkGraphicComponent"], _drink_form_drink_form_component__WEBPACK_IMPORTED_MODULE_8__["DrinkFormComponent"]],
        })
    ], DrinkMenuPageModule);
    return DrinkMenuPageModule;
}());



/***/ }),

/***/ "./src/app/pages/drink-menu/drink-menu.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/drink-menu/drink-menu.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar style=\"text-align: center\">\n    <ion-title><b>Uda-Spice Latte</b> Cafe</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"drinks && drinks.items\">\n<div style=\"display: flex; justify-content: center; padding-top: 20px;\">\n    <ion-card\n     style=\"align-items: center; display: flex; flex-direction: column; cursor: pointer;\" \n     *ngFor=\"let drink of Object.keys(drinks.items)\"\n     (click)=\"openForm(drinks.items[drink])\">\n        <ion-card-header>\n          <ion-card-title>{{drinks.items[drink].title}}</ion-card-title>\n        </ion-card-header>\n      \n        <ion-card-content>\n            <app-drink-graphic [drink]=\"drinks.items[drink]\"></app-drink-graphic>\n        </ion-card-content>\n      </ion-card>\n    <ion-card\n     style=\"opacity: .7; align-items: center; display: flex; flex-direction: column; cursor: pointer;\" \n     *ngIf=\"auth.can('post:drinks')\"\n     (click)=\"openForm()\">\n        <ion-card-header>\n          <ion-card-title>Create Drink</ion-card-title>\n        </ion-card-header>\n      \n        <ion-card-content style=\"color:grey; font-size: 256%;\">\n            <ion-icon name=\"add-circle\"></ion-icon>\n        </ion-card-content>\n      </ion-card>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/drink-menu/drink-menu.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/drink-menu/drink-menu.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Playfair+Display:400,900&display=swap\");\nion-title {\n  font-family: 'Playfair Display', serif;\n  font-size: 1.7em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29tYXIvRGVza3RvcC9zdGFydGVyX2NvZGUvZnJvbnRlbmQvc3JjL2FwcC9wYWdlcy9kcmluay1tZW51L2RyaW5rLW1lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRGQUFZO0FBQ1o7RUFDSSxzQ0FBc0M7RUFDdEMsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kcmluay1tZW51L2RyaW5rLW1lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5OjQwMCw5MDAmZGlzcGxheT1zd2FwJyk7XG5pb24tdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmOyAgXG4gICAgZm9udC1zaXplOiAxLjdlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/drink-menu/drink-menu.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/drink-menu/drink-menu.page.ts ***!
  \*****************************************************/
/*! exports provided: DrinkMenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkMenuPage", function() { return DrinkMenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_drinks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/drinks.service */ "./src/app/services/drinks.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _drink_form_drink_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drink-form/drink-form.component */ "./src/app/pages/drink-menu/drink-form/drink-form.component.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");






var DrinkMenuPage = /** @class */ (function () {
    function DrinkMenuPage(auth, modalCtrl, drinks) {
        this.auth = auth;
        this.modalCtrl = modalCtrl;
        this.drinks = drinks;
        this.Object = Object;
    }
    DrinkMenuPage.prototype.ngOnInit = function () {
        this.drinks.getDrinks();
    };
    DrinkMenuPage.prototype.openForm = function (activedrink) {
        if (activedrink === void 0) { activedrink = null; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.auth.can('get:drinks-detail')) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _drink_form_drink_form_component__WEBPACK_IMPORTED_MODULE_4__["DrinkFormComponent"],
                                componentProps: { drink: activedrink, isNew: !activedrink }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DrinkMenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-drink-menu',
            template: __webpack_require__(/*! ./drink-menu.page.html */ "./src/app/pages/drink-menu/drink-menu.page.html"),
            styles: [__webpack_require__(/*! ./drink-menu.page.scss */ "./src/app/pages/drink-menu/drink-menu.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _services_drinks_service__WEBPACK_IMPORTED_MODULE_2__["DrinksService"]])
    ], DrinkMenuPage);
    return DrinkMenuPage;
}());



/***/ })

}]);
//# sourceMappingURL=drink-menu-drink-menu-module.js.map