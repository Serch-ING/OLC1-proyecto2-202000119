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
  
  public onChange(fileList: FileList): void {
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    let fileContent:any = "";
    fileReader.onloadend = function(x) {
      fileContent = fileReader.result;
    }
    fileReader.readAsText(file);
  }


  setInfo(){
    var entrada = ace.edit('entrada_Ace');
    var salida = ace.edit('salida_Ace');
    var json = {
      input: entrada.getValue()
    }
    this.service.setInfo(json).subscribe(
      (res:any)=>{ alert("Info enviada con exito")
          var respuesta = res.consola;
          salida.setValue(respuesta);
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

}


}
