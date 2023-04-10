import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {registerLocaleData} from "@angular/common";
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import {ReactiveFormsModule} from "@angular/forms";

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';
import {FormsModule} from '@angular/forms';
import { SearchPipePipe } from './pipes/search-pipe.pipe';
import { ProductsListComponent } from './products-list/products-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    SortByDatePipe,
    SearchPipePipe,
    ProductsListComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailComponent,
    AboutComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        FormsModule,
        MatSliderModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule
    ],
  providers: [ {
      provide: LOCALE_ID,
      useValue: 'fr-FR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
