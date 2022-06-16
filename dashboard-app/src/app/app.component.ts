import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { PeriodicElement } from './PeriodicElement';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  ELEMENT_DATA: PeriodicElement[] = [
    { },
  ];

  displayedColumns: string[] = ['position', 'name'];
  dataSource = this.ELEMENT_DATA;

  panelOpenState = false;

}
