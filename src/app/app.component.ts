import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  // template:`<app-header></app-header>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Demo-Application';
}
