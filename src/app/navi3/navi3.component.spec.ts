import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navi3Component } from './navi3.component';

describe('Navi3Component', () => {
  let component: Navi3Component;
  let fixture: ComponentFixture<Navi3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Navi3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Navi3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
