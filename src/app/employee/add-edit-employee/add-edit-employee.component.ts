import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { formatDate } from '@angular/common';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css'],
})
export class AddEditEmployeeComponent implements OnInit {
  constructor(private service: ApiserviceService) {}

  @Input() emp: any;
  @Input() ActivateAddEditEmpComp: any;
  IsmodelShow: boolean = false;
  @Output() IsmodelShowEmitter = new EventEmitter<boolean>();
  EmployeeID = '';
  EmployeeName = '';
  Department = '';
  DateOfJoining = '';
  PhotoFileName = '';
  PhotoFilePath = '';
  DepartmentList: any = [];

  ngOnInit(): void {
    debugger;
    this.loadEmployeeList();
  }

  loadEmployeeList() {
    debugger;
    this.service.getAllDepartmentNames().subscribe((data: any) => {
      this.DepartmentList = data;

      this.EmployeeID = this.emp.EmployeeID;
      this.EmployeeName = this.emp.EmployeeName;
      this.Department = this.emp.Department;
      this.DateOfJoining = this.emp.DateOfJoining;
      this.PhotoFileName = this.emp.PhotoFileName;
      this.PhotoFilePath = this.service.photoUrl + this.PhotoFileName;
    });
  }

  addEmployee() {
    debugger;
    var val = {
      EmployeeID: this.EmployeeID,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      DOJ: formatDate(this.DateOfJoining, 'yyyy-MM-dd', 'en-US'),
      PhotoFileName: this.PhotoFileName,
    };

    this.service.addEmployee(val).subscribe((res) => {
      debugger;
      if (res === 'Added successfully') {
        debugger;
        this.ActivateAddEditEmpComp = false;
        this.loadEmployeeList();
      }
    });
  }

  updateEmployee() {
    debugger;
    var val = {
      EmployeeID: this.EmployeeID,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      DOJ: this.DateOfJoining,
      PhotoFileName: this.PhotoFileName,
    };

    this.service.updateEmployee(val).subscribe((res) => {
      debugger;
      if (res === 'Updated successfully') {
        debugger;
        this.ActivateAddEditEmpComp = false;
        this.IsmodelShowEmitter.emit(this.IsmodelShow);

        this.loadEmployeeList();
      }
    });
  }

  uploadPhoto(event: any) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    this.service.uploadPhoto(formData).subscribe((data: any) => {
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.service.photoUrl + this.PhotoFileName;
    });
  }
}
