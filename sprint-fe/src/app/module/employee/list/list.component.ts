import {Component, OnChanges, OnInit} from '@angular/core';
import {EmployeeService} from '../../../service/employee.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Employee} from '../../../model/employee';
import {DeleteComponent} from '../delete/delete.component';
import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  employeeList: Employee[];
  dialogRef: MatDialogRef<DeleteComponent>;
  page = 0;
  totalPage;
  deleteMessenger;
  sortType = 0;
  roleType = 0;
  keyword = '';

  constructor(private employeeService: EmployeeService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.employeeService.getEmployeeList(this.page, this.sortType, this.roleType, this.keyword).subscribe(
      data => {
        this.totalPage = data.totalPages;
        this.employeeList = data.content;
      }
    );
  }

  openDialog(id) {
    this.dialogRef = this.dialog.open(DeleteComponent, {
      height: '200px',
      width: '300px',
      data: id,
    });
    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteMessenger = 'nhân viên ' + id + ' đã được xoá thành công';
        this.page = 0;
        this.ngOnInit();
      }
    });
  }

  loadMore() {
    this.page += 1;
    this.employeeService.getEmployeeList(this.page, this.sortType, this.roleType, this.keyword).subscribe(
      data => {
        this.employeeList = this.employeeList.concat(data.content);
      }
    );
  }

  sort() {
    this.page = 0;
    this.search();
  }

  role() {
    this.page = 0;
    this.search();
  }

  searchKey() {
    this.page = 0;
    this.search();
  }

  search() {
    this.employeeService.getEmployeeList(this.page, this.sortType, this.roleType, this.keyword).subscribe(
      data => {
        console.log(data);
        this.totalPage = data.totalPages;
        this.employeeList = data.content;
      }
    );
  }
}
