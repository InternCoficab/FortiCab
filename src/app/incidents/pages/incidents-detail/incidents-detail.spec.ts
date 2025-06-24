import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentsDetail } from './incidents-detail';

describe('IncidentsDetail', () => {
  let component: IncidentsDetail;
  let fixture: ComponentFixture<IncidentsDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidentsDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentsDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
