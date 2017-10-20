import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { UploaderComponent } from './components/main/uploader/uploader.component';
import { ContentComponent } from './components/main/content/content.component';
import { UploaderService } from './components/main/uploader/uploader.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UploaderComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UploaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
