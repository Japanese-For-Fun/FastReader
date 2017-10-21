import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainModule } from './components/main/main.module';
import { MainComponent } from './components/main/main.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    MainModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
