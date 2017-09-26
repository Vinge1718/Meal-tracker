import { Component, Input, Output, EventEmitter } from "@angular/core"
import { Meal } from "./meal.model"

@Component ({
  selector: "meal-list",
  template:`
  <div *ngFor="let currentMeal of childMealList">
    <h4>Each Meal Details</h4>
    <p>Name of your meal: {{currentMeal.name}}</p>
    <p>Calorie Count: kcal.{{currentMeal.calories}}</p>
    <p>Meal Description: {{currentMeal.description}}</p>
    <button (click)="editThisMeal(currentMeal)">Edit</button>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  editThisMeal(MealToEdit: Meal){
    this.clickSender.emit(MealToEdit);
  }
}
