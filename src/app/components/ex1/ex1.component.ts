import { Component } from '@angular/core';

@Component({
  selector: 'app-ex1',
  imports: [],
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css'],
  standalone: true
})
export class Ex1Component {
  title = 'ex1 works!';
  defaultColor = 'blue';
  color = this.defaultColor;

  changeColor(newColor: HTMLInputElement) {
    this.color = newColor.value;
    newColor.value = '';
  }

}
