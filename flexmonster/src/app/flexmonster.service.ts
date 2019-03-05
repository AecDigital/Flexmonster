import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from '../../node_modules/rxjs';
import 'rxjs/add/operator/map';
import { KeyRegistry } from '@angular/core/src/di/reflective_key';
import { ValueTransformer } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class FlexmonsterService {
  constructor(private http: Http) {}

  getJsonData() {
    return this.http
      .get('https://next.json-generator.com/api/json/get/4y5nqZSXL')
      .map(res => {
        const jsonData = res.json();
        const keys = jsonData.columnNames.map(j => {
          return j;
        });
        const values = jsonData.trades.map(e => {
          e.map(h => {
            return h;
          });
          return e;
        });
        values.forEach(element => {
          const data = {};
          keys.forEach((key, i) => (data[key] = element[i]));
          console.log(data);
          return data;
        });
      });
  }

    getDeltaTipos() {
      return this.http.get('https://cdn.flexmonster.com/reports/report-flat.json').map(res => {
        const deltaTipos = res.json();
        return deltaTipos;
      });
//       return this.http
//         .get('https://next.json-generator.com/api/json/get/Nk1PGQ5SI')
//         .map(res => {
//           const deltaTipos = res.json();
//           const flexMonsterData = [];
//           deltaTipos.data.forEach(element => {
//             const dataItem = Object.assign({}, ...(element.dataItems.map(item => ({ [item.id]: item.value }))));
//             flexMonsterData.push(dataItem);
//         });
//         console.log(flexMonsterData);
//         return flexMonsterData;
//   });
// }
    }
}
