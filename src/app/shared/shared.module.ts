import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*Components*/
import { ActionItemComponent } from './components/action-item/action-item.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [ActionItemComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [HeaderComponent]
})
export class SharedModule {}
