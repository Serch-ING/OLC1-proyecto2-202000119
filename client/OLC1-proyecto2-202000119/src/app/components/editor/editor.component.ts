import { Component, OnInit } from '@angular/core';
import * as ace from 'ace-builds'

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent  {


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
