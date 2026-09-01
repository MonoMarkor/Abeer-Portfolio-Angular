---
title: My First Post
date: 2026-08-21
description: A short summary of what this post is about.
---

# My First Post

This is the actual content of the blog, written in **markdown**.

Here is a sentence in English, followed by Arabic:

<div dir="rtl" lang="ar" class="arabic-text">
مرحبا، هذا نص باللغة العربية
</div>

Back to English here.

![Diagram of the architecture](/blogs/images/wikiimages-earth-74015_1920.jpg)

above is a sample image

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { marked } from 'marked';
import hljs from 'highlight.js';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-page',
  imports: [CommonModule],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent implements OnInit {
  htmlContent: SafeHtml | string = '';

  constructor(private route: ActivatedRoute, private blogService: BlogService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug')!;
    this.blogService.getPostContent(slug).subscribe(async markdown => {
      // strip frontmatter block before rendering
      const content = markdown.replace(/^---[\s\S]*?---/, '');
      const rawHtml = await marked(content);
      this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(rawHtml);
    });
  }
}
```


code ended
