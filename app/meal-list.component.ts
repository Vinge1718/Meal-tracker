import { Component, Input, Output, EventEmitter } from "@angular/core"
import { Meal } from "./meal.model"

@Component ({
  selector: "meal-list",
  template:`
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected"> All Meals </option>
    <option value="High Calorie Food">High Calorie Meals</option>
    <option value="Low Calorie Food">Low Calorie Food</option>
  </select>
  <div *ngFor="let currentMeal of childMealList | calorieCount:selectedCalorieView">
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

  public selectedCalorieView: string = "all";
  onChange(optionFromMenu){
    this.selectedCalorieView = optionFromMenu;
  }
}
