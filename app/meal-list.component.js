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
var MealListComponent = (function () {
    function MealListComponent() {
        this.clickSender = new core_1.EventEmitter();
        this.selectedCalorieView = "all";
    }
    MealListComponent.prototype.editThisMeal = function (MealToEdit) {
        this.clickSender.emit(MealToEdit);
    };
    MealListComponent.prototype.onChange = function (optionFromMenu) {
        this.selectedCalorieView = optionFromMenu;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MealListComponent.prototype, "childMealList", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MealListComponent.prototype, "clickSender", void 0);
    MealListComponent = __decorate([
        core_1.Component({
            selector: "meal-list",
            template: "\n    <select (change)=\"onChange($event.target.value)\">\n      <option value=\"all\" selected=\"selected\"> All Meals </option>\n      <option value=\"High Calorie Food\">High Calorie Meals</option>\n      <option value=\"Low Calorie Food\">Low Calorie Food</option>\n    </select>\n    <div *ngFor=\"let currentMeal of childMealList | calorieCount:selectedCalorieView\">\n      <h4>Each Meal Details</h4>\n      <p>Name of your meal: {{currentMeal.name}}</p>\n      <p>Calorie Count: kcal.{{currentMeal.calories}}</p>\n      <p>Meal Description: {{currentMeal.description}}</p>\n      <button (click)=\"editThisMeal(currentMeal)\">Edit</button>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], MealListComponent);
    return MealListComponent;
}());
exports.MealListComponent = MealListComponent;
//# sourceMappingURL=meal-list.component.js.map