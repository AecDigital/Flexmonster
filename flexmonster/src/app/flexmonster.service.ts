import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from '../../node_modules/rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class FlexmonsterService {

  constructor(private http: Http) { }

  getJsonData() {
    return this.http.get('https://next.json-generator.com/api/json/get/4y5nqZSXL').map(res => {
      const jsonData = res.json();
      console.log(jsonData);
      return jsonData;
    });
  }
}
