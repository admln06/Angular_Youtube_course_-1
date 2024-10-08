import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModlule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCalculatorModule } from './calculator/my-calculator.module';
import { MyNavigation } from './components/navigation/navigation.component';
import { MyEmptyPage } from './components/empty-route/empty-route.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavigation,
    MyEmptyPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModlule,
    MyCalculatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
