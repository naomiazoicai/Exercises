import { Component, Input, EventEmitter, Output } from '@angular/core';
import {MatButton} from '@angular/material/button';
import {CurrencyPipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss'],
  standalone: true,
  imports: [
    CurrencyPipe,
    MatButton,
    NgForOf
  ]
})
export class ExpenseListComponent {
  @Input() expenses: any[] = [];
  @Output() deleteExpense = new EventEmitter<number>();
  @Output() editExpense = new EventEmitter<number>();

  onDelete(index: number) {
    this.deleteExpense.emit(index);
  }

  onEdit(index: number) {
    this.editExpense.emit(index);
  }
}
