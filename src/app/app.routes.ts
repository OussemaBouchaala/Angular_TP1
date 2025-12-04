import { Routes } from '@angular/router';
import { Ex1Component } from './components/ex1/ex1.component';
import { Ex2Component } from './components/ex2/ex2.component';
import { Ex3Component } from './components/ex3/ex3.component';
import { Ex4Component } from './components/ex4/ex4.component';
import { CvDetailComponent } from './components/ex4/cv/cv-detail.component';
import { AuthComponent } from './components/auth/auth.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'color', pathMatch: 'full' },
	{ path: 'color', component: Ex1Component },
	{ path: 'cv', component: Ex2Component },
	{ path: 'auth', component: AuthComponent },
	{ path: 'calculator', component: Ex3Component },
	{ path: 'cvs/:id', component: CvDetailComponent },
	{ path: 'cvs', component: Ex4Component },
	{ path: '**', redirectTo: 'cvs' }
];
