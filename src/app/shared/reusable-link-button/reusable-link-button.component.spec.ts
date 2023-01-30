import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableLinkButtonComponent } from './reusable-link-button.component';

describe('ReusableLinkButtonComponent', () => {
  let component: ReusableLinkButtonComponent;
  let fixture: ComponentFixture<ReusableLinkButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableLinkButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableLinkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
