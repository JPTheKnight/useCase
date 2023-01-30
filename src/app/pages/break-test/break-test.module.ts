import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreakTestRoutingModule } from './break-test-routing.module';
import { BreakTestComponent } from './break-test.component';
import { TableModule } from 'src/app/shared/reusable-table/table.module';
import { ReusableLinkButtonModule } from 'src/app/shared/reusable-link-button/reusable-link-button.module';

import { StoreModule } from '@ngrx/store';
import { breakTestReducer } from 'src/app/entities/break-test-entity/break-test.reducer';

@NgModule({
  declarations: [BreakTestComponent],
  imports: [
    CommonModule,
    BreakTestRoutingModule,
    TableModule,
    ReusableLinkButtonModule,
    StoreModule.forFeature('breaktest', breakTestReducer),
  ],
})
export class BreakTestModule {}
