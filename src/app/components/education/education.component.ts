import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})

export class EducationComponent {
  educationList = [
    {
      years: '2020 – 2025',
      location: 'Schmalkalden, Germany',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      institution: 'Schmalkalden University of Applied Sciences',
      image: 'schmalkalden_2.jpg',
      summary: "After visiting the German language course in Berlin, I started my undergraduate studies at Schmalkalden. You might ask how it's like to study in a foreign language in a foreign land... Well it feels foreign - not for everyone, but I took it on, and I am proud of the experience today. Studying here meant a practical, hands-on and real-world application-based curriculum, instead of the more research-focused and theory-intensive approach of traditional German universities.\nDear Prof. Dr. Martin Golz, I want to express my sincere gratitude for your guidance throughout my studies. From your lectures in Artificial Intelligence and Basics of Data Processing to your support during my internship and thesis, your mentorship has been invaluable."
    },
    {
      years: '2026 – now',
      location: 'Erlangen, Germany',
      degree: 'Masters',
      field: 'Computer Science',
      institution: 'Friedrich-Alexander University of Erlangen–Nuremberg',
      image: 'fau_1.jpg',
      summary: 'My bachelors gave me a strong foundation in... I particularly enjoyed... and it taught me...'
    }
  ];

  selectedEdu: any = null;

  openEdu(edu: any) {
    this.selectedEdu = edu;
  }

  closeEdu() {
    this.selectedEdu = null;
  }
}
