import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  receivedForm : any = FormGroup;

  constructor(private fb:FormBuilder){

  }


  ngOnInit(): void {
      this.receivedForm = this.fb.group({
        mobile_no: ['']
      })
  }
}
