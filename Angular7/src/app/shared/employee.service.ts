import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from "@angular/common/http"
import { fromEventPattern, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData : Employee;
  list : Employee[];
  readonly rootURL = "http://localhost:63456/api"
  constructor( private http : HttpClient) { }

  postEmployee(formData : Employee) {
    return this.http.post(this.rootURL + '/Employees', formData);
  }

  refreshList()  {
    this.http.get(this.rootURL + '/Employees')
    .toPromise().then(res => this.list = res as Employee[])
  }
  
  putEmployee(formData : Employee) {
    return this.http.put(this.rootURL + '/Employees/' + formData.employeeId, formData);
  }

  deleteEmployee(id : number) {
    return this.http.delete(this.rootURL + '/Employees/' + id)
  }

  updateEmployee(id: any)  {
    return this.http.get(this.rootURL + '/Employees', id)
  }

}
