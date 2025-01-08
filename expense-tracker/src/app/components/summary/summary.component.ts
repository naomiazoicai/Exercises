import { Component, Input } from '@angular/core';
import {CurrencyPipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf
  ]
})
export class SummaryComponent {
  @Input() weeklyExpenses: any[] = [];
}
