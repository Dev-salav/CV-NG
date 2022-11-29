import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificatesComponent } from './resume/certificates/certificates.component';
import { EducationComponent } from './resume/education/education.component';
import { HomeComponent } from './resume/home/home.component';
import { ProfileComponent } from './resume/profile/profile.component';
import { ProjectsComponent } from './resume/projects/projects.component';
import { SkillsComponent } from './resume/skills/skills.component';
import { SocialComponent } from './resume/social/social.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'social', component: SocialComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'education', component: EducationComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'certificates', component: CertificatesComponent },
  { path: 'projects', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
