import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperAvailabilityComponent } from './developer-availability.component';

describe('DeveloperAvailabilityComponent', () => {
  let component: DeveloperAvailabilityComponent;
  let fixture: ComponentFixture<DeveloperAvailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperAvailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
