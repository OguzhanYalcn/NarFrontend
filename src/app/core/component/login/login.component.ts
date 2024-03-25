import { LoginService } from '../../service/login.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  //loginForm = this.fb.nonNullable.group({
    email = '';
    password = '';
  //});

  constructor(
    private loginService: LoginService,
    private router: Router,
    //private router: Router,
    //private fb: FormBuilder,
  ) {
  }

  login() {
    //  let email = this.loginForm.get('email')!.value;
    //  let password = this.loginForm.get('password')!.value;
    this.loginService.login(this.email, this.password).subscribe({
         next: () => {  //gelen değişkeni kullanmadığı için resp değişkeni yazmaya gerek yok
          this.router.navigate(['/menu']);
         },
         error: (err)=> {
           console.log(err);
         }
       });
  }
  signUp() {
  //   let email = this.loginForm.get('email')!.value;
  //   let password = this.loginForm.get('password')!.value;
  //   this.loginService.signup(email, password).subscribe({
  //     next: () => {
  //       this.router.navigate(['/menu']);
  //     },
  //     error: (err)=> {
  //       console.log(err);
  //     }
  //   });
  }
}