import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  @Output() homeClick = new EventEmitter();
  @Output() instructorClick = new EventEmitter();
  @Output() courseClick = new EventEmitter();
  @Output() certificationClick = new EventEmitter();
  @Output() graranteeClick = new EventEmitter();
  @Output() depositionsClick = new EventEmitter();

  public logoImage = 'assets/img/logo.png';
  public navbarCollapsed = true;

  constructor(private router: Router) {}

  onContactClick(): void {
    console.log('Contact clicked');
    this.contactClick.emit();
  }

  onHomeClick(): void {
    console.log('Home clicked');
    this.homeClick.emit();
  }

  onAboutClick(): void {
    console.log('About clicked');
    this.aboutClick.emit();
  }

  onServicesClick(): void {
    console.log('Services clicked');
    this.servicesClick.emit();
  }

  toggleNavbar(): void {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
  
}
