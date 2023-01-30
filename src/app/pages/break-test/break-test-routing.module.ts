import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakTestComponent } from './break-test.component';

const routes: Routes = [
  { path: '', component: BreakTestComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreakTestRoutingModule {}
