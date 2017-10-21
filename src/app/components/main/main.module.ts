import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { UploaderComponent } from './uploader/uploader.component';
import { ContentComponent } from './content/content.component';
import { UploaderService } from './uploader/uploader.service';
import { MainComponent } from './main.component';


@NgModule({
  declarations: [
    MainComponent,
    UploaderComponent,
    ContentComponent,
    PdfViewerComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    UploaderService
  ],
  bootstrap: [MainComponent],
  exports: [
    MainComponent,
    UploaderComponent,
    ContentComponent,
    PdfViewerComponent
  ]
})
export class MainModule { }