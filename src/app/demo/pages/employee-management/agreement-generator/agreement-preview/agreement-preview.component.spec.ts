import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementPreviewComponent } from './agreement-preview.component';

describe('AgreementPreviewComponent', () => {
  let component: AgreementPreviewComponent;
  let fixture: ComponentFixture<AgreementPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgreementPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgreementPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
