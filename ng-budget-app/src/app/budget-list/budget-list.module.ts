import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetListComponent } from './budget-list.component';
import { BudgetListRoutingModule } from './budget-list-routing.module';

@NgModule({
  declarations: [
    BudgetListComponent
  ],
  imports: [
    CommonModule,
    BudgetListRoutingModule
  ],
  exports: [
    BudgetListComponent
  ]
})
export class BudgetListModule { }
