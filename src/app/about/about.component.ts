import { NgFor, CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [NgFor,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  standalone: true
})
export class AboutComponent { 
  tabIndex = 0;
list = [
  {name: 'Summary', no:0},
  {name: 'Experiance', no: 1},
  {name: 'Education', no: 2},
  {name: 'Acheivements', no: 3},
  {name: 'Additonal Details', no: 4},
];
changeTab(index: number) {
  this.tabIndex = index
}
}
