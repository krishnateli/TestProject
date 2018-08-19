import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: 'projects', loadChildren: './modules/projects/projects.module#ProjectsModule' },
  { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
  { path: '**', redirectTo: 'not-found' },
];

// , { enableTracing: true } { path: 'PublicationWizard', loadChildren: 'app/publication-wizard/publication-wizard.module#PublicationWizardModule', canActivate: [PwGuard] },


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
