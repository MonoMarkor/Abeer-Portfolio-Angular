import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface TechItem {
  name: string;
  category: 'Languages' | 'Frameworks' | 'Technologies' | 'Databases';
  level: 'Advanced' | 'Proficient' | 'Intermediate';
  description?: string;
}

@Component({
  selector: 'app-tech-stack',
  imports: [CommonModule],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css'
})
export class TechStackComponent {
  categories: string[] = ['All', 'Languages', 'Frameworks', 'Technologies', 'Databases'];
  activeCategory = 'All';

  techItems: TechItem[] = [
    { name: 'C++', category: 'Languages', level: 'Advanced', description: 'Systems programming & computer graphics' },
    { name: 'TypeScript', category: 'Languages', level: 'Advanced', description: 'Scalable frontend application architecture' },
    { name: 'Python', category: 'Languages', level: 'Proficient', description: 'Data processing & machine learning algorithms' },
    { name: 'Go', category: 'Languages', level: 'Intermediate', description: 'Distributed systems & microservices' },
    { name: 'Angular', category: 'Frameworks', level: 'Advanced', description: 'Enterprise Web Applications & Components' },
    { name: 'Vulkan API', category: 'Frameworks', level: 'Intermediate', description: 'Graphics pipelines & shaders' },
    { name: 'Docker / Git', category: 'Technologies', level: 'Proficient', description: 'Containerization & version control workflows' },
    { name: 'PostgreSQL', category: 'Databases', level: 'Proficient', description: 'Relational data modeling & complex queries' },
    { name: 'MongoDB', category: 'Databases', level: 'Intermediate', description: 'NoSQL document-based data management' }
  ];

  get filteredTech(): TechItem[] {
    if (this.activeCategory === 'All') {
      return this.techItems;
    }
    return this.techItems.filter(item => item.category === this.activeCategory);
  }

  setActiveCategory(category: string): void {
    this.activeCategory = category;
  }
}
