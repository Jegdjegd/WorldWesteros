import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { WesterosInfoService } from '../../services/westeros-info.service';

@Component({
  selector: 'app-personajes',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './personajes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent   implements OnInit{

personajes: any;
constructor(protected apiService: WesterosInfoService) { }

ngOnInit(): void {
   this.apiService.getCharacters().subscribe((response: any) => {
     this.personajes = response;
   });  
}};
 