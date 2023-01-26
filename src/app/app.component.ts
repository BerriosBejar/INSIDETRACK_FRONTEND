import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductServicesService } from './services/product-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: any[]=[];

  constructor(
     private productosService : ProductServicesService
    ) { 
    
  }
  
  ngOnInit(): void{
    this.productosService.getProducts().subscribe((dato:any)=>this.products=dato);
  }
}
