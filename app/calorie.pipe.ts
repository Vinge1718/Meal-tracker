import { Pipe, PipeTransform } from "@angular/core";
import { Meal } from "./meal.model";

@Pipe ({
  name:"calorieCount",
  pure: false
})

export class CaloriePipe implements PipeTransform{
  transform(input: Meal[], caloriesLimit){
    var output: Meal [] = [];
    if(caloriesLimit === "High Calorie Food"){
      for (var i = 0; i<input.length;i++){
        if(input[i].calories>=500){
          output.push(input[i]);
        }
      }
      return output;
    }
    else if (caloriesLimit === "Low Calorie Food"){
      for(var i = 0;i<input.length;i++ ){
        if(input[i].calories<500){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
