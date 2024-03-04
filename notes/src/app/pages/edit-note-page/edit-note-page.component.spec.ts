import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNotePageComponent } from './edit-note-page.component';

describe('EditNotePageComponent', () => {
  let component: EditNotePageComponent;
  let fixture: ComponentFixture<EditNotePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditNotePageComponent]
    });
    fixture = TestBed.createComponent(EditNotePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
