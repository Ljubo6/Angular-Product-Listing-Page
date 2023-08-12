import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InputGroupComponent } from './components/input-group/input-group.component';
import { CartModalComponent } from './components/cart-modal/cart-modal.component';
import { ButtonTopComponent } from './components/button-top/button-top.component';
import { ButtonLoadComponent } from './components/button-load/button-load.component';
import { RatingComponent } from './components/rating/rating.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { JeweleryComponent } from './components/jewelery/jewelery.component';
import { MenClothesComponent } from './components/men-clothes/men-clothes.component';
import { WomenClothesComponent } from './components/women-clothes/women-clothes.component';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    InputGroupComponent,
    CartModalComponent,
    ButtonTopComponent,
    ButtonLoadComponent,
    RatingComponent,
    ElectronicsComponent,
    JeweleryComponent,
    MenClothesComponent,
    WomenClothesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
