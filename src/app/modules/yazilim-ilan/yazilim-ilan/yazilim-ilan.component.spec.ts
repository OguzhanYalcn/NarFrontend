import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YazilimIlanComponent } from './yazilim-ilan.component';

describe('YazilimIlanComponent', () => {
  let component: YazilimIlanComponent;
  let fixture: ComponentFixture<YazilimIlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YazilimIlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YazilimIlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
