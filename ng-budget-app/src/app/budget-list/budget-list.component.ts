import { Component, OnInit } from '@angular/core';
import { BudgetServiceService } from '../services/budget-service.service';


@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss'],
  providers: [BudgetServiceService]
})
export class BudgetListComponent implements OnInit {

  constructor(private bsServ: BudgetServiceService) { }

  ngOnInit() {
    this.bsServ.getData().subscribe(data => {
      console.log(data);}
    );
  }

}
