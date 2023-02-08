import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

const ELEMENT_DATA: Product[] = [
  {
    purchaseDate: 'A',
    invoice: 'A',
    customerRoot: 'A',
    customerLeaf: 'A',
    productDescription: 'A',
    packSize: 'A',
    unitType: 'A',
    category: 'A',
    distributorRoot: 'A',
    distributorLeaf: 'A',
    manafacturer: 'A',
    quantity: 'A',
    price: 'A',
    total: 'A'
  },
  {
    purchaseDate: 'B',
    invoice: 'B',
    customerRoot: 'B',
    customerLeaf: 'B',
    productDescription: 'B',
    packSize: 'B',
    unitType: 'B',
    category: 'B',
    distributorRoot: 'B',
    distributorLeaf: 'B',
    manafacturer: 'B',
    quantity: 'B',
    price: 'B',
    total: 'B'
  }
];

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements AfterViewInit {

  displayedColumns: string[] = [
    'purchaseDate', 
    'invoice', 
    'customerRoot', 
    'customerLeaf',
    'productDescription',
    'packSize',
    'unitType',
    'category',
    'distributorRoot',
    'distributorLeaf',
    'manafacturer',
    'quantity',
    'price',
    'total'
  ];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  dataSource = new MatTableDataSource<Product>();

  @Input() set products(value:Product[]) {
    this.setTableDataSource(value);
  };
  // @Input() products!: Product[];

  setTableDataSource(data: any) {
    this.dataSource = new MatTableDataSource<any>(data);
    this.dataSource.sort = this.sort;
    this.sort.active = 'expectedDate';
    this.sort.direction = 'asc';
    this.dataSource.filterPredicate = (data: Product, filter: string) => {
      return data.quantity == filter;
    };
    this.dataSource.paginator = this.paginator;
  }

  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Product>(this.products);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filteredData)
  }
}
