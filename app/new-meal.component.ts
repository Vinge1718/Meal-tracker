import { Component, Output, EventEmitter } from "@angular/core";
import { Meal } from "./meal.model"

@Component({
  selector:"new-meal",
  template:`
  <h4>Enter Your Meal Details</h4>
  <p>Enter Meals Name: <input #newName></p>
  <p>Fill in Calories: <input #newCalories></p>
  <p>Enter Description: <input #newDescription></p>
  <button (click)="addClicked(newName.value, newCalories.value, newDescription.value)">Add</button>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, calories: number, description: string){
    var newMealToAdd: Meal = new Meal (name, calories, description);
    this.newMealSender.emit(newMealToAdd);
  }
}
