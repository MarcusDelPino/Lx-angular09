import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }
  /*
  propLegal = "qualquer" // bind <p [id]="propLegal">product-create works!</p> - id vai ter a propriedade "qualquer" 
  */
  constructor(private productService: ProductService, 
    private router: Router) { }

  ngOnInit(): void {
    
  }



  createProduct(): void{
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMassage('Produto criado!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void{
    this.router.navigate(['/products'])
  }
  /*fazerAlgo(): void { //<button (click)="fazerAlgo()">Fazer algo</button>(vai no html) Evento click
    console.log('fazendo algo')
  }*/
}
