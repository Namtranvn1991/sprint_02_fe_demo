import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  API_URL = 'http://localhost:8080/api/employee/';

  constructor(private http: HttpClient) { }

  getEmployeeList(page: number): Observable<any> {
    return this.http.get(this.API_URL + 'list' + '?page=' + page);
  }

  deleteEmployee(employeeId): Observable<any> {
    return this.http.delete(this.API_URL + 'delete/' + employeeId);
  }
}
