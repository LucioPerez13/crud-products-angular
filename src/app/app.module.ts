import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ListproductsComponent } from './components/listproducts/listproducts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalproductComponent } from './components/modal/modalproduct/modalproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ListproductsComponent,
    ModalproductComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
