import { Component } from '@angular/core';
//import { Validators, UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adminapp';
  // submitted = false;
  // loginForm = this.fb.group({
  //   UserName: ['', [Validators.required]],
  //   Password: ['', [Validators.required]],
  // });
  // constructor(
  //   private fb: UntypedFormBuilder,
  //   //private customValidator: CustomvalidationService
  // ) { }

  // onSubmit(event: Event) {
  //   event.preventDefault();
  //   console.log(this.loginForm.value);

  //   // this.adminService
  //   //   .adminAuthLogin(this.loginForm.value)
  //   //   .subscribe((result) => {
  //   //     console.log(result);
  //   //   });
  // }
}
