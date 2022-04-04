import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

  getdata(){
    //retornar informacion
    this.service.getdata().subscribe(
      (res:any)=>{ console.log(res)
        alert(res.Incremental)  
      },
      (err)=>{console.log(err)}
    )
  }

  setdata(){
    //traer info
    var json = {
      dato: 1000
    }
    this.service.setdata(json).subscribe(
      (res)=>{ alert("Se fue con exito")
        
      },
      (err)=>{console.log(err)}
    )
  }



}
