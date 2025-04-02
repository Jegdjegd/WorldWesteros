import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { WesterosInfoService } from '../../services/westeros-info.service';
import { Character } from '../../models/character';

import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FiltersComponent } from "../../filters/filters.component";

@Component({
  standalone: true,
  selector: 'app-personajes',
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, FiltersComponent],
  templateUrl: './personajes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './personajes.component.css'
})

export class PersonajesComponent   implements OnInit{
  toppings = new FormControl('');

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
 