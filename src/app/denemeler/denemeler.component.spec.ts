import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenemelerComponent } from './denemeler.component';

describe('DenemelerComponent', () => {
  let component: DenemelerComponent;
  let fixture: ComponentFixture<DenemelerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DenemelerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DenemelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
