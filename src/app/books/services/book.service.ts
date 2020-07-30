import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBook } from '../models/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]>{
    return this.http.get<IBook[]>(
      'https://5f20847dfba6d400169d4ffb.mockapi.io/api/v1/books'
    );
  }

  getBook(id: number): Observable<IBook> {
    return this.http.get<IBook>(
      'https://5f20847dfba6d400169d4ffb.mockapi.io/api/v1/books/' + id
    );
  }
}
