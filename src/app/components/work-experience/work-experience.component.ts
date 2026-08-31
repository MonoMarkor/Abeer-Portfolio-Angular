import { Component, OnInit, OnDestroy } from '@angular/core';

interface SlideImage {
  src: string;
  caption?: string;
}

@Component({
  selector: 'app-work-experience',
  imports: [],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})

export class WorkExperienceComponent implements OnInit, OnDestroy {

  images: SlideImage[] = [
    { src: 'MediTech_1.jpg', caption: 'MediTech' },
    { src: 'MediTech_2.png', caption: 'Internal tool UI' },
    // { src: 'assets/images/work/photo-2.jpg', caption: 'Team demo day' },
    // { src: 'assets/images/work/screenshot-2.jpg', caption: 'Dashboard feature' },
  ];

  currentIndex = 0;
  private slideIntervalMs = 4000;
  private intervalId?: ReturnType<typeof setInterval>;

  get currentImage(): SlideImage {
    return this.images[this.currentIndex];
  }

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => this.next(), this.slideIntervalMs);
  }

  stopAutoSlide(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.resetAutoSlide();
  }

  goTo(index: number): void {
    this.currentIndex = index;
    this.resetAutoSlide();
  }

  private resetAutoSlide(): void {
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}
