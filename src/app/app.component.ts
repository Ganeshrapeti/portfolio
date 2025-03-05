import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MatIconModule, MatTooltipModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  isDarkMode = false;
  title = 'Udemy_Ang';
  toggleTheme() {
    document.body.classList.toggle('dark-mode');
  }
}
