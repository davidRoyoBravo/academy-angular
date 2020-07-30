import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { IBook } from '../../models/book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail-component',
  templateUrl: './book-detail-component.component.html',
  styleUrls: ['./book-detail-component.component.scss']
})
export class BookDetailComponentComponent implements OnInit {
  book: IBook;
  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getInfo(this.route.snapshot.params.id);
  }

  getInfo(id: string): void{
    // tslint:disable-next-line: radix
    this.bookService.getBook( parseInt(id) ).subscribe(
      (data: IBook) => { this.book = data; }
    );
  }

}
