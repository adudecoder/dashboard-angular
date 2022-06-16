import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarGraphicsComponent } from './bar-graphics.component';

describe('BarGraphicsComponent', () => {
  let component: BarGraphicsComponent;
  let fixture: ComponentFixture<BarGraphicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarGraphicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
