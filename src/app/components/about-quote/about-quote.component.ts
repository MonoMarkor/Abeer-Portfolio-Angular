import { Component } from '@angular/core';

@Component({
  selector: 'app-about-quote',
  imports: [],
  templateUrl: './about-quote.component.html',
  styleUrl: './about-quote.component.css'
})
export class AboutQuoteComponent {
  imageSrc = 'abeer_1.jpg';
  quote = 'Great games are built one bug fix at a time.';
  name = 'Your Brother\'s Name';
}
