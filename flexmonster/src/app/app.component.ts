import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FlexmonsterPivot } from 'ng-flexmonster';
import { Flexmonster } from '../../node_modules/flexmonster/flexmonster.full.js';
import { FlexmonsterService } from './flexmonster.service';
import { Observable } from '../../node_modules/rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';
  @ViewChild('pivot') pivot: FlexmonsterPivot;
  data: any;
  deltaTipos: any;

constructor(public getData: FlexmonsterService ) {}

  ngOnInit() {
    console.log(this.pivot);
}
ngAfterViewInit() {
  this.loadDeltaTipos();
}

public getReport = () => {
const report = this.pivot.flexmonster.getReport();
console.log(report);
}

public loadDeltaTipos = () => {
//  return this.getData.getDeltaTipos().subscribe(deltaTipos => {
//   this.deltaTipos = deltaTipos;
//   this.pivot.flexmonster.load(this.deltaTipos);
//   });
//   }
const data = 'https://cdn.flexmonster.com/reports/report-flat.json';
this.pivot.flexmonster.load(data);
}
}

