import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { QuillingService } from '../quilling.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  products: Product[] = [];
  searchVal: string = '';
  service: QuillingService;

  constructor(service: QuillingService, private router: Router) {
    this.service = service;
  }

  ngOnInit(): void {
  }

  search = () => { // 
    this.service.filteredProducts = this.service.products.filter((product:Product) => product.name.toLowerCase().includes(this.searchVal.toLowerCase()));
    this.searchVal = '';
    this.router.navigate(['category']);
  }

}
