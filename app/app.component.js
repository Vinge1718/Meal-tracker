"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.meals = [];
        this.selectedMeal = null;
    }
    AppComponent.prototype.saveButtonClick = function () {
        this.selectedMeal = null;
    };
    AppComponent.prototype.editThisMeal = function (clickedMeal) {
        this.selectedMeal = clickedMeal;
    };
    AppComponent.prototype.additionalMeal = function (newMealFromChild) {
        this.meals.push(newMealFromChild);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"container\">\n      <h1 class=\"jumbotron\">Meal Tracker</h1>\n      <h3>An Application to Track your Daily Meals </h3><hr>\n      <div class=\"row\">\n        <div class=\"col-sm-4\">\n        <meal-list\n            [childMealList]=\"meals\"\n            (clickSender)=\"editThisMeal($event)\"\n          ></meal-list>\n        </div>\n        <meal-edit\n            [childSelectedMeal]=\"selectedMeal\"\n            (saveEditsClickSender)=\"saveButtonClick()\"\n          ></meal-edit>\n        <div class=\"col-sm-4\">\n          <new-meal\n              (newMealSender)=\"additionalMeal($event)\"\n            ></new-meal>\n        </div>\n      </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map