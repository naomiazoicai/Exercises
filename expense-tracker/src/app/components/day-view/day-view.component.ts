import {Component} from '@angular/core';
import {ExpenseItemComponent} from '../expense-item/expense-item.component';
import {ExpenseListComponent} from '../expense-list/expense-list.component';
import {SummaryComponent} from '../summary/summary.component';
import {MatButton} from '@angular/material/button';
import {CurrencyPipe} from '@angular/common';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInput} from '@angular/material/input';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss'],
  standalone: true,
  imports: [MatLabel, CurrencyPipe, ExpenseItemComponent, ExpenseListComponent, SummaryComponent, MatButton, MatFormField, FormsModule, MatInput],
})
export class DayViewComponent {
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  currentDay = 0;
  expenses: any[] = [];

  addExpense(expense: any) {
    this.expenses.push({ ...expense, day: this.days[this.currentDay] });
  }

  deleteExpense(index: number) {
    this.expenses.splice(index, 1);
  }

  editExpense(index: number) {
    const updatedExpense = prompt('Enter new expense category and amount:', `${this.expenses[index].category},${this.expenses[index].amount}`);
    if (updatedExpense) {
      const [category, amount] = updatedExpense.split(',');
      this.expenses[index] = { category, amount: parseFloat(amount) };
    }
  }

  nextDay() {
    if (this.currentDay < this.days.length - 1) {
      this.currentDay++;
    }
  }

  prevDay() {
    if (this.currentDay > 0) {
      this.currentDay--;
    }
  }

  getDailyTotal() {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  }

  weeklyBudget: number = 0;

  setWeeklyBudget(amount: number) {
    this.weeklyBudget = amount;
  }

  getWeeklySavings() {
    const totalSpent = this.expenses.reduce((total, exp) => total + exp.amount, 0);
    return this.weeklyBudget - totalSpent;
  }

}
