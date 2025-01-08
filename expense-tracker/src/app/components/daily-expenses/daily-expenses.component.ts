import { Component, Input } from '@angular/core';
import { ExpenseService, Expense } from '../../services/expense.service';
import {CurrencyPipe, NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatDivider} from '@angular/material/divider';
import {MatButton} from '@angular/material/button';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {MatCard} from '@angular/material/card';
import {MatInput} from '@angular/material/input';

@Component({
  selector: 'app-daily-expenses',
  standalone: true,
  templateUrl: './daily-expenses.component.html',
  styleUrls: ['./daily-expenses.component.scss'],
  imports: [CurrencyPipe, NgForOf, NgIf, FormsModule, MatDivider, MatButton, MatLabel, MatFormField, MatOption, MatSelect, MatCard, MatInput],
})
export class DailyExpensesComponent {
  @Input() day!: string;

  category = '';
  amount = 0;
  isAddingExpense = false;
  editingIndex: number | null = null;
  categories: string[] = ['Food', 'Transport', 'Entertainment', 'Bills', 'Other'];

  constructor(private expenseService: ExpenseService) {
    console.log('Categories:', this.categories);

  }


  get expenses() {
    return this.expenseService.getExpensesByDay(this.day);
  }

  addExpense() {
    if (this.category && this.amount > 0) {
      this.expenseService.addExpense(this.day, { category: this.category, amount: this.amount });
      this.clearForm();
      this.isAddingExpense = false;
    }
  }

  editExpense(index: number) {
    const expense = this.expenses[index];
    this.category = expense.category;
    this.amount = expense.amount;
    this.editingIndex = index;
  }

  saveEdit() {
    if (this.editingIndex !== null) {
      this.expenseService.editExpense(this.day, this.editingIndex, { category: this.category, amount: this.amount });
      this.clearForm();
      this.editingIndex = null;
    }
  }

  deleteExpense(index: number) {
    this.expenseService.deleteExpense(this.day, index);
  }

  getWeeklyTotal(): number {
    return this.expenseService.getWeeklyTotal();
  }


  clearForm() {
    this.category = '';
    this.amount = 0;
  }
}
