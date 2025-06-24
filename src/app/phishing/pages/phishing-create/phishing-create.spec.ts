import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhishingCreate } from './phishing-create';

describe('PhishingCreate', () => {
  let component: PhishingCreate;
  let fixture: ComponentFixture<PhishingCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhishingCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhishingCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
