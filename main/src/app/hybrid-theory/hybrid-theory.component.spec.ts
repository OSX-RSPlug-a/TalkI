import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridTheoryComponent } from './hybrid-theory.component';

describe('HybridTheoryComponent', () => {
  let component: HybridTheoryComponent;
  let fixture: ComponentFixture<HybridTheoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HybridTheoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HybridTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
