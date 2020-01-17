import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {

  constructor(private service : EmployeeService,
    private toastr : ToastrService) { }

  ngOnInit() {
    
  }


  searchUser(){
    this.service.refreshList();
  }

  onDelete(id : number) {
    if(confirm('Are you sure to delete this record?')){
    this.service.deleteEmployee(id).subscribe(res => {
      this.service.refreshList();
      this.toastr.warning ('Deleted successfully.', 'Employee Register')
    })
    }
  }

  populateForm(emp : Employee){
    this.service.formData = Object.assign({}, emp);
  }

  onUpdate(form: NgForm){
    
  }

  createNewUser(){
    Response.redirect("./employee/employee/employee.component.ts")
  }

}
