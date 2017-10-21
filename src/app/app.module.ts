import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { MainModule } from './components/main/main.module';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    //PdfViewerComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
