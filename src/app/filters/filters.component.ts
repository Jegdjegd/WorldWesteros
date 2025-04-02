import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Book } from '../models/book';
import { SelectorsService } from '../services/selectors.service';

@Component({
  selector: 'app-filters',
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent implements OnInit {
  bookControl = new FormControl(''); // Control para el select
  books: Book[] = []; // Array para almacenar los libros

  constructor(private selectorsService: SelectorsService) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.selectorsService.getBooks().subscribe({
      next: (books) => {
        this.books = books; // Asigna los libros obtenidos
      },
      error: (error) => {
        console.error('Error al cargar los libros:', error);
      }
    });
  }
}