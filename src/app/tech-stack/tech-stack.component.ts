import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  imports: [NgFor,CommonModule],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss',
  standalone: true,

  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class TechStackComponent {
  skills = [
    { title: 'Core Angular Concepts', description: 'Proficient in components, modules, directives, and services.',
      img:'/assets/tech/ang-icon.png'
     },
    { title: 'TypeScript & JavaScript', description: 'Strong knowledge of TypeScript, JavaScript, HTML, and CSS.',
      img:'assets/tech/js-ts.png'
     },
    { title: 'Forms in Angular', description: 'Expertise in reactive and template-driven forms.',
      img:'assets/tech/Forms-ang.png'
     },
     { title: 'HTML & CSS', description: 'Strong knowledge on HTML, and CSS.',
      img:'assets/tech/html.png'
     },
    { title: 'API Integration', description: 'Hands-on experience with RESTful API using Angular HTTP Client.', 
      img:'assets/tech/api.jpg'
     },
    { title: 'RxJS & State Management', description: 'Good knowledge in handling asynchronous data and state management.',
      img:'assets/tech/rxjsa.png'
     },
    { title: 'UI/UX Development', description: 'Experience with Angular Material and Bootstrap for responsive design.',
      img:'assets/tech/boot-ang.jpg'
     },
    { title: 'Performance Optimization', description: 'Lazy loading, AOT compilation, and OnPush change detection.',
      img:'assets/tech/performance.webp'
     },
    { title: 'Version Control', description: 'Familiarity with Git for version control.',
      img:'assets/tech/git.jfif'
     },
    { title: 'Cloud & Deployment', description: 'Good knowledge of Docker and Azure-based cloud deployments.',
      img:'assets/tech/cloud-docker.png'
     },
    { title: 'Angular CLI Deployment', description: 'Experience deploying Angular applications on-premises.',
      img:'assets/tech/onpremise.png'
     }
  ];
}
