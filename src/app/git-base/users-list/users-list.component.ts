import { Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GitUsersService } from '../git-users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  userData: any;
  mySubscription: any;
  userResults: Array<any>;
  totalUsersCount: number;
  noOfUsersOnAPage: number;
  totalPages: number;

  constructor(private _router: Router, private _gitService: GitUsersService) {
    this._router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.mySubscription = this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this._router.navigated = false;
      }
    });
  }

  ngOnInit() {
    this.noOfUsersOnAPage = this._gitService._noOfUsersOnAPage;
    const users = this._gitService.getUsers();
    if (users) {
      this.userData = users;
    }

    this.totalUsersCount = this._gitService.getTotalUsersCount();
    this.totalPages = this._gitService.getTotalPages();
    this.totalPages = (this.totalPages > 200) ? 200 : this.totalPages;

  }

  onPageClicked(pageNum: number): void {
    pageNum = (pageNum > 200) ? 200 : pageNum;
    this._gitService.getAllUsers(pageNum).subscribe(response => {
      this.userData = response.items;
      this._gitService.setUsers(response.items);
    });
  }

}
