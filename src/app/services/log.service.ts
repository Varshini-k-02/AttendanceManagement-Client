import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private baseUrl = 'http://localhost:8090';
  
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/attendance`);
  }

  getEmployeeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/attendance/${id}`);
  }

  getEmployeeByIdAndDate(id: number, date: string): Observable<any> {
    
    const postData = {
      "id":id,
      "loggedInDate": date
  };

  
    console.log(postData);
    return this.http.post<any>(`${this.baseUrl}/attendance-by-id-date`,postData);
  }

  getAttendanceByRange(id:number, date1:string,date2:string):Observable<any>{
    const postData = {
      "id":id,
      "startDate" : date1,
      "endDate" : date2
    };
    console.log(postData);
    return this.http.post<any>(`${this.baseUrl}/attendance-by-range`,postData)
  }

  postEmpData(name:string,date:string):Observable<any>{
    const postData={
      "name":name,
      "dateOfBirth":date,
      "company":"Worldline"
    }
    return this.http.post<any>(`${this.baseUrl}/post-emp-data`,postData)
  }
  userLogin(email:string,pwd:string):Observable<any>{
    const postData={
      "email":email,
      "pwd":pwd
    }
    return this.http.post<any>(`${this.baseUrl}/user-login`,postData);
  }

}
