import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { WesterosInfoService } from '../../services/westeros-info.service';
import { Book } from '../../models/book';

@Component({
  standalone: true,
  selector: 'app-libros',
  imports: [],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent implements OnInit {

  libros: Book[] = [];
  
  constructor(
    private apiService: WesterosInfoService,
    private cdr : ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    console.log('Componente libro inicializado');

    this.apiService.getBooks().subscribe(data => 
      {
      this.libros = data;
      this.cdr.markForCheck();
    });
  }

}
