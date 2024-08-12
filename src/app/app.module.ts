import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { FooterComponent } from './components/footer/footer.component';
import { TableComponent } from './components/table/table.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryMenuComponent } from './components/category-menu/category-menu.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrandGalleryComponent } from './components/brand-gallery/brand-gallery.component';
import { FeaturedCouponsComponent } from './components/featured-coupons/featured-coupons.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooterComponent,
    TableComponent,
    HeaderComponent,
    CategoryMenuComponent,
    HttpClientModule,
    BrandGalleryComponent,
    FeaturedCouponsComponent,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
