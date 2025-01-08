import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendViaEmailComponent } from './send-via-email.component';

describe('SendViaEmailComponent', () => {
  let component: SendViaEmailComponent;
  let fixture: ComponentFixture<SendViaEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendViaEmailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendViaEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
