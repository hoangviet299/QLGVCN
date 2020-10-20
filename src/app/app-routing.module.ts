import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LophocComponent} from './lophoc/lophoc.component';
import {KhoaComponent} from './khoa/khoa.component';


const routes: Routes = [
{path:'lophoc',component:LophocComponent},
{path:'khoa',component:KhoaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
