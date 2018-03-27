import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceTopicsComponent } from './resource-topics.component';

describe('ResourceTopicsComponent', () => {
  let component: ResourceTopicsComponent;
  let fixture: ComponentFixture<ResourceTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
