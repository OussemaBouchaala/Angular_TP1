import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ex1Component } from './components/ex1/ex1.component';
import { Ex2Component } from './components/ex2/ex2.component';
import { Ex3Component } from './components/ex3/ex3.component';
import { Ex4Component } from './components/ex4/ex4.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, HeaderComponent, Ex1Component, Ex2Component, Ex3Component, Ex4Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
})
export class AppComponent {
  title = 'angular_TP1';
  selected = 'ex1';

  select(ex: string) {
    this.selected = ex;
  }
}
