import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { WesterosInfoService } from '../../services/westeros-info.service';
@Component({
  selector: 'app-card-houses',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card-houses.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './card-houses.component.css'
})
export class CardHousesComponent implements OnInit {
  house: any;

  constructor(protected apiService: WesterosInfoService) { }

  ngOnInit(): void {
    this.apiService.getHouses().subscribe((response: any) => {
      this.house = response;
    });
  } 


} //Final de la clase CardHousesComponent
