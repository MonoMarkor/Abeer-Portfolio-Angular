import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-showcase',
  imports: [],
  templateUrl: './game-showcase.component.html',
  styleUrl: './game-showcase.component.css'
})
export class GameShowcaseComponent {
  videoSrc = '/moeez_sample.mp4';

  constructor(private router: Router){}

  onLearnMoreClick(): void {
    this.router.navigate(['/blog/PingPong']);
  }
}
