import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { BooksModule } from './books/books.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, BooksModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
