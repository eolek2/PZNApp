import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserPreferrencesComponent } from './users/user-preferrences/user-preferrences.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { AuthGuard } from './_guards/auth.guard';
import { HomeLoggedinComponent } from './home-loggedin/home-loggedin.component';
import { ForumThreadComponent } from './forum/forum-thread/forum-thread.component';
import { ForumListComponent } from './forum/forum-list/forum-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children:
    [
      { path: 'home', component: HomeLoggedinComponent},
      { path: 'post/:id', component: SinglePostComponent},
      { path: 'me', component: UserPreferrencesComponent},
      { path: 'users', component: UserListComponent},
      { path: 'users/:id', component: UserProfileComponent},
      { path: 'forum', component: ForumListComponent},
      { path: 'forum/:id', component: ForumThreadComponent},
    ]
  },
  { path: 'about', component: AboutComponent},
  { path: 'resetpassword', component: ResetPasswordComponent},
  { path: 'contact', component: ContactComponent},
  { path: '**', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
