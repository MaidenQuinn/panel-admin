import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTagComponent } from './modifier-tag.component';

describe('ModifierTagComponent', () => {
  let component: ModifierTagComponent;
  let fixture: ComponentFixture<ModifierTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
