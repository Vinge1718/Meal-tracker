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
var NewMealComponent = (function () {
    function NewMealComponent() {
        this.newMealSender = new core_1.EventEmitter();
    }
    NewMealComponent.prototype.addClicked = function (name, calories, description) {
        var newMealToAdd = new meal_model_1.Meal(name, calories, description);
        this.newMealSender.emit(newMealToAdd);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NewMealComponent.prototype, "newMealSender", void 0);
    NewMealComponent = __decorate([
        core_1.Component({
            selector: "new-meal",
            template: "\n    <h4>Enter Your Meal Details</h4>\n    <p>Enter Meals Name: <input #newName></p>\n    <p>Fill in Calories:  kcal.<input type=\"number\" #newCalories></p>\n    <p>Enter Description: <input #newDescription></p>\n    <button (click)=\"\n      addClicked(newName.value, newCalories.value, newDescription.value);\n      newName.value='';\n      newCalories.value='';\n      newDescription.value='';\n    \">Add</button>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], NewMealComponent);
    return NewMealComponent;
}());
exports.NewMealComponent = NewMealComponent;
//# sourceMappingURL=new-meal.component.js.map