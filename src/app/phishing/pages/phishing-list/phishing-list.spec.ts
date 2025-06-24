import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhishingList } from './phishing-list';

describe('PhishingList', () => {
  let component: PhishingList;
  let fixture: ComponentFixture<PhishingList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhishingList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhishingList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
