import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdirComponent } from './testdir.component';

describe('TestdirComponent', () => {
  let component: TestdirComponent;
  let fixture: ComponentFixture<TestdirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestdirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestdirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
