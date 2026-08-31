import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

export interface Project {
  title: string;
  subtitle: string;
  category: string;
  year: string;
  technologies: string;
  image: string;
  summary: string;
  link?: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})

export class ProjectsComponent {

  @ViewChild('projectsTrack') projectsTrack!: ElementRef<HTMLDivElement>;

  projectsList: Project[] = [
    {
      title: 'Game Engine Renderer',
      subtitle: 'Real-time Vulkan graphics pipeline',
      category: 'Game Dev',
      year: '2025',
      technologies: 'C++ · Vulkan · GLSL',
      image: 'assets/portfolio/project_game.jpg',
      summary: 'Architected and built a custom C++ real-time rendering engine using Vulkan. Implemented deferred shading, dynamic shadow maps, PBR materials, and custom shader compilation pipelines.',
      link: 'https://github.com/yourbrother/vulkan-engine'
    },
    {
      title: 'AI Signal Classifier',
      subtitle: 'EEG data processing model',
      category: 'Data Science',
      year: '2024',
      technologies: 'Python · PyTorch · Scikit-Learn',
      image: 'assets/portfolio/project_ai.jpg',
      summary: 'Developed a deep neural network model for multi-channel brainwave analysis and signal classification, achieving high accuracy in pattern detection under noisy conditions.',
      link: 'https://github.com/yourbrother/eeg-classifier'
    },
    {
      title: 'Portfolio Web Application',
      subtitle: 'Modern Angular showcase platform',
      category: 'Web Dev',
      year: '2026',
      technologies: 'Angular · TypeScript · CSS3',
      image: 'assets/portfolio/project_web.jpg',
      summary: 'A fast, responsive single-page web app presenting interactive portfolio sections, modern BEM/CSS designs, custom sliders, and smooth modal integrations.'
    },
    {
      title: 'Distributed Chat System',
      subtitle: 'Fault-tolerant peer-to-peer network',
      category: 'Systems',
      year: '2023',
      technologies: 'Go · gRPC · Protocol Buffers',
      image: 'assets/portfolio/project_systems.jpg',
      summary: 'Built a decentralized chat system using Go and gRPC. Implemented Raft consensus for leader election and state machine replication across nodes.'
    }
  ];

  selectedProject: Project | null = null;

  scrollLeft(): void {
    if (this.projectsTrack) {
      this.projectsTrack.nativeElement.scrollBy({ left: -340, behavior: 'smooth' });
    }
  }

  scrollRight(): void {
    if (this.projectsTrack) {
      this.projectsTrack.nativeElement.scrollBy({ left: 340, behavior: 'smooth' });
    }
  }

  openProject(project: Project): void {
    this.selectedProject = project;
  }

  closeProject(): void {
    this.selectedProject = null;
  }
}
