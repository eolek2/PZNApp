import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPreferrencesComponent } from './user-preferrences.component';

describe('UserPreferrencesComponent', () => {
  let component: UserPreferrencesComponent;
  let fixture: ComponentFixture<UserPreferrencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPreferrencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPreferrencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
