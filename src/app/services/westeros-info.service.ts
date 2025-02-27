import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class WesterosInfoService {
  
  protected apiUrl = 'https://www.anapioficeandfire.com/api';

    apiBook = `${this.apiUrl}/books`;
    apiHouse = `${this.apiUrl}/houses`;
    apiCharacter = `${this.apiUrl}/characters`;


    constructor(protected http: HttpClient) { }


    getHouses(): Observable<any> {
    return this.http.get<any>(this.apiHouse);
  }

  getCharacters(): Observable<any> {
    return this.http.get<any>(this.apiCharacter);
  }

  getBooks(): Observable<any> {
    return this.http.get<any>(this.apiBook);
  }



}
