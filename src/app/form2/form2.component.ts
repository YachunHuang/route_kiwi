import { MyNameValidator, MyNameValidatorWithParms } from './validators/myname.validator';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  constructor(private fb: FormBuilder) { }
  form: any = {};
  types = [1, 2, 3, 4, 5];
  ngOnInit() {

    this.form = this.fb.group(
      {
        'title': ['p1value', [Validators.required, Validators.maxLength(10),
        MyNameValidatorWithParms(/Kiwi/i)]],//驗證有Kiwi字串的都可以過(i的意思是不分大小寫)
        'subtitle': ['p2value', Validators.required],
        'types':this.fb.array(
          this.types.map((v,idx)=>{
            return this.fb.control('default value '+v, Validators.required);
          })
        )
      }
    );
  }
}
