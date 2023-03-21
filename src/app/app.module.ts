import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import {ReactiveFormsModule} from "@angular/forms";

import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MatSliderModule,
        BrowserAnimationsModule
    ],
  providers: [ {
      provide: LOCALE_ID,
      useValue: 'fr-FR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
