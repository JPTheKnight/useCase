import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableLinkButtonComponent } from './reusable-link-button.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ReusableLinkButtonComponent],
  imports: [CommonModule, RouterModule],
  exports: [ReusableLinkButtonComponent],
})
export class ReusableLinkButtonModule {}
