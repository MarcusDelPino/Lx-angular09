import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  propLegal = "qualquer" // bind <p [id]="propLegal">product-create works!</p> - id vai ter a propriedade "qualquer" 

  constructor() { }

  ngOnInit(): void {
  }

  fazerAlgo(): void { //<button (click)="fazerAlgo()">Fazer algo</button>(vai no html) Evento click
    console.log('fazendo algo')
  }
}
