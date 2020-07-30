import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { CardComponent } from '../shared/components/card/card.component';
import { BookDetailComponentComponent } from './components/book-detail-component/book-detail-component.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [BookListComponent, BookCreateComponent, CardComponent, BookDetailComponentComponent],
  imports: [
    CommonModule, AppRoutingModule
  ],
  exports: [ BookListComponent ]
})
export class BooksModule { }
