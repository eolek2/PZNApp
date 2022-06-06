import { SharedModule } from './_modules/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { ForumListComponent } from './forum/forum-list/forum-list.component';
import { ForumThreadComponent } from './forum/forum-thread/forum-thread.component';
import { HomeLoggedinComponent } from './home-loggedin/home-loggedin.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { UserPreferrencesComponent } from './users/user-preferrences/user-preferrences.component';
import { UserEditDataComponent } from './users/user-edit-data/user-edit-data.component';
import { UserPostsManagementComponent } from './users/user-posts-management/user-posts-management.component';
import { UserPostsAddComponent } from './users/user-posts-add/user-posts-add.component';
import { UserPostsListComponent } from './users/user-posts-list/user-posts-list.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { Youtube } from './_pipes/youtube.pipe';
import { UserPostsEditComponent } from './users/user-posts-edit/user-posts-edit.component';
import { UserChangePaswordComponent } from './users/user-change-pasword/user-change-pasword.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    UserListComponent,
    ForumListComponent,
    ForumThreadComponent,
    HomeLoggedinComponent,
    SinglePostComponent,
    UserPreferrencesComponent,
    UserEditDataComponent,
    UserPostsManagementComponent,
    UserPostsAddComponent,
    UserPostsListComponent,
    Youtube,
    UserPostsEditComponent,
    UserChangePaswordComponent,
    ResetPasswordComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    CKEditorModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
