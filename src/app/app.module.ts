import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GitBaseComponent } from './git-base/git-base.component';
import { UsersListComponent } from './git-base/users-list/users-list.component';
import { UserCardComponent } from './git-base/users-list/user-card/user-card.component';
import { PaginationComponent } from './git-base/pagination/pagination.component';
import { GitUsersService } from './git-base/git-users.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    GitBaseComponent,
    UsersListComponent,
    UserCardComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      // {
      //   path: '',
      //   component: NoResultsComponent
      // },
      {
        path: 'results',
        component: UsersListComponent
      }
      // },
      // {
      //   path: '**',
      //   component: NoResultsComponent
      // }
    ])
  ],
  providers: [GitUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
