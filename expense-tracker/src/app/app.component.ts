import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DailyExpensesComponent} from './components/daily-expenses/daily-expenses.component';
import {NgForOf, NgIf} from '@angular/common';
import {SummaryComponent} from './components/summary/summary.component';
import {DayViewComponent} from './components/day-view/day-view.component';

@Component({
  selector: 'app-root',
  imports: [ DayViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'expense-tracker';
}
