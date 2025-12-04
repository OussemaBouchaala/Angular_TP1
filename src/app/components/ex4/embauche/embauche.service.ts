import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EmbaucheService {
  // signal holding hired CVs
  private hired = signal<any[]>([]);

  getAll() {
    return this.hired;
  }

  hire(cv: any): boolean {
    const list = this.hired();
    if (list.includes(cv)) {
      return false;
    }
    this.hired.update((l) => [...l, cv]);
    return true;
  }

  unhire(cv: any) {
    this.hired.update((list) => list.filter((c) => c !== cv));
  }

  clear() {
    this.hired.set([]);
  }
}
