import { Component, OnInit, Input } from '@angular/core';
import { GitUsersService } from '../../git-users.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  btnText: string;
  userRepoData: Array<any>;
  isExpanded = false;

  @Input() userData: any;

  constructor(private _gitService: GitUsersService) { }

  ngOnInit() {
  }

  onBtnClick(): void {
    this.isExpanded = !this.isExpanded;
    if (this.isExpanded) {
      if (this.userData) {
        this._gitService.getUserRepos(this.userData.login).subscribe(response => {
          this.userRepoData = response;
        });
      }
    }
  }

}
