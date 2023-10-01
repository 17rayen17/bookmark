import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { ExtentionComponent } from './extention/extention.component';
import { QuestionComponent } from './question/question.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    HomeComponent,
    FeaturesComponent,
    ExtentionComponent,
    QuestionComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule
  ]
})
export class MainPageModule { }
