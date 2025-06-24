import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentsCreate } from './incidents-create';

describe('IncidentsCreate', () => {
  let component: IncidentsCreate;
  let fixture: ComponentFixture<IncidentsCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidentsCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentsCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
