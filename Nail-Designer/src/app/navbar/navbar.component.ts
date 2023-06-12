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
  @Output() guaranteeClick = new EventEmitter();
  @Output() doubtsClick = new EventEmitter();
  @Output() depositionsClick = new EventEmitter();
  @Output() priceClick = new EventEmitter();

  public logoImage = 'assets/img/logo.png';
  public navbarCollapsed = true;

  constructor(private router: Router) {}

  onHomeClick(): void {
    console.log('Home clicked');
    this.homeClick.emit();
  }
  onInstructorClick(): void {
    console.log('Instructor clicked');
    this.instructorClick.emit();
  }
  onCourseClick(): void {
    console.log('Course clicked');
    this.courseClick.emit();
  }
  onCertificationClick(): void {
    console.log('Certification clicked');
    this.certificationClick.emit();
  }
  onGuaranteeClick(): void {
    console.log('Guarantee clicked');
    this.guaranteeClick.emit();
  }
  onDoubtsClick(): void {
    console.log('Doubts clicked');
    this.doubtsClick.emit();
  }
  onPriceClick(): void {
    console.log(' Price clicked');
    this.priceClick.emit();
  }
  toggleNavbar(): void {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

}
