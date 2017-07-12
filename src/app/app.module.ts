import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { EquipoComponent } from './equipo/equipo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { InformacionComponent } from './informacion/informacion.component';
import { LiveComponent } from './live/live.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { CalendarService } from './calendar.service';
import { FirebaseService } from './firebase.service';
import { HttpModule } from '@angular/http';

import { MdToolbar, MdToolbarRow } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    EquipoComponent,
    ContactoComponent,
    CalendarioComponent,
    InformacionComponent,
    MdToolbar,
    MdToolbarRow,
    LiveComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpModule
  ],
  providers: [
    CalendarService,
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
