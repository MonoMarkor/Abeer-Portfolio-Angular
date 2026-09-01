import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Language {
  name: string;
  level: string;
  svg: string;
}

@Component({
  selector: 'app-spoken-languages',
  imports: [CommonModule],
  templateUrl: './spoken-languages.component.html',
  styleUrl: './spoken-languages.component.css'
})
export class SpokenLanguagesComponent {
  languages: Language[] = [
    { name: 'English', level: 'Bilingual', svg: 'gb.svg' },
    { name: 'Urdu', level: 'Native', svg: 'pk.svg' },
    { name: 'German', level: 'C1 Level', svg: 'de.svg' }
  ];
}
