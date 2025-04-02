import { Component} from '@angular/core';
import {RouterOutlet } from '@angular/router';
import { NavigatorComponent } from "./cards/navigator/navigator.component";
import { FiltersComponent } from "./filters/filters.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'World Westeros';
}
