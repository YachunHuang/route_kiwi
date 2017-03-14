import { NgForm } from '@angular/forms/src/directives';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  data: any = {};

  constructor() { }

  ngOnInit() {
  }
  doSubmit(f: NgForm) {
    if (f.valid) {
      console.log(f.value);

    }
  }

  isVaile(v:string)
  {
    if(v !='' && v != null)
    {
      return true;

    }
  }
}
