import { Component, OnInit } from '@angular/core';
import * as ace from 'ace-builds'
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent  {
  constructor(private service: UserService) { }
  
  start(){
    this.service.start();
  }

  setInfo(){
    var entrada = ace.edit('entrada_Ace');
    var json = {
      info: entrada.getValue()
    }
    this.service.setInfo(json).subscribe(
      (res)=>{ alert("Info enviada con exito")
        
      },
      (err)=>{console.log(err)}
    )
  }

  getInfo(){
    //retornar informacion
    this.service.getInfo().subscribe(
      (res:any)=>{ console.log(res)
        alert(res.info);
      },
      (err)=>{console.log(err)}
    )
  }


  Ejecutar(){
    var entrada = ace.edit('entrada_Ace');
    //alert(entrada.getValue())

    var salida = ace.edit('salida_Ace');
    salida.setValue(entrada.getValue());
  }

  ngOnInit() {
    var editor = ace.edit('salida_Ace');
    editor.setValue('hola');
    editor.getSession().setUseWorker(false);
    editor.setShowPrintMargin(false);
    editor.setReadOnly(true);
    console.log(editor.getValue())
}


}
