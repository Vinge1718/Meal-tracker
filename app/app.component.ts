import { Component } from "@angular/core";
import { Meal } from "./meal.model"

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1 class="jumbotron">Meal Tracker</h1>
    <h3>An Application to Track your Daily Meals </h3><hr>
    <div class="row">
      <div class="col-md-4">
      <meal-list
          [childMealList]="meals"
          (clickSender)="editThisMeal($event)"
        ></meal-list>
      </div>
      <div class="col-md-4"  *ngIf="selectedMeal">
        <h4>Change the meal details</h4>
        <p>Enter Meals Name: <input [(ngModel)]="selectedMeal.name"></p>
        <p>Fill in Calories: <input [(ngModel)]="selectedMeal.calories"></p>
        <p>Enter Description: <input [(ngModel)]="selectedMeal.description"></p>
        <button (click)="saveButtonClick()">Save Changes</button>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[] = [ new Meal("chips",555,"ndondo") ];

  saveButtonClick(){
    this.selectedMeal = null;
  }

  selectedMeal: Meal = null;
  editThisMeal(clickedMeal: Meal){
    this.selectedMeal=clickedMeal;
  }
}
