import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostsManagementComponent } from './user-posts-management.component';

describe('UserPostsManagementComponent', () => {
  let component: UserPostsManagementComponent;
  let fixture: ComponentFixture<UserPostsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPostsManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPostsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
