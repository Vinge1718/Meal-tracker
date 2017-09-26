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
var meal_model_1 = require("./meal.model");
var MealEditComponent = (function () {
    function MealEditComponent() {
        this.saveEditsClickSender = new core_1.EventEmitter();
    }
    MealEditComponent.prototype.saveButtonClick = function () {
        this.saveEditsClickSender.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', meal_model_1.Meal)
    ], MealEditComponent.prototype, "childSelectedMeal", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MealEditComponent.prototype, "saveEditsClickSender", void 0);
    MealEditComponent = __decorate([
        core_1.Component({
            selector: "meal-edit",
            template: "\n    <div class=\"col-sm-4\"  *ngIf=\"childSelectedMeal\">\n      <h4>Change the meal details</h4>\n      <p>Enter Meals Name: <input [(ngModel)]=\"childSelectedMeal.name\"></p>\n      <p>Fill in Calories:  kcal.<input type=\"number\" [(ngModel)]=\"childSelectedMeal.calories\"></p>\n      <p>Enter Description: <input [(ngModel)]=\"childSelectedMeal.description\"></p>\n      <button (click)=\"saveButtonClick()\">Save Changes</button>\n    </div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], MealEditComponent);
    return MealEditComponent;
}());
exports.MealEditComponent = MealEditComponent;
//# sourceMappingURL=edit-meal.component.js.map