import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VersioningRoutingModule } from './versioning-routing.module';
import { VersioningComponent } from './versioning.component';
import { TableModule } from 'src/app/shared/reusable-table/table.module';
import { ReusableLinkButtonModule } from 'src/app/shared/reusable-link-button/reusable-link-button.module';
import { versioningReducer } from 'src/app/entities/versioning-entity/versioning.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [VersioningComponent],
  imports: [
    CommonModule,
    VersioningRoutingModule,
    TableModule,
    ReusableLinkButtonModule,
    StoreModule.forFeature('versioning', versioningReducer),
  ],
})
export class VersioningModule {}
