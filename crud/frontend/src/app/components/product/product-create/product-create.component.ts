import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  /*propLegal = "qualquer" // bind <p [id]="propLegal">product-create works!</p> - id vai ter a propriedade "qualquer" 
*/
  constructor(private ProductService: ProductService, 
    private router: Router) { }

  ngOnInit(): void {
    
  }

  createProduct(): void{
    this.ProductService.showMassage('Operação executa com sucesso')
  }

  cancel(): void{
    this.router.navigate(['/products'])
  }
  /*fazerAlgo(): void { //<button (click)="fazerAlgo()">Fazer algo</button>(vai no html) Evento click
    console.log('fazendo algo')
  }*/
}
