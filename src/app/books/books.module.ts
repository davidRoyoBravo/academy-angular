import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookCreateComponent } from './components/book-create/book-create.component';



@NgModule({
  declarations: [BookListComponent, BookCreateComponent],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }
