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

  constructor(private bsServ: BudgetServiceService) { }

  ngOnInit() {
    this.bsServ.getData().subscribe(
      data => {
        // console.log(data);
        this.curBudget = data.Current;
        const currentAcc = this.curBudget.reduce((acc, req) => acc + (req.ammount * req.mark), 0);
        console.log(currentAcc);
      }
    );
  }

}
