import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakTestComponent } from './break-test.component';

describe('BreakTestComponent', () => {
  let component: BreakTestComponent;
  let fixture: ComponentFixture<BreakTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreakTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
