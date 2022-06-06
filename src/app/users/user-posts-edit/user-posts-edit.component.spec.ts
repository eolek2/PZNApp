import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostsEditComponent } from './user-posts-edit.component';

describe('UserPostsEditComponent', () => {
  let component: UserPostsEditComponent;
  let fixture: ComponentFixture<UserPostsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPostsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPostsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
