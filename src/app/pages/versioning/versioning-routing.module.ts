import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VersioningComponent } from './versioning.component';

const routes: Routes = [
  { path: '', component: VersioningComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VersioningRoutingModule {}
