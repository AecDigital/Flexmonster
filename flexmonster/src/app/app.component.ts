import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FlexmonsterPivot } from 'ng-flexmonster';
import { Flexmonster } from '../../node_modules/flexmonster/flexmonster.js';
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

constructor(public getData: FlexmonsterService ) {}

  ngOnInit() {
    this.getData.getJsonData().subscribe((jsonData) => {
      this.data = jsonData;
      this.pivot.flexmonster.updateData({data: this.data});
      console.log(this.data);
    });
  }
  ngAfterViewInit() {
  }
}
