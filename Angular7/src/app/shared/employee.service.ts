import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from "@angular/common/http"
import { fromEventPattern } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData : Employee;
  list : Employee[];
  readonly rootURL = "http://localhost:63456/api"
  constructor( private http : HttpClient) { }

  postEmployee(formData : Employee) {
    return this.http.post(this.rootURL + '/SampleEmployees', formData);
  }

  refreshList()  {
    this.http.get(this.rootURL + '/SampleEmployees')
    .toPromise().then(res => this.list = res as Employee[])
  }
  
  putEmployee(formData : Employee) {
    return this.http.put(this.rootURL + '/SampleEmployees/' + formData.employeeId, formData);
  }

  deleteEmployee(id : number) {
    return this.http.delete(this.rootURL + '/SampleEmployees/' + id)
  }
}
