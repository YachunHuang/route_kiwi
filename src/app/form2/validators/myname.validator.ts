import { AbstractControl, ValidatorFn } from '@angular/forms';
//不帶參數的驗證器
export function MyNameValidator(control: AbstractControl)
{
  if(control.value.indexOf('Kiwi') === 0)
  {
    if(control.value.endsWith('0'))
    {
      return {myname:true};
    }
  }
  return null;
}

//帶參數驗證器
export function MyNameValidatorWithParms(nameRe: RegExp): ValidatorFn
{
  return (control: AbstractControl): { [key: string]: any } =>
    {
      const name = control.value; const no = nameRe.test(name);
      return no ? { 'mynamewithparms': true } : null;
    };
}