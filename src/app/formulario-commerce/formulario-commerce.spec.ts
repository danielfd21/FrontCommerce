import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioCommerce } from './formulario-commerce';

describe('FormularioCommerce', () => {
  let component: FormularioCommerce;
  let fixture: ComponentFixture<FormularioCommerce>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCommerce],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioCommerce);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
