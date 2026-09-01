import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'blog', component: BlogComponent},
  { path: 'blog/:slug', component: BlogPageComponent }
];
