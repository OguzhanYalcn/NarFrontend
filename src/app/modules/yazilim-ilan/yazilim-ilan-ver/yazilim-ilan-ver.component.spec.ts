import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YazilimIlanVerComponent } from './yazilim-ilan-ver.component';

describe('YazilimIlanVerComponent', () => {
  let component: YazilimIlanVerComponent;
  let fixture: ComponentFixture<YazilimIlanVerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YazilimIlanVerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YazilimIlanVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
