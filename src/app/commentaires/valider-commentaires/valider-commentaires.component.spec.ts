import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiderCommentairesComponent } from './valider-commentaires.component';

describe('ValiderCommentairesComponent', () => {
  let component: ValiderCommentairesComponent;
  let fixture: ComponentFixture<ValiderCommentairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValiderCommentairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValiderCommentairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
