import { Component, Inject } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from "rxjs";
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from '../../models/product';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent {
  public listaProductos: Observable<Product[]>;
  private readonly productService: ProductService;
  modal: any;

  idControl = new FormControl('');
  descripcionControl = new FormControl('');
  precioControl = new FormControl('');
  public descripcion = "";
  public precio = 0;

  public accion: string = ""
  closeResult = ""

  constructor(productService: ProductService, private modalService: NgbModal) {
    this.productService = productService;
    this.GetProducts();
  }
  private GetProducts() {
    this.listaProductos = this.productService.GetProducts();
  }

  addProduct() {
    let product: Product = {
      id: 1,
      descripcion: this.descripcionControl.value,
      precio: Number(this.precioControl.value)
    }
    let success = this.productService.AddProduct(product);
    this.listaProductos = success;
    this.ModalClose();
  }
  updateProduct() {
    let product: Product = {
      id: Number(this.idControl.value),
      descripcion: this.descripcionControl.value,
      precio: Number(this.precioControl.value)
    }
    let products = this.productService.UpdateProduct(product);
    this.listaProductos = products;
    this.ModalClose();
  }

  deleteProduct() {
    let successProducts = this.productService.DeleteProduct(this.idControl.value);
    this.listaProductos = successProducts;
    this.ModalClose();
  }

  open(content, product: Product, opcion: string) {
    if (opcion === 'delete') {
      this.idControl.setValue(Number(product.id));
      this.precio = product.precio;
      this.descripcion = product.descripcion;
      this.modal = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
      this.modal.result.then((result) => {
        this.closeResult = `Closed with: ${result}`;

      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
    else if (opcion === 'update') {
      this.idControl.setValue(product.id);
      this.descripcionControl.setValue(product.descripcion);
      this.precioControl.setValue(product.precio);
      this.modal = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
      this.modal.result.then((result) => {
        this.closeResult = `Closed with: ${result}`;

      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
    else {
      this.modal = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
      this.modal.result.then((result) => {
        this.closeResult = `Closed with: ${result}`;

      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });

    }
  }


  private getDismissReason(reason: any): string {
    this.CleanFormControls();
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  private ModalClose() {
    this.modal.close();
    this.CleanFormControls();
  }

  private CleanFormControls() {
    this.idControl.setValue('');
    this.descripcionControl.setValue('');
    this.precioControl.setValue('');
  }
}
