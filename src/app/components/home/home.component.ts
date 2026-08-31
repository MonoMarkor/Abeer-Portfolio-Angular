import { Component } from '@angular/core';
import { GameShowcaseComponent } from '../game-showcase/game-showcase.component';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';
import { EducationComponent } from '../education/education.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SocialComponent } from '../social/social.component';
import { AboutQuoteComponent } from '../about-quote/about-quote.component';
import { SpokenLanguagesComponent } from '../spoken-languages/spoken-languages.component';
import { TechStackComponent } from '../tech-stack/tech-stack.component';
import { CvDownloadComponent } from '../cv-download/cv-download.component';

@Component({
  selector: 'app-home',
  imports: [GameShowcaseComponent,
            AboutQuoteComponent,
            WorkExperienceComponent,
            EducationComponent,
            ProjectsComponent,
            SocialComponent,
            SpokenLanguagesComponent,
            TechStackComponent,
            CvDownloadComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
