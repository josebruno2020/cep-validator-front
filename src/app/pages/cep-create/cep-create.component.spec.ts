import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CepCreateComponent } from './cep-create.component';

describe('CepCreateComponent', () => {
  let component: CepCreateComponent;
  let fixture: ComponentFixture<CepCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CepCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CepCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
