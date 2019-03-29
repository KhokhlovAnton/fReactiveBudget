import { Component, OnInit } from '@angular/core';
import { BudgetServiceService } from '../services/budget-service.service';


@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss'],
  providers: [BudgetServiceService]
})
export class BudgetListComponent implements OnInit {
  private curBudget = <any>[];
  currentAccount = 0;
  creditFunds = 32000;
  crrencySavings = 4000;

  constructor(private bsServ: BudgetServiceService) { }

  ngOnInit() {
    this.bsServ.getData().subscribe(
      data => {
        // console.log(data);
        this.curBudget = data.Current;
        const currentAcc = this.curBudget.reduce((acc, req) => acc + (req.ammount * req.mark), 0);
        this.currentAccount = currentAcc;
        console.log(currentAcc);
      }
    );
  }

}
