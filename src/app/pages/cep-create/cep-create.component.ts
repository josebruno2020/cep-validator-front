import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cep-create',
  templateUrl: './cep-create.component.html',
  styleUrls: ['./cep-create.component.css']
})
export class CepCreateComponent implements OnInit {
  create:FormGroup;
  constructor(
      private fb: FormBuilder,
  ) { 
    this.create = this.fb.group({
        cep: this.fb.control(null, [Validators.required]),
    })
  }

  ngOnInit(): void {
    
  }

}
