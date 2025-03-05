import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule ],
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
animations: [
  trigger('fadeInAnimation', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(-20px)' }),
      animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
    ])
  ]),
  trigger('buttonAnimation', [
    transition(':enter', [
      style({ opacity: 0, transform: 'scale(0.8)' }),
      animate('500ms 300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
    ])
  ])
]
})
export class DashboardComponent implements AfterViewInit  {
  texts = ["Angular Developer | Frontend Enthusiast"];
  dynamicText = "";
  index = 0;
  charIndex = 0;
  isDeleting = false;
  displayedText = '';
  @ViewChild('textElement') textElement!: ElementRef;
  constructor() {
    // this.typeEffect();
  }
  ngAfterViewInit() {
    this.revealText();
  }
// text reveal repeated///
  revealText() {
    const currentText = this.texts[this.index];
    let charIndex = 0;
    this.displayedText = "";
    const interval = setInterval(() => {
      this.displayedText += currentText[charIndex];
      charIndex++;
      if (charIndex === currentText.length) {
        clearInterval(interval);
        // add this to repeate //
        // setTimeout(() => {
        //   this.index = (this.index + 1) % this.texts.length;
        //   this.revealText();
        // }, 1500);
      }
    }, 100);
  }
 
  //text type effect //
  typeEffect() {
    const currentText = this.texts[this.index];
    if (this.isDeleting) {
      this.dynamicText = currentText.substring(0, this.charIndex--);
    } else {
      this.dynamicText = currentText.substring(0, this.charIndex++);
    }
    
    if (!this.isDeleting && this.charIndex === currentText.length) {
      this.isDeleting = true;
      setTimeout(() => this.typeEffect(), 1000);
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.index = (this.index + 1) % this.texts.length;
      setTimeout(() => this.typeEffect(), 500);
    } else {
      setTimeout(() => this.typeEffect(), this.isDeleting ? 100 : 200);
    }
  }
}
