import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged} from 'rxjs/operators';
import { LoginService } from 'src/app/Services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  @ViewChild('formElement') formElement: FormGroupDirective;
  showPass = false;
  form = new FormGroup({
    user: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20)
    ]),
    range: new FormControl(0, [
      Validators.required,
      Validators.min(100)
    ])
  });

  constructor(private loginService: LoginService, private router: Router) { }

  logo = '/assets/nik_logo.png'

  inputValue: number= 0

  ngOnInit(): void {
    this.range.valueChanges.pipe(
      debounceTime(200),
      distinctUntilChanged()
    ).subscribe((value) => {
      if(value === 100 && this.form.valid) {
        this.formElement.onSubmit(undefined)
      } else {
        this.range.setValue(0)
      }
    })
  }


  get user() {
    return this.form.controls.user;
  }
  
  get password() {
    return this.form.controls.password;
  }

  get range() {
    return this.form.get('range');
  }
  
  logIn() {
    if(this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loginService.logIn(this.form.value).subscribe(
      () => {
        this.router.navigate(['home']);
      },
      (err) => {
        console.log('Hubo un error');
        console.error(err);
      }
    );
  }
  
  togglePass() {
    this.showPass = !this.showPass
    
  }
}

