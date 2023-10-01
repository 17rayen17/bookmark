import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';

const routes: Routes = [
  {path:'',component:NavBarComponent,children:[
    {path:'',loadChildren:()=> import('./views/front/main-page/main-page.module').then(m=>m.MainPageModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
