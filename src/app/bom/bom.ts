import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
interface BomRow {
  mainPart: any;
  subPart: any;
  qty: any;
  rate: any;
  cost: any;
  salePrice: any;
  total?: boolean
}
@Component({
  selector: 'app-bom',
  imports: [MatTableModule],
  templateUrl: './bom.html',
  styleUrl: './bom.less',
})

export class Bom {
  displayedColumns: string[] = [
    'mainPart',
    'subPart',
    'qty',
    'rate',
    'cost',
    'salePrice'
  ];

  freezeData: BomRow[] = [
    { mainPart: 1, subPart: 1, qty: 10, rate: 50, cost: 500, salePrice: 650 },
    { mainPart: '', subPart: 2, qty: 5, rate: 80, cost: 400, salePrice: 520 },
    { mainPart: '', subPart: 3, qty: 8, rate: 40, cost: 320, salePrice: 420 },
    { mainPart: 'TOTAL', subPart: '', qty: 23, rate: 170, cost: 1220, salePrice: 1590, total: true },
  ];

  dynamicData: BomRow[] = [
    { mainPart: 1, subPart: 1, qty: 12, rate: 55, cost: 660, salePrice: 780 },
    { mainPart: '', subPart: 2, qty: 6, rate: 75, cost: 450, salePrice: 560 },
    { mainPart: '', subPart: 3, qty: 4, rate: 90, cost: 360, salePrice: 480 },
    { mainPart: 'TOTAL', subPart: '', qty: 22, rate: 220, cost: 1470, salePrice: 1620, total: true },
  ];

}
