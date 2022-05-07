import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditorComponent } from './components/editor/editor.component';
import { FormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { AceEditorModule } from 'ng2-ace-editor';
import { ModalTsimbolosComponent } from './components/modal-tsimbolos/modal-tsimbolos.component';
import { ModalAtsComponent } from './components/modal-ats/modal-ats.component';
import { ModalErrorComponent } from './components/modal-error/modal-error.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditorComponent,
    ModalTsimbolosComponent,
    ModalAtsComponent,
    ModalErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CodemirrorModule,
    AceEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
