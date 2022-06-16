import { Component, OnInit } from '@angular/core';
import { single } from './data';

@Component({
  selector: 'app-pie-graphics',
  templateUrl: './pie-graphics.component.html',
  styleUrls: ['./pie-graphics.component.scss']
})
export class PieGraphicsComponent {

  single!: any[];
  view: [number, number] = [300, 326];

  // options
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendTitle: string = 'Completed Tasks Per Month';
  legend: boolean = true;
  legendPosition: any = 'below';

  constructor() {
    Object.assign(this, { single });
  }

}
