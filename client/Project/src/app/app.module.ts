import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { GhButtonModule } from '@ctrl/ngx-github-buttons';

import { CodemirrorModule } from '../lib/public_api';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [BrowserModule, FormsModule, CodemirrorModule, GhButtonModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
