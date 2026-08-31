import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  navLinks = [
    { label: 'Home', fragment: 'top' },
    { label: 'Contact', fragment: 'contact' }
  ];
}
