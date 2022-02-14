import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { ListComponent } from './list/list.component';
import { DeleteComponent } from './delete/delete.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [ListComponent, DeleteComponent],
    imports: [
        CommonModule,
        EmployeeRoutingModule,
        MatDialogModule,
        FormsModule
    ]
})
export class EmployeeModule { }
