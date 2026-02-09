import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis',
  imports: [MatTabsModule, MatTableModule],
  templateUrl: './mis.html',
  styleUrl: './mis.less',
})
export class MIS {
  activeIndex = 0;
  constructor(private router: Router) {

  }
groupHeaderColumns = [
  'particular',
  'marGroup',
  'aprGroup',
  'mayGroup'
];

subHeaderColumns = [
  'marAmount', 'marRatio',
  'aprAmount', 'aprRatio',
  'mayAmount', 'mayRatio'
];

displayedColumns = [
  'particular',
  'marAmount', 'marRatio',
  'aprAmount', 'aprRatio',
  'mayAmount', 'mayRatio'
];

dataSource = [
  // ===== PROFIT =====
  {
    particular: 'Net Profit',
    marAmount: '4,24,404', marRatio: '97%',
    aprAmount: '-30,241', aprRatio: '-727%',
    mayAmount: '1,97,361', mayRatio: '4744%',
    total: true
  },
  {
    particular: 'Cash Profit',
    marAmount: '4,24,504', marRatio: '97%',
    aprAmount: '-30,141', aprRatio: '-725%',
    mayAmount: '1,97,461', mayRatio: '4747%'
  },
  {
    particular: 'EBITDA',
    marAmount: '4,24,604', marRatio: '97%',
    aprAmount: '-30,041', aprRatio: '-722%',
    mayAmount: '1,97,561', mayRatio: '4749%'
  },
  {
    particular: 'Gross Profit',
    marAmount: '4,25,504', marRatio: '98%',
    aprAmount: '-29,141', aprRatio: '-701%',
    mayAmount: '1,98,461', mayRatio: '4771%'
  },

  // ===== DIRECT INCOME =====
  { particular: 'Direct Income', section: true },

  {
    particular: 'Ikea',
    marAmount: '1,000', marRatio: '0%',
    aprAmount: '1,000', aprRatio: '24%',
    mayAmount: '1,000', mayRatio: '24%'
  },
  {
    particular: 'Lamplight',
    marAmount: '1,000', marRatio: '0%',
    aprAmount: '1,000', aprRatio: '24%',
    mayAmount: '1,000', mayRatio: '24%'
  },
  {
    particular: 'Maytex',
    marAmount: '-', marRatio: '0%',
    aprAmount: '-', aprRatio: '0%',
    mayAmount: '-', mayRatio: '0%'
  },
  {
    particular: 'Zenith Home Corp.',
    marAmount: '-', marRatio: '0%',
    aprAmount: '1,000', aprRatio: '24%',
    mayAmount: '1,000', mayRatio: '24%'
  },
  {
    particular: 'Sales Domestic Local',
    marAmount: '1,000', marRatio: '0%',
    aprAmount: '100', aprRatio: '2%',
    mayAmount: '1,000', mayRatio: '24%'
  },
  {
    particular: 'Sales Domestic Local – Scrap',
    marAmount: '-', marRatio: '0%',
    aprAmount: '1,000', aprRatio: '24%',
    mayAmount: '1,000', mayRatio: '24%'
  },
  {
    particular: 'Total Direct Income',
    marAmount: '3,000',
    aprAmount: '4,100',
    mayAmount: '5,000',
    total: true
  },

  // ===== INDIRECT INCOME =====
  { particular: 'Indirect Income', section: true },

  {
    particular: 'Duty Drawback',
    marAmount: '4,59,224', marRatio: '105%',
    aprAmount: '45', aprRatio: '1%',
    mayAmount: '45', mayRatio: '1%'
  },
  {
    particular: 'Export Incentive (RODTEP)',
    marAmount: '-26,237', marRatio: '-6%',
    aprAmount: '15', aprRatio: '0%',
    mayAmount: '15', mayRatio: '0%'
  },
  {
    particular: 'Other (Services + Freight)',
    marAmount: '-', marRatio: '',
    aprAmount: '-', aprRatio: '',
    mayAmount: '1,99,701', mayRatio: ''
  },
  {
    particular: 'Total Indirect Income',
    marAmount: '4,32,987',
    aprAmount: '60',
    mayAmount: '1,99,761',
    total: true
  },

  // ===== COST OF GOODS =====
  { particular: 'Cost of Goods', section: true },

  {
    particular: 'Opening Stock',
    marAmount: '32,684', marRatio: '7%',
    aprAmount: '28,501', aprRatio: '685%',
    mayAmount: '500', mayRatio: '1.2%'
  },
  {
    particular: 'Closing Stock',
    marAmount: '-28,501',
    aprAmount: '-500',
    mayAmount: '-500'
  },
  {
    particular: 'Manufacturing Wages',
    marAmount: '1,000',
    aprAmount: '1,000',
    mayAmount: '1,000'
  },
  {
    particular: 'Electricity Expenses',
    marAmount: '1,000',
    aprAmount: '1,000',
    mayAmount: '1,000'
  },
  {
    particular: 'Total Cost of Goods',
    marAmount: '10,483',
    aprAmount: '33,301',
    mayAmount: '6,300',
    total: true
  },

  // ===== INDIRECT EXPENSES =====
  { particular: 'Indirect Expenses', section: true },

  {
    particular: 'Indirect Salaries',
    marAmount: '400',
    aprAmount: '400',
    mayAmount: '400'
  },
  {
    particular: 'Interest on WC Loan',
    marAmount: '400',
    aprAmount: '400',
    mayAmount: '400'
  },
  {
    particular: 'Rent (Warehousing)',
    marAmount: '400',
    aprAmount: '400',
    mayAmount: '400'
  },
  {
    particular: 'Total Indirect Expenses',
    marAmount: '1,200',
    aprAmount: '1,200',
    mayAmount: '1,200',
    total: true
  }
];
  // onTabChange(index: number) {
  //   const routes = [
  //     '/preview',
  //     '/processing',
  //     '/exceptions',
  //     '/review-jvs',
  //     '/reco-report'
  //   ];
  //   this.router.navigate([routes[index]]);
  // }
}
