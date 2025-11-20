import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ex2Component } from '../ex2/ex2.component';
import { ListComponent, Cv } from './list/list.component';

@Component({
  selector: 'app-ex4',
  imports: [FormsModule, CommonModule, Ex2Component, ListComponent],
  templateUrl: './ex4.component.html',
  styleUrls: ['./ex4.component.css'],
  standalone: true,
})
export class Ex4Component {
  selectedCv: Cv | null = null;

  onCvSelected(cv: Cv): void {
    this.selectedCv = cv;
  }
}
