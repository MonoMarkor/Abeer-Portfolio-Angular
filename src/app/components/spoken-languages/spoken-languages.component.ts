import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Language {
  name: string;
  level: string;
}

@Component({
  selector: 'app-spoken-languages',
  imports: [CommonModule],
  templateUrl: './spoken-languages.component.html',
  styleUrl: './spoken-languages.component.css'
})
export class SpokenLanguagesComponent {
  languages: Language[] = [
    { name: 'English', level: 'Bilingual' },
    { name: 'Urdu', level: 'Native' },
    { name: 'German', level: 'C1 Level' }
  ];
}
