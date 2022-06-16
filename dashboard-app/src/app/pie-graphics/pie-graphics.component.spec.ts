import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieGraphicsComponent } from './pie-graphics.component';

describe('PieGraphicsComponent', () => {
  let component: PieGraphicsComponent;
  let fixture: ComponentFixture<PieGraphicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieGraphicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
