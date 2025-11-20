import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex2',
  imports: [FormsModule,CommonModule],
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css'],
  standalone: true,

})
export class Ex2Component {
  @Input() coverImg="assets/images/rotating_card_thumb.png"
  @Input() profileImg="assets/images/rotating_card_profile.png"
  @Input() firstName="Oussema"
  @Input() lastName="Bouchaala"
  @Input() profession="Web Developer"
  @Input() quote="Just develop it is gonna be more interesting"
  @Input() motto="To be or not to be …"
  @Input() description="HTML, CSS, JavaScript, Angular, React, Vuejs, Nodejs, Express, MongoDB, MySQL, Python, Django, Flask"
  stats=[
    { label: 'Followers', value: 235 },
    { label: 'Following', value: 114 },
    { label: 'Projects', value: 35 }
  ]
  socialLinks=[
    { url: 'facebook.com', class: 'facebook', icon: 'fa fa-facebook fa-fw' },
    { url: 'google.com', class: 'google', icon: 'fa fa-google-plus fa-fw' },
    { url: 'twitter.com', class: 'twitter', icon: 'fa fa-twitter fa-fw' }
  ]
  @Input() inputs_invisible:boolean = false;
}
