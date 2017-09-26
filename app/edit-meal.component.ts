import { Component, Input, Output, EventEmitter} from "@angular/core";
import { Meal } from "./meal.model";

@Component({
  selector:"meal-edit",
  template:`
    <div class="col-sm-4"  *ngIf="childSelectedMeal">
      <h4>Change the meal details</h4>
      <p>Enter Meals Name: <input [(ngModel)]="childSelectedMeal.name"></p>
      <p>Fill in Calories:  kcal.<input type="number" [(ngModel)]="childSelectedMeal.calories"></p>
      <p>Enter Description: <input [(ngModel)]="childSelectedMeal.description"></p>
      <button (click)="saveButtonClick()">Save Changes</button>
    </div>
`
})

export class MealEditComponent {
  @Input() childSelectedMeal: Meal;
  @Output() saveEditsClickSender = new EventEmitter();
  saveButtonClick(){
    this.saveEditsClickSender.emit();
  }
}
