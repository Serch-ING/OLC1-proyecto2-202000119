import { Component, OnInit } from '@angular/core';
import * as ace from 'ace-builds'
import { UserService } from 'src/app/services/user.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})



export class EditorComponent  {
  

  constructor(private service: UserService,private sanitizer: DomSanitizer) { }
  
  
  fileContent: any = '';


  download() {

    var entrada = ace.edit('entrada_Ace');
    let name:any = prompt("Nombre del archivo:", "");
    var file = new Blob([entrada.getValue()],  { type: 'text/cst;charset=utf-8;' });

  
    var a = document.createElement("a"),url = URL.createObjectURL(file);
    
    a.href = url;
    a.download = name;
    document.body.appendChild(a);


    a.click();
    document.body.removeChild(a);

  }

  onChange(event:any): void {
    try {
    const files = event.target.files;
    var entrada = ace.edit('entrada_Ace');
    let file = files[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = function (x) {
      self.fileContent = fileReader.result;
      entrada.setValue(self.fileContent)
    };

    fileReader.readAsText(file);
   
    
    } catch {}
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
