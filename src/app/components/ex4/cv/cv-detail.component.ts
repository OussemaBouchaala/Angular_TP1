import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { CvService } from './cv.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css'],
})
export class CvDetailComponent {
  cv: any | null = null;
  id: number | null = null;

  constructor(private route: ActivatedRoute, private cvService: CvService, private router: Router, private toastr: ToastrService) {
    const param = this.route.snapshot.paramMap.get('id');
    this.id = param ? Number(param) : null;
    if (this.id !== null) {
      this.cv = this.cvService.getById(this.id) || null;
    }
  }

  delete() {
    if (!this.id) return;
    const removed = this.cvService.delete(this.id);
    if (removed) {
      this.toastr.success('CV supprimé', 'Suppression');
      this.router.navigate(['/cvs']);
    } else {
      this.toastr.error('Impossible de supprimer le CV', 'Erreur');
    }
  }

  back() {
    this.router.navigate(['/cvs']);
  }
}
