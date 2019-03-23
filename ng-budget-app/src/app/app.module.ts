import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetListModule } from './budget-list/budget-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BudgetListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
