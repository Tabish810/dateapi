import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiService } from './api.service';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { AppDisplayComponent } from './app-display/app-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    AppDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
