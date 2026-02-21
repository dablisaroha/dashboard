import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-stock',
  imports: [MatTableModule],
  templateUrl: './stock.html',
  styleUrl: './stock.less',
})
export class Stock {
  displayedStockColumns = ['particulars', 'dec25'];;

  stockData = [
    { particulars: 'Raw Material', dec25: 9.10 },
    { particulars: 'Finish Goods', dec25: 5.50 },
    { particulars: 'WIP', dec25: 3.22 },
    { particulars: 'Job Work', dec25: 0.48 },
    { particulars: 'Rejection', dec25: 0.00 },
    { particulars: 'TOTAL', dec25: 18.30, total: true }
  ];

  AgingData = [
    { particulars: '0-30 days', dec25: 4.74 },
    { particulars: '31-90 days', dec25: 3.18 },
    { particulars: '91-180 days', dec25: 1.83 },
    { particulars: '181 days or more', dec25: 0.13 },
    { particulars: 'TOTAL', dec25: 10.22, total: true }
  ];
}
