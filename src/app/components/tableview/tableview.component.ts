import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LogService } from 'src/app/services/log.service';



@Component({
  selector: 'app-tableview',
  templateUrl: './tableview.component.html',
  styleUrls: ['./tableview.component.css']
})
export class TableviewComponent {

  checked:false
  employeeForm: FormGroup;
  applicant: any;
  isChecked:boolean;
  ngOnInit() {
    this.employeeForm = new FormGroup({
      disableInput:new FormControl(false),
      employeeId: new FormControl('',Validators.required),
      range1: new FormControl(''),
      range2:new FormControl(''),
      allEmp: new FormControl('')
    });
    
    this.employeeForm.get('disableInput').valueChanges.subscribe(checked => {
      const employeeIdControl = this.employeeForm.get('employeeId');
      if (checked) {
        employeeIdControl.disable();
      } else {
        employeeIdControl.enable();
      }
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
  data: any;
  
  id:number;
  
  isFormSubmitted = false;

  constructor(private log: LogService,private snackBar: MatSnackBar) {
    
   }

  
  onSubmit() {
    this.isFormSubmitted = true;
    if (this.employeeForm.invalid) {
      this.snackBar.open('Form is invalid!', 'Close', {
        duration: 3000,
        verticalPosition: 'top',
      horizontalPosition: 'right'
      });
    }
    this.id = this.employeeForm.get('employeeId')?.value;
    this.isChecked=this.employeeForm.get('disableInput')?.value;
    let d1=this.employeeForm.get('range1')?.value;
    let d2=this.employeeForm.get('range2')?.value;
    const dt1=this.formatDate(d1);
    const dt2=this.formatDate(d2);
    if(d1==="" && d2==="" && this.isChecked === false){
      this.log.getEmployeeById(this.id).subscribe(response => {
        this.data = response;
      });
    }
    else if(this.isChecked){
      this.log.getData().subscribe(response => {
        this.data = response;
      });
    }
    else if(d1!=="" && d2!=="" && this.id!==null){
      this.log.getAttendanceByRange(this.id,dt1,dt2).subscribe(response => {
        this.data = response;
      });
    }
   
  }
  onReset() {
    this.employeeForm.reset();
  }

}
