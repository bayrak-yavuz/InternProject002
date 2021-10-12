import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navi2Component } from './navi2.component';

describe('Navi2Component', () => {
  let component: Navi2Component;
  let fixture: ComponentFixture<Navi2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Navi2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Navi2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
