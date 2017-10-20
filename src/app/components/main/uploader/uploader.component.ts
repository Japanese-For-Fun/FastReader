import { Component, OnInit } from '@angular/core';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { UploaderService } from './uploader.service';
import { SafeResourceUrl } from '@angular/platform-browser'

@Component({
  selector: 'fr-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {
  constructor(private service: UploaderService) {
    this.pdfSrc = 'https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf';
    this.page:number = 1;
    this.pageurl:SafeResourceUrl;
  }

  ngOnInit() {
  }

  onUpload(event) {
    this.service.fileUpload(event.target);
  }
}