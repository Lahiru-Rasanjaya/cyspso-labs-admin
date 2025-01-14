import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveApprovalViewComponent } from './leave-approval-view.component';

describe('LeaveApprovalViewComponent', () => {
  let component: LeaveApprovalViewComponent;
  let fixture: ComponentFixture<LeaveApprovalViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveApprovalViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveApprovalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
