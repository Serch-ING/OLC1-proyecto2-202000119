import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL= "http://localhost:3000/api"
  constructor(private http:HttpClient) { }

  getInfo(){
    return this.http.get(`${this.URL}/getInfo`);
    //runTS('./src/index.ts');
  }

  setInfo(json:any){
    return this.http.post(`${this.URL}/ejecutar`,json);
  }

  getdata(){
    return this.http.get(`${this.URL}/getIncremental`);
  }
  setdata(json:any){
    return this.http.post(`${this.URL}/setIcremental`,json);
  }

}
