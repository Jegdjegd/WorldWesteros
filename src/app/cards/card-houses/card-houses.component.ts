import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { WesterosInfoService } from '../../services/westeros-info.service';
import { House } from '../../models/house';
@Component({
  standalone: true,
  selector: 'app-card-houses',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card-houses.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './card-houses.component.css'
})

export class CardHousesComponent implements OnInit {
  houses: House[] = [];

  constructor(
    private apiService: WesterosInfoService,
    private cdr: ChangeDetectorRef // Inyecta ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.apiService.getHouses().subscribe(data => {
      this.houses = data;
      this.cdr.markForCheck(); // Forzar la detección de cambios
    });
  }
}