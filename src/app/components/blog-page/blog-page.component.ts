import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { marked } from 'marked';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BlogService } from '../../services/blog.service';
import hljs from 'highlight.js/lib/core';


import typescript from 'highlight.js/lib/languages/typescript';
import css from 'highlight.js/lib/languages/css';
import xml from 'highlight.js/lib/languages/xml'; // Covers HTML/XML
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';


hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('ts', typescript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('js', javascript);
hljs.registerLanguage('json', json);

marked.use({
  renderer: {
    code({ text, lang }: { text: string; lang?: string }) {
      const language = lang && hljs.getLanguage(lang) ? lang : 'plaintext';
      const highlighted = hljs.highlight(text, { language }).value;
      return `<pre><code class="hljs language-${language}">${highlighted}</code></pre>`;
    }
  }
});


@Component({
  selector: 'app-blog-page',
  imports: [CommonModule],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.css'
})

export class BlogPageComponent {
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
