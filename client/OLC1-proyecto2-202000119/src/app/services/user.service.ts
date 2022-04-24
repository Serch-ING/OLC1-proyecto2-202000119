import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL= "http://localhost:8080"
  constructor(private http:HttpClient) { }

  start(){
    alert('aqio')
    return this.http.patch(`${this.URL}/start`,'');
  }

  getInfo(){
    return this.http.get(`${this.URL}/getInfo`);
    //runTS('./src/index.ts');
  }

  setInfo(json:any){
    return this.http.post(`${this.URL}/setInfo`,json);
  }

  getdata(){
    return this.http.get(`${this.URL}/getIncremental`);
  }
  setdata(json:any){
    return this.http.post(`${this.URL}/setIcremental`,json);
  }

}
