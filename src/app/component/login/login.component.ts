import { Component } from '@angular/core';
import { Validators, UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group({
    UserName: ['', [Validators.required]],
    Password: ['', [Validators.required]],
  });
  constructor(
    private fb: UntypedFormBuilder,
    //private customValidator: CustomvalidationService
  ) { }

  onSubmit(event: Event) {
    event.preventDefault();
    console.log(this.loginForm.value);

    // this.adminService
    //   .adminAuthLogin(this.loginForm.value)
    //   .subscribe((result) => {
    //     console.log(result);
    //   });
  }

}
