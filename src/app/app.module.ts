import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {CalculatorComponent} from './calculator/calculator.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';



@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
