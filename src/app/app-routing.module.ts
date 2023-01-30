import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'break-test',
    loadChildren: () =>
      import('./pages/break-test/break-test.module').then(
        (m) => m.BreakTestModule
      ),
  },
  {
    path: 'versioning',
    loadChildren: () =>
      import('./pages/versioning/versioning.module').then(
        (m) => m.VersioningModule
      ),
  },
  { path: '**', redirectTo: 'break-test' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
