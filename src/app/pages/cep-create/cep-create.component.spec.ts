import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CepServiceService } from 'src/core/services/cep-service.service';

import { CepCreateComponent } from './cep-create.component';


describe('Testando pagina de criacao de CEP', () => {
  let component: CepCreateComponent;
  let fixture: ComponentFixture<CepCreateComponent>;
  let injector:TestBed;
  let cepService:CepServiceService;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [ CepCreateComponent ],
      providers: [
          {provide: CepServiceService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CepCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    cepService = injector.inject(CepServiceService);
  });

  it('CEPS não podem ter números repetitivos em pares;', () => {
    const form = fixture.nativeElement.querySelector('form');
    let cep = '121359';
    form.submit();
    expect(cep).toBeNull();
  });
});
