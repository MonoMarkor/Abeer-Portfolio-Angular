import { Component } from '@angular/core';

@Component({
  selector: 'app-game-showcase',
  imports: [],
  templateUrl: './game-showcase.component.html',
  styleUrl: './game-showcase.component.css'
})
export class GameShowcaseComponent {
  videoSrc = '/moeez_sample.mp4';

  onLearnMoreClick(): void {
    // Route to a project detail page, or scroll to a section, or open an external link
    // e.g. this.router.navigate(['/projects/game-name']);
  }
}
