import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css'],
})
export class ShowEmployeeComponent implements OnInit {
  constructor(private service: ApiserviceService) {}

  EmployeeList: any = [];
  ModalTitle = '';
  ActivateAddEditEmpComp: boolean = false;
  emp: any;
  isedit: boolean = false;
  IsmodelShow: boolean = true;

  ngOnInit(): void {
    debugger;
    if (!this.isedit) this.refreshEmpList();
  }

  addClick() {
    debugger;
    this.emp = {
      EmployeeID: '0',
      EmployeeName: '',
      Department: '',
      DateOfJoining: '',
      PhotoFileName: 'anonymous.png',
    };
    this.ModalTitle = 'Add Employee';
    this.ActivateAddEditEmpComp = true;
  }

  editClick(item: any) {
    debugger;
    this.emp = item;
    this.emp.DateOfJoining = formatDate(item.DOJ, 'yyyy-MM-dd', 'en-US');
    this.ModalTitle = 'Edit Employee';
    this.ActivateAddEditEmpComp = true;
    this.isedit = true;
  }

  deleteClick(item: any) {
    debugger;
    if (confirm('Are you sure??')) {
      this.service.deleteEmployee(item.EmployeeID).subscribe((data) => {
        alert(data.toString());
        this.refreshEmpList();
      });
    }
  }

  closeClick() {
    debugger;
    this.ActivateAddEditEmpComp = true;
    this.refreshEmpList();
  }

  refreshEmpList() {
    debugger;
    this.service.getEmployeeList().subscribe((data) => {
      this.EmployeeList = data;
    });
  }
}
