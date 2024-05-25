import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBusinessLeadComponent } from './all-business-lead.component';

describe('AllBusinessLeadComponent', () => {
  let component: AllBusinessLeadComponent;
  let fixture: ComponentFixture<AllBusinessLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBusinessLeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBusinessLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
