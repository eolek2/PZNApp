import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostsAddComponent } from './user-posts-add.component';

describe('UserPostsAddComponent', () => {
  let component: UserPostsAddComponent;
  let fixture: ComponentFixture<UserPostsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPostsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPostsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
