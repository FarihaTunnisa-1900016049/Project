import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerpusComponent } from './perpus.component';

describe('PerpusComponent', () => {
  let component: PerpusComponent;
  let fixture: ComponentFixture<PerpusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerpusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerpusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
