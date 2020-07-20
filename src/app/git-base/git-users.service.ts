import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitUsersService {

  constructor(private _http: HttpClient) { }

  private _searchInputValue: string;
  private _users: Array<any>;
  private _totalUsersCount: number;
  _noOfUsersOnAPage = 5;

  getAllUsers(pageNum: number): Observable<any> {
    const inputVal = this.getSearchInputValue();
    return this._http.get('https://api.github.com/search/users?q=' + inputVal + '&page=' + pageNum + '&per_page=' + this._noOfUsersOnAPage);
  }

  getUserRepos(userName: string): Observable<any> {
    // varun1505
    return this._http.get(`https://api.github.com/users/${userName}/repos`);
  }

  setSearchInputValue(newVal: string): void {
    this._searchInputValue = newVal;
  }

  getSearchInputValue(): string {
    return this._searchInputValue;
  }

  setUsers(users: Array<any>): void {
    this._users = users;
  }

  getUsers(): Array<any> {
    return this._users;
  }

  setTotalUsersCount(count: number): void {
    this._totalUsersCount = count;
  }

  getTotalUsersCount(): number {
    return this._totalUsersCount;
  }

  getTotalPages(): number {
    const totalUsers = this.getTotalUsersCount();
    return Math.ceil(totalUsers / this._noOfUsersOnAPage);
  }

  sortDescending(array: Array<any>): Array<any> {
    array = array.sort((a, b) => {
      const nameA = a.login.toLowerCase();
      const nameB = b.login.toLowerCase();
      if (nameB < nameA) {
        return -1;
      }
      if (nameB > nameA) {
        return 1;
      }
      return 0;
    });
    return array;
  }

  sortAscending(array: Array<any>): Array<any> {
    array = array.sort((a, b) => {
      const nameA = a.login.toLowerCase();
      const nameB = b.login.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    return array;
  }
}
