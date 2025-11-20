import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex3',
  imports: [FormsModule, CommonModule],
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.css'],
  standalone: true
})
export class Ex3Component {
  prixHT: number = 0;
  quantite: number = 1;
  tva: number = 18;

  get discountRate(): number {
    if (this.quantite > 15) {
      return 30;
    } else if (this.quantite >= 10 && this.quantite <= 15) {
      return 20;
    }
    return 0;
  }

  get prixUnitaireTTC(): number {
    return this.prixHT * (1 + this.tva / 100);
  }

  get prixTotalTTC(): number {
    return this.prixUnitaireTTC * this.quantite;
  }

  get discount(): number {
    return (this.prixTotalTTC * this.discountRate) / 100;
  }
}
