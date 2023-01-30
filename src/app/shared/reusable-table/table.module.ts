import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableTableComponent } from './reusable-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [ReusableTableComponent],
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  exports: [ReusableTableComponent],
})
export class TableModule {}
