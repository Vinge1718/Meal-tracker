import { Component } from "@angular/core";
import { Meal } from "./meal.model"

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1 class="jumbotron">Meal Tracker</h1>
    <h3>An Application to Track your Daily Meals </h3><hr>
    <div class="row">
      <div class="col-sm-4">
      <meal-list
          [childMealList]="meals"
          (clickSender)="editThisMeal($event)"
        ></meal-list>
      </div>
      <meal-edit
          [childSelectedMeal]="selectedMeal"
          (saveEditsClickSender)="saveButtonClick()"
        ></meal-edit>
      <div class="col-sm-4">
        <new-meal
            (newTaskSender)="addionalMeal($event)"
          ></new-meal>
      </div>
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

  addTask(newMealFromChild: Meal){
    this.meals.push(newMealFromChild);
  }
}
