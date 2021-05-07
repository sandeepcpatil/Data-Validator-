import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkflowComponent } from './Components/workflow/workflow.component';
import { AddNewComparatorComponent } from './pages/add-new-comparator/add-new-comparator.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/workflow' },
  {path: 'workflow', component: WorkflowComponent},
  {path: 'workflow/add', component: AddNewComparatorComponent},
  // {path: 'workflow/add/new', component: },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
