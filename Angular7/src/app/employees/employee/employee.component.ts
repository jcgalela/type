import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { stringify } from 'querystring';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/shared/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeeService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
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
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.employeeId == '') {
      this.insertRecord(form);
    }
    else {
    this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.service.postEmployee(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully.', 'Employee Register')
      this.resetForm(form);
      this.service.refreshList();

    });
  }

  updateRecord(form: NgForm) {
    this.service.putEmployee(form.value).subscribe(res => {
      this.toastr.info('Updated successfully.', 'Employee Register')
      this.resetForm(form);
      this.service.refreshList();
    })
  }

}
