import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  firstPaginationNo: number;
  secPaginationNo: number;
  thirdPaginationNo: number;

  @Input() totalPages: number;
  @Output() pageClick = new EventEmitter<number>();
  @Output() clearSortField = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.firstPaginationNo = 1;
    this.secPaginationNo = 2;
    this.thirdPaginationNo = 3;
  }

  onPageClick(pageNum: number): void {
    // do not call api when three dots clicked on pagination
    if (pageNum) {
      this.pageClick.emit(pageNum);
    } else {
      if (this.thirdPaginationNo !== (this.totalPages - 1)) {
        this.firstPaginationNo = this.firstPaginationNo + 3;
        this.secPaginationNo = this.secPaginationNo + 3;
        this.thirdPaginationNo = this.thirdPaginationNo + 3;
      }
    }
  }

}
