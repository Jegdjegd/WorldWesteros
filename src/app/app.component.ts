import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavthroneComponent } from './components/navthrone/navthrone.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavthroneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Westeros';
}