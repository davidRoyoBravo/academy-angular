import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { BookCreateComponent } from './books/components/book-create/book-create.component';
import { BookListComponent } from './books/components/book-list/book-list.component';
import { BookDetailComponentComponent } from './books/components/book-detail-component/book-detail-component.component';
// Components


const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'create', component: BookCreateComponent },
  { path: 'detail/:id', component: BookDetailComponentComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
