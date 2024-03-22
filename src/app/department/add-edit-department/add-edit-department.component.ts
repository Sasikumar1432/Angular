import {
  Component,
  OnInit,
  Input,
  ViewChild,
  EventEmitter,
  Output,
} from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { ShowDepartmentComponent } from '../show-department/show-department.component';

@Component({
  selector: 'app-add-edit-department',
  templateUrl: './add-edit-department.component.html',
  styleUrls: ['./add-edit-department.component.css'],
})
export class AddEditDepartmentComponent implements OnInit {
  constructor(private service: ApiserviceService) {}

  @Input() depart: any;
  @Input() ActivateAddEditDepartComp: any;
  @Output() IsmodelShowEmitter = new EventEmitter<any>();

  @ViewChild(ShowDepartmentComponent) private _child: ShowDepartmentComponent;

  DepartmentId = '';
  DepartmentName = '';
  ngOnInit(): void {
    this.DepartmentId = this.depart.DepartmentId;
    this.DepartmentName = this.depart.DepartmentName;
  }

  addDepartment() {
    debugger;
    var dept = {
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName,
    };
    this.service.addDepartment(dept).subscribe((res) => {
      debugger;
      if (res === 'Added Successfully') {
        debugger;
        this.ActivateAddEditDepartComp = false;
        debugger;
        this.IsmodelShowEmitter.emit();
      }
    });
  }

  updateDepartment() {
    debugger;
    var dept = {
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName,
    };
    this.service.updateDepartment(dept).subscribe((res) => {
      debugger;
      if (res === 'Updated Successfully') {
        debugger;
        this.ActivateAddEditDepartComp = false;
        debugger;

        this.IsmodelShowEmitter.emit();
        debugger;
        let obj = new ShowDepartmentComponent(this.service);

        obj.refreshDepList();
      }
    });
  }
}
