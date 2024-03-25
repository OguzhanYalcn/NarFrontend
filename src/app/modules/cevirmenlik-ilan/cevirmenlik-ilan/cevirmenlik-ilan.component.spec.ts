import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CevirmenlikIlanComponent } from './cevirmenlik-ilan.component';

describe('CevirmenlikIlanComponent', () => {
  let component: CevirmenlikIlanComponent;
  let fixture: ComponentFixture<CevirmenlikIlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CevirmenlikIlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CevirmenlikIlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
