import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  readonly apiUrl = 'https://localhost:44365/api/';
  readonly photoUrl = 'https://localhost:44365/Photos/';

  constructor(private http: HttpClient) {}

  // Department
  getDepartmentList(): Observable<any[]> {
    debugger;
    var t =
      'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjYzNjM3MGE3LTNhY2QtNDM0ZS04ODEwLTY3YTk2YjM4MmFiYSIsInN1YiI6WyJTYXNpa3VtYXIiLCJTYXNpMTQzMiJdLCJqdGkiOiIwZDYyMTIxZi0zNmQ3LTQ5NDgtYWQwZS1mYTA1MTNhYjQyMmQiLCJuYmYiOjE2OTA2MzMxMzMsImV4cCI6MTY5MTA2NTEzMywiaWF0IjoxNjkwNjMzMTMzLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDM2NS8iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo0NDM2NS8ifQ.Z9HEnG7oovN19ydTB_rXHYHpB_DxP1jfzhlwoTkxEuyVVfII9DxS4jktI_R-rQjcWDj08GX90QolF8iBUWuZnw';

    // var headers_object = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   Authorization: 'Bearer ' + t,
    // });
    var headers_object = new HttpHeaders().set('Authorization', 'Bearer ' + t);

    const httpOptions = {
      headers: headers_object,
    };
    // const headers = {
    //   Authorization:
    //     'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjYzNjM3MGE3LTNhY2QtNDM0ZS04ODEwLTY3YTk2YjM4MmFiYSIsInN1YiI6WyJTYXNpa3VtYXIiLCJTYXNpMTQzMiJdLCJqdGkiOiIwZDYyMTIxZi0zNmQ3LTQ5NDgtYWQwZS1mYTA1MTNhYjQyMmQiLCJuYmYiOjE2OTA2MzMxMzMsImV4cCI6MTY5MTA2NTEzMywiaWF0IjoxNjkwNjMzMTMzLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDM2NS8iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo0NDM2NS8ifQ.Z9HEnG7oovN19ydTB_rXHYHpB_DxP1jfzhlwoTkxEuyVVfII9DxS4jktI_R-rQjcWDj08GX90QolF8iBUWuZnw',
    // };
    return this.http.get<any[]>(
      this.apiUrl + 'Department/GetDepartment',
      httpOptions
    );
  }

  addDepartment(dept: any): Observable<any> {
    debugger;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<any>(
      this.apiUrl + 'Department/AddDepartment',
      dept,
      httpOptions
    );
  }

  updateDepartment(dept: any): Observable<any> {
    debugger;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put<any>(
      this.apiUrl + 'Department/UpdateDepartment/',
      dept,
      httpOptions
    );
  }

  deleteDepartment(deptId: number): Observable<number> {
    debugger;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.delete<number>(
      this.apiUrl + 'Department/DeleteDepartment/' + deptId,
      httpOptions
    );
  }

  // Employee
  getEmployeeList(): Observable<any[]> {
    debugger;
    return this.http.get<any[]>(this.apiUrl + 'Employee/GetEmployee');
  }

  addEmployee(emp: any): Observable<any> {
    debugger;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<any>(
      this.apiUrl + 'Employee/AddEmployee',
      emp,
      httpOptions
    );
  }

  updateEmployee(emp: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put<any>(
      this.apiUrl + 'Employee/UpdateEmployee/',
      emp,
      httpOptions
    );
  }

  deleteEmployee(empId: number): Observable<number> {
    debugger;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.delete<number>(
      this.apiUrl + 'Employee/DeleteEmployee/' + empId,
      httpOptions
    );
  }

  uploadPhoto(photo: any) {
    return this.http.post(this.apiUrl + 'Employee/savefile', photo);
  }

  getAllDepartmentNames(): Observable<any[]> {
    debugger;
    return this.http.get<any[]>(this.apiUrl + 'Employee/GetAllDepartmentNames');
  }
}
