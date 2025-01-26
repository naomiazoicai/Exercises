import { Component } from '@angular/core';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {ExpenseItemComponent} from '../expense-item/expense-item.component';
import {ExpenseListComponent} from '../expense-list/expense-list.component';
import {SummaryComponent} from '../summary/summary.component';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {CurrencyPipe, NgForOf} from '@angular/common';
import {MatCard} from '@angular/material/card';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss'],
  imports: [
    MatTabGroup,
    ExpenseItemComponent,
    MatTab,
    ExpenseListComponent,
    SummaryComponent,
    MatFormField,
    FormsModule,
    MatInput,
    MatButton,
    CurrencyPipe,
    NgForOf,
    MatLabel,
    MatCard
  ]
})
export class DayViewComponent {
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  currentDayIndex = 0;
  dailyExpenses: any[][] = Array(7).fill([]);
  weeklyBudget = 0;

  addExpense(dayIndex: number, expense: any) {
    this.dailyExpenses[dayIndex] = [...this.dailyExpenses[dayIndex], expense];
  }

  deleteExpense(dayIndex: number, expense: any) {
    this.dailyExpenses[dayIndex] = this.dailyExpenses[dayIndex].filter((e) => e !== expense);
  }

  editExpense(dayIndex: number, updatedExpense: any) {
    const index = this.dailyExpenses[dayIndex].findIndex((e) => e.id === updatedExpense.id);
    if (index > -1) {
      this.dailyExpenses[dayIndex][index] = updatedExpense;
    }
  }

  getDailyTotal(dayIndex: number): number {
    return this.dailyExpenses[dayIndex].reduce((total, expense) => total + expense.amount, 0);
  }

  getWeeklyExpenses(): any[] {
    return this.dailyExpenses.flat();
  }

  getWeeklySavings(): number {
    const totalSpent = this.getWeeklyExpenses().reduce((total, expense) => total + expense.amount, 0);
    return this.weeklyBudget - totalSpent;
  }

  setWeeklyBudget() {
    alert(`Weekly budget set to ${this.weeklyBudget}`);
  }
}
