import { Injectable } from '@angular/core';
@Injectable()
export class UploaderService {

  constructor() { }

  fileUpload(input: any) {
    const files: FileList = input.files;
    if (files.length > 0) {
      const file: File = files[0];
      const size = file.size;
      const chunk = 1024;
      this.chunkRead(chunk, file);
      // reader.onloadend = function (event) {
      //   console.log('result is: ', reader.result[0]);
      // };
    }
  }

  chunkRead(chunk: number, file: File) {
    const blob = file.slice(0, chunk);
    const reader: FileReader = new FileReader();
    reader.readAsText(blob, 'cp1255');
    reader.onloadend = (event) => {
      console.log('result is: ', reader.result);
      // const bytes = new Uint8Array(reader.result);
    };
  }
}
