import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploaderComponent } from './uploader/uploader.component';
import { ContentComponent } from './content/content.component';
import { UploaderService } from './uploader/uploader.service';

@NgModule({
  declarations: [
    UploaderComponent,
    ContentComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    UploaderService
  ]
})
export class MainModule { }
