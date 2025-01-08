import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementGeneratorComponent } from './agreement-generator.component';

describe('AgreementGeneratorComponent', () => {
  let component: AgreementGeneratorComponent;
  let fixture: ComponentFixture<AgreementGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgreementGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgreementGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
