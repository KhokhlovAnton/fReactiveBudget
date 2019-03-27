import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import Current from '../data/Current.json';

@Injectable({
  providedIn: 'root'
})
export class BudgetServiceService {

  private _jsonURL = 'assets/data/Current.json';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this._jsonURL)
      /* TODO add map to parse JSON */
      .pipe(map((response:any) => response)
      );
  }
}
