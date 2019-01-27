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
    return this.http.get('https://next.json-generator.com/api/json/get/EJkUF_LQ8').map(res => {
      const jsonData = res.json();
      console.log(res);
      return jsonData;
    });
  }
  getDeltaTipos() {
    return this.http.get('https://next.json-generator.com/api/json/get/VymQV_8QI').map(res => {
      const deltaTipos = res.json();
      console.log(deltaTipos);
      return deltaTipos;
    });
  }
}
