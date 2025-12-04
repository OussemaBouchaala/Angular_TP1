import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

// No interface: use plain object (any) for CV

@Component({
  selector: 'app-cv',
  imports: [CommonModule],
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  standalone: true,
})
export class CvComponent {
  @Input() cv: any = { cvImage: "", firstName: "", lastName: "" };
  imageError = false;

  get initials(): string {
    const f = this.cv.firstName || '';
    const l = this.cv.lastName || '';
    return (f.charAt(0) + (l.charAt(0) || '')).toUpperCase();
  }
}
