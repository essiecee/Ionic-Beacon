import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { DatePicker } from '@ionic-native/date-picker/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { DynamichistoryComponent } from '../app/dynamichistory/dynamichistory.component';


@NgModule({
  declarations: [AppComponent, DynamichistoryComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
  ],
  providers: [
    StatusBar,
    DatePicker,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    EmailComposer,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
