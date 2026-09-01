import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})

export class BlogService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>('blogs/index.json');
  }

  getPostContent(slug: string): Observable<string> {
    return this.http.get(`blogs/${slug}.md`, { responseType: 'text' });
  }
}
