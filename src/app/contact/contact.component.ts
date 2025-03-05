import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    NgIf,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

 async onSubmit() {
    if (this.contactForm.valid) {
      const formData = {
        name: this.contactForm.get('name')?.value,
        email: this.contactForm.get('email')?.value,
        message: this.contactForm.get('message')?.value
      };
      console.log('Form Submitted', this.contactForm.value);
    await  emailjs.send('service_y0iitxg', 'template_qhkork5', formData, 'uZZscqpq8zsXAh9Wa')
        .then((response) => {


          console.log('Email sent successfully!', response);
          alert('Message sent successfully!');
          this.contactForm.reset();
        })
        .catch((error) => {


          console.error('Error sending email:', error);
          alert('Failed to send message. Please try again later.');
        });

      this.contactForm.reset();
    }
  }
}
