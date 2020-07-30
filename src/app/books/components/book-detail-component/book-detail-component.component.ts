import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { IBook } from '../../models/book';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-detail-component',
  templateUrl: './book-detail-component.component.html',
  styleUrls: ['./book-detail-component.component.scss']
})
export class BookDetailComponentComponent implements OnInit {
  book: IBook;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(): void{
    this.bookService.getBook(1).subscribe(
      (data: IBook) => { this.book = data; }
    );
  }

}
