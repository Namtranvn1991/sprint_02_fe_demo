import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EmployeeService} from '../../../service/employee.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  employeeID: string;
  id: string;
  public confirmMessage: string;

  constructor(public dialogRef: MatDialogRef<DeleteComponent>,
              public  employeeService: EmployeeService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  delete() {
    console.log(this.data);
    this.employeeService.deleteEmployee(this.data).subscribe(data => {
      this.dialogRef.close({event: true});
    });
  }
}
