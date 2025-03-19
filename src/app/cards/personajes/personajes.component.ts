import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { WesterosInfoService } from '../../services/westeros-info.service';
import { Character } from '../../models/character';

@Component({
  standalone: true,
  selector: 'app-personajes',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './personajes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './personajes.component.css'
})

export class PersonajesComponent   implements OnInit{

personajes: Character[] = [];

constructor(
  private apiService: WesterosInfoService,
  private cdr: ChangeDetectorRef 
) { }

ngOnInit(): void {
   this.apiService.getCharacters().subscribe(data => {
     this.personajes = data;
     this.cdr.markForCheck();
   });  
}};
 