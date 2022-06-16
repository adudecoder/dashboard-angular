import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineGraphicsComponent } from './line-graphics.component';

describe('LineGraphicsComponent', () => {
  let component: LineGraphicsComponent;
  let fixture: ComponentFixture<LineGraphicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineGraphicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
