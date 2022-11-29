import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './resume/home/home.component';
import { SocialComponent } from './resume/social/social.component';
import { ProfileComponent } from './resume/profile/profile.component';
import { EducationComponent } from './resume/education/education.component';
import { SkillsComponent } from './resume/skills/skills.component';
import { ExperienceComponent } from './resume/experience/experience.component';
import { CertificatesComponent } from './resume/certificates/certificates.component';
import { ProjectsComponent } from './resume/projects/projects.component';
import { CertificateModalComponent } from './resume/certificates/certificate-modal/certificate-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResumeComponent,
    HomeComponent,
    SocialComponent,
    ProfileComponent,
    EducationComponent,
    SkillsComponent,
    ExperienceComponent,
    CertificatesComponent,
    ProjectsComponent,
    CertificateModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
