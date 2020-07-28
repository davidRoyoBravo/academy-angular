import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { CardComponent } from '../shared/components/card/card.component';


@NgModule({
  declarations: [BookListComponent, BookCreateComponent, CardComponent],
  imports: [
    CommonModule
  ],
  exports: [ BookListComponent ]
})
export class BooksModule { }
