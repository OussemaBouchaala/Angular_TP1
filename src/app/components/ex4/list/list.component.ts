import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CvComponent } from '../cv/cv.component';

export interface Cv {
  cvImage: string;
  cvCover: string;
  firstName: string;
  lastName: string;
  profession: string;
  quote: string;
  motto: string;
  description: string;
}

@Component({
  selector: 'app-list',
  imports: [FormsModule, CommonModule, CvComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone: true,
})
export class ListComponent {
  @Output() cvSelected = new EventEmitter<Cv>();
  @Input() selected?: Cv | null = null;

  cvs = [
    {
      cvImage: 'assets/images/rotating_card_profile.png',
      cvCover: 'assets/images/rotating_card_thumb.jpg',
      firstName: 'Oussema',
      lastName: 'Bouchaala',
      profession: 'Web Developer',
      quote: 'Just develop it is gonna be more interesting',
      motto: 'To be or not to be …',
      description:
        'HTML, CSS, JavaScript, Angular, React, Vuejs, Nodejs, Express, MongoDB, MySQL, Python, Django, Flask',

    },
    {
      cvImage: 'assets/images/rotating_card_profile1.png',
      cvCover: 'assets/images/rotating_card_thumb2.png',
      firstName: 'Mouine',
      lastName: 'Eddabbabi',
      profession: 'software Engineer',
      quote: 'Code is like humor. When you have to explain it, it\'s bad.',
      motto: 'Simplicity is the soul of efficiency.',
      description:
        'Java, C++, Python, Machine Learning, Data Structures, Algorithms, System Design',
    },
    {
      cvImage: 'assets/images/rotating_card_profile2.png',
      cvCover: 'assets/images/rotating_card_thumb3.png',
      firstName: 'Mohamed Helmi',
      lastName: 'Lakhdhar',
      profession: 'programmer',
      quote: 'Talk is cheap. Show me the code.',
      motto: 'First, solve the problem. Then, write the code.',
      description:
        'C, C#, Ruby, PHP, Web Development, Mobile Development, Game Development',
    },
    {
      cvImage: 'assets/images/rotating_card_profile3.png',
      cvCover: 'assets/images/rotating_card_thumb.png',
      firstName: 'Ahmed Mohamed Amin',
      lastName: 'Saddoud',
      profession: 'Full Stack Developer',
      quote: 'Programs must be written for people to read, and only incidentally for machines to execute.',
      motto: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      description:
        'HTML, CSS, JavaScript, Angular, React, Nodejs, Express, MongoDB, MySQL, Python, Django',
    }
  ];

  onSelectCv(cv: Cv): void {
    this.cvSelected.emit(cv);
  }
}
