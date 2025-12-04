import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CvComponent } from '../cv/cv.component';
import { CvService } from '../cv/cv.service';
import { EmbaucheService } from '../embauche/embauche.service';
import { ToastrService } from 'ngx-toastr';

// No interfaces: use plain objects / any for CVs

@Component({
  selector: 'app-list',
  imports: [FormsModule, CommonModule, RouterModule, CvComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone: true,
})
export class ListComponent {
  @Output() cvSelected = new EventEmitter<any>();
  @Input() selected?: any | null = null;

  // use the list from CvService
  cvs: any;

  constructor(private cvService: CvService, private embaucheService: EmbaucheService, private toastr: ToastrService) {
    this.cvs = this.cvService.cvs;
  }

  hire(cv: any): void {
    const added = this.embaucheService.hire(cv);
    if (added) {
      this.toastr.success('CV embauché avec succès', 'Embauche');
    } else {
      this.toastr.info('Ce CV est déjà embauché', 'Information');
    }
  }

  onSelectCv(cv: any): void {
    this.cvSelected.emit(cv);
  }

  // helper to evaluate selection whether `selected` is a signal or a plain value
  isSelected(cv: any): boolean {
    try {
      if (typeof this.selected === 'function') {
        return this.selected() === cv;
      }
      return this.selected === cv;
    } catch {
      return this.selected === cv;
    }
  }
}
