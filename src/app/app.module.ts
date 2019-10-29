import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
// import { BuyAUsedCarModule } from './components/buy-a-used-car/buy-a-used-car.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [    
    BrowserModule,
    AppRoutingModule/*,
    BuyAUsedCarModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
