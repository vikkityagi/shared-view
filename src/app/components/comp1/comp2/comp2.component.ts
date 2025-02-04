import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  receivedForm: any = FormGroup;
  // formGroup2: any = FormGroup;

  constructor(private fb:FormBuilder,private cdRef: ChangeDetectorRef){
      
  }

  ngOnInit(): void {
    this.receivedForm = this.fb.group({
      address: ['']
    })
  }
  

    

  onSubmit(){
    console.log('Form Submitted:', this.receivedForm.value);
  }

}
