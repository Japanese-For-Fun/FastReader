import { Component, OnInit } from '@angular/core';
import { UploaderService } from './uploader.service';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'fr-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {
  src: string = 'https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf';
  constructor(private service: UploaderService) {
  }

  ngOnInit() {
  }

  onUpload(event) {
    this.service.fileUpload(event.target);
  }
}