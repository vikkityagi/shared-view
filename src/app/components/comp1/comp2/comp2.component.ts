import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {

    formGroup2: any = FormGroup;

    constructor(private fb:FormBuilder){
      this.formGroup2 = this.fb.group({})
    }

    setForm2(form: FormGroup){
      this.formGroup2 = form;

      if (!this.formGroup2.contains('address')) {
        this.formGroup2.addControl('address', this.fb.control(''));
      }

      this.formGroup2.updateValueAndValidity();

    }

  onSubmit(){
    console.log('Form Submitted:', this.formGroup2.value);
  }

}
