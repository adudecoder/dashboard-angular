import { Component, OnInit } from '@angular/core';
import { multi } from './data';

@Component({
  selector: 'app-line-graphics',
  templateUrl: './line-graphics.component.html',
  styleUrls: ['./line-graphics.component.scss']
})
export class LineGraphicsComponent implements OnInit {

  multi!: any[];
  view: [number, number] = [300, 327];

  // options
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showLegend = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  timeline: boolean = true;
  legend: boolean = true;
  legendPosition: any = 'below';
  legendTitle: string = 'Website Views Per Hours';

  constructor() {
    Object.assign(this, { multi });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
