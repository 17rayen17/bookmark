import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { ExtentionComponent } from './extention/extention.component';
import { QuestionComponent } from './question/question.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'features', component:FeaturesComponent},
  {path:'extention', component:ExtentionComponent},
  {path:'question', component:QuestionComponent},
  {path:'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
