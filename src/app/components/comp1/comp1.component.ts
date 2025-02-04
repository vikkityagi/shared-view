import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  @Input() formGroup1: any =  FormGroup;
  

  constructor(private fb: FormBuilder){
    

  }
  ngOnInit(): void {
    // Add form fields to the parent form
    this.formGroup1.addControl('username', this.fb.control(''));
    this.formGroup1.addControl('email', this.fb.control(''));
  }

  

 


}
