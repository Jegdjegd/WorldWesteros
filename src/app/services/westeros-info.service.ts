import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { House } from '../models/house';
import { Character } from '../models/character';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})



export class WesterosInfoService {
  
  private apiUrl = 'https://www.anapioficeandfire.com/api';

    apiBook = `${this.apiUrl}/books`;
    apiHouse = `${this.apiUrl}/houses`;
    apiCharacter = `${this.apiUrl}/characters`;


    constructor(private http: HttpClient) { }


    getHouses(): Observable<House[]> {
      return this.http.get<House[]>(`${this.apiUrl}/houses`);
    }

    getCharacters(): Observable<Character[]> {
      return this.http.get<Character[]>(`${this.apiUrl}/characters`);
    }
  
    getBooks(): Observable<Book[]> {
      return this.http.get<Book[]>(`${this.apiUrl}/books`);
    }
  }