import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ex2Component } from '../ex2/ex2.component';
import { ListComponent } from './list/list.component';
import { EmbaucheListComponent } from './embauche/embauche-list.component';

@Component({
  selector: 'app-ex4',
  imports: [FormsModule, CommonModule, Ex2Component, ListComponent, EmbaucheListComponent],
  templateUrl: './ex4.component.html',
  styleUrls: ['./ex4.component.css'],
  standalone: true,
})
export class Ex4Component {
  selectedCv = signal<any | null>(null);

  onCvSelected(cv: any): void {
    this.selectedCv.set(cv);
  }
}
