import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {Vibration} from '@ionic-native/vibration/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  //Ajout de Vibration dans les providers
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },Vibration
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
