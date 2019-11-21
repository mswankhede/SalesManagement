import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopeComponent } from './shope.component';

describe('ShopeComponent', () => {
  let component: ShopeComponent;
  let fixture: ComponentFixture<ShopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
