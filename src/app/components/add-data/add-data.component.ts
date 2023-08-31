import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent {
  addEmp: FormGroup;
  isFormSubmitted = false;
  data:any;
  constructor(private log: LogService,private snackBar: MatSnackBar) {}

  ngOnInit() {
  this.addEmp = new FormGroup({
    name:new FormControl('',Validators.required),
    dateOfBirth: new FormControl('',Validators.required)
  });
}

private formatDate(date: Date): string {
  if(typeof date === 'object' && date !== null && 'getDate' in date){
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  
  return `${year}-${month}-${day}`;
  }
  return '';
}

onSubmit(){
  this.isFormSubmitted=true;
  let n=this.addEmp.get('name')?.value;
  let d=this.addEmp.get('dateOfBirth')?.value;
  let date=this.formatDate(d);
  if (this.addEmp.invalid) {
    this.snackBar.open('Form is invalid!', 'Close', {
      duration: 3000,
      verticalPosition: 'top',
    horizontalPosition: 'right'
    });
  }
  if(n !=="" && d!==""){
    this.log.postEmpData(n,date).subscribe(response => {
      this.data = response;
    });
    this.snackBar.open('Form submitted successfully!', 'Close', {
      duration: 3000,
      verticalPosition: 'top',
    horizontalPosition: 'right'
    });
  }
}
onReset(){
  this.addEmp.reset();
}

}
