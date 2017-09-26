import { Component } from "@angular/core";
import { Meal } from "./meal.model"

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1 class="jumbotron">Meal Tracker</h1>
    <h3>Your Meals so Far Today</h3><hr>
    <div class="row">
      <div class="col-md-4">
        <div *ngFor="let currentMeal of meals">
          <p>Name of your meal: {{currentMeal.name}}</p>
          <p>Calorie Count: kcal.{{currentMeal.calories}}</p>
          <p>Meal Description: {{currentMeal.description}}</p>
          <button (click)="editThisMeal(currentMeal)">Edit</button>
        </div>
      </div>
      <div class="col-md-4">
        <h4>Change the meal details</h4>
        <p>Enter Meals Name: <input [(ngModel)]="selectedMeal.name"></p>
        <p>Fill in Calories: <input [(ngModel)]="selectedMeal.calories"></p>
        <p>Enter Description: <input [(ngModel)]="selectedMeal.description"></p>
        <button *ngIf="" (click)="saveBottonClick()">Save Changes</button>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[] = [ new Meal("chips",555,"ndondo") ];

  selectedMeal: Meal = this.meals[0];
  editThisMeal(clickedMeal: Meal){
    this.selectedMeal=clickedMeal;
  }
}
