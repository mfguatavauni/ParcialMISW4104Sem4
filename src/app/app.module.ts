import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarModule } from './car/car.module';
import { FooterComponent } from './footer/footer.component';
import { CarbrandComponent } from './carbrand/carbrand.component';


@NgModule({
  declarations: [			
    AppComponent,
      FooterComponent,
      CarbrandComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
