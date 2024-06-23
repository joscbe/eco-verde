import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementorComponent } from './elementor.component';

describe('ElementorComponent', () => {
  let component: ElementorComponent;
  let fixture: ComponentFixture<ElementorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElementorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
