import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "../../models/product"
import { Observable } from 'rxjs';

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization':'my-auth-token'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly baseUrl: string = "https://localhost:44347/api/productos";
  private readonly http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }
  public GetProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}`);
  }
  public UpdateProduct(product:Product): Observable<Product[]> {
    return this.http.put<Product[]>(`${this.baseUrl}`,product,httpOptions);
  }

  public DeleteProduct(id:number): Observable<Product[]> {
    return this.http.delete<Product[]>(`${this.baseUrl}/${id}`,httpOptions);
  }
  public AddProduct(product: Product): Observable<Product[]> {
    return this.http.post<Product[]>(`${this.baseUrl}`,product,httpOptions);
  }

}
