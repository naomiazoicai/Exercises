import { Component, EventEmitter, Output, Input } from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrls: ['./expense-item.component.scss'],
  standalone: true,
  imports: [
    MatFormField,
    FormsModule,
    MatInput,
    MatButton,
    MatLabel,
    MatOption,
    MatSelect,
    NgForOf
  ]
})
export class ExpenseItemComponent {
  @Output() save = new EventEmitter<any>();
  newExpense = { category: '', amount: 0 };
  categories: string[] = ['Food', 'Transport', 'Entertainment', 'Bills', 'Other'];

  saveExpense() {
    this.save.emit({ ...this.newExpense });
    this.newExpense = { category: '', amount: 0 };
  }
}
