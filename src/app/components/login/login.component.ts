import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LogService } from 'src/app/services/log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  isFormSubmitted = false;
  isUser:boolean;
  constructor(private log: LogService,private snackBar: MatSnackBar,private router: Router) {}
  ngOnInit() {
  this.loginForm = new FormGroup({
    email:new FormControl('',Validators.required),
    pwd: new FormControl('',Validators.required)
  });
}
onSubmit(){
  let email=this.loginForm.get('email')?.value;
  let password=this.loginForm.get('pwd')?.value;

  if (this.loginForm.invalid) {
    this.snackBar.open('Form is invalid!', 'Close', {
      duration: 3000,
      verticalPosition: 'top',
    horizontalPosition: 'right'
    });
}
if(email !=="" && password!==""){
  this.log.userLogin(email,password).subscribe(response => {
    this.isUser = response;
  });
  if(this.isUser){
    this.router.navigate(['view']);
  }
  else{
    this.snackBar.open('Invalid details', 'Close', {
      duration: 3000,
      verticalPosition: 'top',
    horizontalPosition: 'right'
    });
  }

}
}
onReset(){
  this.loginForm.reset();
}
}
