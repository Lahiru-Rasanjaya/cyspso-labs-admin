import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResignationPortalComponent } from './resignation-portal.component';

describe('ResignationPortalComponent', () => {
  let component: ResignationPortalComponent;
  let fixture: ComponentFixture<ResignationPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResignationPortalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResignationPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
