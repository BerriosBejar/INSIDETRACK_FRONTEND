import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ProductServicesService } from './services/product-services/product-services';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductServicesService } from './services/product-services.service';

@NgModule({
  declarations: [
    AppComponent,
    //ProductServicesComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
