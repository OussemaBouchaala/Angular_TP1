import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Cv {
  cvImage: string;
  cvCover?: string;
  firstName: string;
  lastName: string;
  profession?: string;
  quote?: string;
  motto?: string;
  description?: string;
}

@Component({
  selector: 'app-cv',
  imports: [CommonModule],
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  standalone: true,
})
export class CvComponent {
  @Input() cv: Cv = { cvImage: "", firstName: "", lastName: "" };
  imageError = false;

  get initials(): string {
    const f = this.cv.firstName || '';
    const l = this.cv.lastName || '';
    return (f.charAt(0) + (l.charAt(0) || '')).toUpperCase();
  }
}
