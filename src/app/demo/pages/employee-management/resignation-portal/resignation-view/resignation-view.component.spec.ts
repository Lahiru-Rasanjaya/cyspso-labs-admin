import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResignationViewComponent } from './resignation-view.component';

describe('ResignationViewComponent', () => {
  let component: ResignationViewComponent;
  let fixture: ComponentFixture<ResignationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResignationViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResignationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
