import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Expense {
  category: string;
  amount: number;
}

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private expensesSubject = new BehaviorSubject<{ [day: string]: Expense[] }>(
    {
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
      Sunday: [],
    }
  );

  expenses$ = this.expensesSubject.asObservable();

  getExpensesByDay(day: string) {
    return this.expensesSubject.getValue()[day];
  }

  addExpense(day: string, expense: Expense) {
    const currentExpenses = this.expensesSubject.getValue();
    currentExpenses[day].push(expense);
    this.expensesSubject.next({ ...currentExpenses });
  }

  deleteExpense(day: string, index: number) {
    const currentExpenses = this.expensesSubject.getValue();
    currentExpenses[day].splice(index, 1);
    this.expensesSubject.next({ ...currentExpenses });
  }

  editExpense(day: string, index: number, updatedExpense: Expense) {
    const currentExpenses = this.expensesSubject.getValue();
    currentExpenses[day][index] = updatedExpense;
    this.expensesSubject.next({ ...currentExpenses });
  }

  getWeeklyTotal(): number {
    const expenses = this.expensesSubject.getValue();
    return Object.values(expenses).flat().reduce((total, expense) => total + expense.amount, 0);
  }
}
