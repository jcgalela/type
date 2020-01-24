import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {

  constructor(private service: EmployeeService,
    private toastr: ToastrService,
    private router: Router) { }

  isUpdate: boolean;
  form:
    any = {
      employeeId: '',
      firstName: '',
      middleName: '',
      lastName: '',
      birthday: '',
      emergencyName: '',
      emergencyAddress: '',
      emergencyContact: '',
      employeeStatus: '',
      sssnum: '',
      tinnum: '',
      dateEmployed: '',
      dateFrom: '',
      dateTo: '',
      signature: '',
      userName: '',
      email: '',
      password: '',
      image: ''
    };

  ngOnInit() {

  }


  searchUser() {
    this.service.refreshList();
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteEmployee(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted successfully.', 'Employee Register')
      })
    }
  }

  onUpdate(id: number, emp: Employee) {
    this.populateForm(emp);
    this.service.updateEmployee(id);
    this.router.navigate(['/registration']);
    this.service.updateEmployee(id);
  }

  checkIfFormUpdate() {
    if (this.service.formData != null) {
      return true;
    }
    return false;
  }
  updateRecord(emp: Employee) {
    this.service.updateEmployee(emp.employeeId);
    this.router.navigate(['/registration']);
    if (this.checkIfFormUpdate) {
      this.populateForm(this.form);
      this.service.refreshList();
    }

    
    this.service.updateEmployee(emp).subscribe(res => {
      this.populateForm(emp);
    });
  }

  populateForm(emp: Employee) {
    this.service.formData = Object.assign({}, emp);
    this.router.navigate(['/registration']);
  }

  createNewUser() {
    this.router.navigate(['/registration']);
  }

}
