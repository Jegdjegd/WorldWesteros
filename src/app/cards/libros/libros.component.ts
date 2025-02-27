import { Component, OnInit } from '@angular/core';
import { WesterosInfoService } from '../../services/westeros-info.service';

@Component({
  selector: 'app-libros',
  imports: [],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent implements OnInit {
  libros: any;
  constructor(protected apiService: WesterosInfoService) { }
  ngOnInit(): void {
    this.apiService.getBooks().subscribe((response: any) => {
      this.libros = response;
    });
  }

}
