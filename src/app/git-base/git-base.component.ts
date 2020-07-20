import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { GitUsersService } from './git-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-git-base',
  templateUrl: './git-base.component.html',
  styleUrls: ['./git-base.component.scss']
})
export class GitBaseComponent implements OnInit {

  @ViewChild('sortUsersInput') sortUsersInput: ElementRef;

  constructor(private _gitService: GitUsersService, private _router: Router, private _elRef: ElementRef) { }

  userResults: Array<any>;
  ngOnInit() {
  }

  onUserInputChanged(newVal: string): void {
    if (newVal) {
      this._gitService.setSearchInputValue(newVal);
      this._gitService.getAllUsers(1).subscribe(response => {
        this._gitService.setUsers(response.items);
        this._gitService.setTotalUsersCount(response.total_count);
        this._router.navigate(['/results']);
      });
    }

    // To clear sort input field
    if (this.sortUsersInput) {
      this.sortUsersInput.nativeElement.value = '';
    }
  }

  onSortClicked(event: any): void {
    if (event && event.target) {
      const sortValue = event.target.value;
      const usersArray = this._gitService.getUsers();

      if (sortValue === 'Name (Z - A)') {
        // sorting in descending order -
        const usersArrayDesc = this._gitService.sortDescending(usersArray);
        this._gitService.setUsers(usersArrayDesc);
      } else if (sortValue === 'Name (A - Z)') {
        // sorting in ascending order -
        const usersArrayAsc = this._gitService.sortAscending(usersArray);
        this._gitService.setUsers(usersArrayAsc);
      }
    }
  }

}
