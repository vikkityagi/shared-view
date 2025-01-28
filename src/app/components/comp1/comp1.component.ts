import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  formGroup1: any =  FormGroup;
  @Output() sendFormGroup = new EventEmitter<any>();

  constructor(private fb: FormBuilder){

  }
  ngOnInit(): void {
    this.init();

    this.sendFormGroup.emit(this.formGroup1);

  }

  

  init(){
      this.formGroup1 = this.fb.group({
        username:[''],
        email: ['']
      })
  }


}
