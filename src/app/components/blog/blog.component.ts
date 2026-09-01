import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogService, BlogPost } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})

export class BlogComponent {
  posts: BlogPost[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getPosts().subscribe(posts => this.posts = posts);
  }
}
