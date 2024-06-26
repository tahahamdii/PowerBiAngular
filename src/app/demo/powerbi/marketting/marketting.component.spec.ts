import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkettingComponent } from './marketting.component';

describe('MarkettingComponent', () => {
  let component: MarkettingComponent;
  let fixture: ComponentFixture<MarkettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkettingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarkettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
