import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { MealListComponent } from "./meal-list.component";
import { MealEditComponent } from "./edit-meal.component";
import { NewMealComponent } from "./new-meal.component";
import { CaloriePipe } from "./calorie.pipe"


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MealListComponent,
    MealEditComponent,
    NewMealComponent,
    CaloriePipe
   ],
  bootstrap: [AppComponent]
})

export class AppModule { }
