import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhishingDetail } from './phishing-detail';

describe('PhishingDetail', () => {
  let component: PhishingDetail;
  let fixture: ComponentFixture<PhishingDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhishingDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhishingDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
