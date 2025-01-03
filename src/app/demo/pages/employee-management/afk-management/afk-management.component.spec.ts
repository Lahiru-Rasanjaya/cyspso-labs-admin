import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFKManagementComponent } from './afk-management.component';

describe('AFKManagementComponent', () => {
  let component: AFKManagementComponent;
  let fixture: ComponentFixture<AFKManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AFKManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AFKManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
