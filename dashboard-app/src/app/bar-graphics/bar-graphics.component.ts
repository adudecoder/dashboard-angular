import { Component, OnInit } from '@angular/core';
import { multi } from './data';

@Component({
  selector: 'app-bar-graphics',
  templateUrl: './bar-graphics.component.html',
  styleUrls: ['./bar-graphics.component.scss']
})
export class BarGraphicsComponent {

  multi!: any[];

  view: [number, number] = [300, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Daily Sales Per Day';
  showYAxisLabel = true;

  constructor() {
    Object.assign(this, { multi })
  }

}
