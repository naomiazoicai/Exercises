import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() pageSize: number = 6;
  @Output() pageChange = new EventEmitter<number>();

  onPageClick(page: number): void {
    this.pageChange.emit(page);
  }
}
