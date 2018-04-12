import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ConsumerComponent } from './consumer/consumer.component';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    ConsumerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
