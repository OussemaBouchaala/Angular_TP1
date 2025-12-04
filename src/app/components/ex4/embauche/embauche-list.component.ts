import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmbaucheService } from './embauche.service';
import { CvComponent } from '../cv/cv.component';

@Component({
  selector: 'app-embauche-list',
  standalone: true,
  imports: [CommonModule, CvComponent],
  templateUrl: './embauche-list.component.html',
  styleUrls: ['./embauche-list.component.css'],
})
export class EmbaucheListComponent {
  hires: any;

  constructor(private embaucheService: EmbaucheService) {
    this.hires = this.embaucheService.getAll();
  }

  onUnhire(cv: any) {
    this.embaucheService.unhire(cv);
  }

  onClear() {
    this.embaucheService.clear();
  }
}
