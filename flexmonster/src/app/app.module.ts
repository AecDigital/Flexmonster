import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexmonsterPivotModule } from 'ng-flexmonster';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { FlexmonsterTableComponent } from './flexmonster-table/flexmonster-table.component';
import { FlexmonsterService } from './flexmonster.service';

@NgModule({
  declarations: [
    AppComponent,
    FlexmonsterTableComponent
  ],
  imports: [
    BrowserModule,
    FlexmonsterPivotModule,
    HttpModule
  ],
  providers: [FlexmonsterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
