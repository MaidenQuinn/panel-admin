import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerTagComponent } from './creer-tag.component';

describe('CreerTagComponent', () => {
  let component: CreerTagComponent;
  let fixture: ComponentFixture<CreerTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
