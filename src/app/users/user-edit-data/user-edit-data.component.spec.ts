import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditDataComponent } from './user-edit-data.component';

describe('UserEditDataComponent', () => {
  let component: UserEditDataComponent;
  let fixture: ComponentFixture<UserEditDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEditDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
