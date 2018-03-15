import { ProjectDetailsService } from './project-details.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentSectionComponent } from './content-section/content-section.component';
import { BadgeComponent } from './badge/badge.component';
import { ProjectHistoryComponent } from './project-history/project-history.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddNewProjectComponent } from './add-new-project/add-new-project.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentSectionComponent,
    BadgeComponent,
    ProjectHistoryComponent,
    NewProjectComponent,
    LoginPageComponent,
    AddNewProjectComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'projectDetails',
        component: ContentSectionComponent
      },
      {
        path: 'login',
        component: LoginPageComponent
      },
      {
        path: 'newProject',
        component: AddNewProjectComponent
      },
      {
        path: 'projectHistory',
        component: ProjectHistoryComponent

      }

    ])
  ],
  providers: [
    ProjectDetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
