import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OzelDersIlanComponent } from './ozel-ders-ilan.component';

describe('OzelDersIlanComponent', () => {
  let component: OzelDersIlanComponent;
  let fixture: ComponentFixture<OzelDersIlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OzelDersIlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OzelDersIlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
