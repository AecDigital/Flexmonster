import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexmonsterTableComponent } from './flexmonster-table.component';

describe('FlexmonsterTableComponent', () => {
  let component: FlexmonsterTableComponent;
  let fixture: ComponentFixture<FlexmonsterTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexmonsterTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexmonsterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
