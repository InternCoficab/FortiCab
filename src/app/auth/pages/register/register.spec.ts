import { ComponentFixture, TestBed } from '@angular/core/testing';

// Make sure the path and export are correct; adjust as needed:
import { Register } from './register';
// or, if the file is named 'register.ts' and exports Register:
 // import { Register } from './register';

describe('Register', () => {
  let component: Register;
  let fixture: ComponentFixture<Register>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Register]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Register);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
