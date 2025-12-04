import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { catchError, of, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  // holds the list of CVs as a signal
  cvs = signal<any[]>([
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
  ]);

  // API base to try fetching CVs from
  private apiUrl = 'https://apilb.tridevs.net/api/cvs';

  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.loadFromApi();
  }

  getAll() {
    return this.cvs;
  }

  add(cv: any) {
    this.cvs.update((list) => [...list, cv]);
  }

  getById(id: number) {
    return this.cvs().find((c) => c.id === id);
  }

  delete(id: number) {
    const exists = this.cvs().some((c) => c.id === id);
    if (!exists) return false;
    this.cvs.update((list) => list.filter((c) => c.id !== id));
    return true;
  }

  private loadFromApi() {
    this.http
      .get<any[]>(this.apiUrl)
      .pipe(
        timeout(6000),
        catchError((err) => {
          // show toast and keep the fake CVs
          try {
            this.toastr.error('Impossible de récupérer les CVs depuis l\'API. Utilisation des FakeCVs.', 'Erreur');
          } catch {}
          return of(null);
        })
      )
      .subscribe((result) => {
        if (result && Array.isArray(result) && result.length > 0) {
          // map result to ensure an `id` exists for each item
          const mapped = result.map((item, idx) => ({ id: item.id ?? idx + 1, ...item }));
          this.cvs.set(mapped);
        }
      });
  }
}
