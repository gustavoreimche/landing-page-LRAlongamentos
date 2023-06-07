import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('homeSection', {static: true, read: ElementRef}) homeSection!: ElementRef;
  @ViewChild('instructorSection', {static: true, read: ElementRef}) instructorSection!: ElementRef;
  @ViewChild('courseSection', {static: true, read: ElementRef}) courseSection!: ElementRef;
  @ViewChild('certificationSection', {static: true, read: ElementRef}) certificationSection!: ElementRef;
  @ViewChild('guaranteeSection', {static: true, read: ElementRef}) guaranteeSection!: ElementRef;
  @ViewChild('depositionSection', {static: true, read: ElementRef}) depositionSection!: ElementRef;
  @ViewChild('doubtsSection', {static: true, read: ElementRef}) doubtsSection!: ElementRef;
  @ViewChild('priceSection', {static: true, read: ElementRef}) priceSection!: ElementRef;
  
  constructor() {}
  ngOnInit(): void {}
  
  scrollToHome(): void {
    console.log('Scrollling to home');
    this.homeSection.nativeElement.scrollIntoView({ behavior: 'smooth'});
  }

  scrollToInstructor(): void {
    console.log('Scrollling to instruction');
    this.instructorSection.nativeElement.scrollIntoView({ behavior: 'smooth'});
  }

  scrollToCourse(): void {
    console.log('Scrollling to course');
    this.courseSection.nativeElement.scrollIntoView({ behavior: 'smooth'});
  }

  scrollToCertification(): void {
    console.log('Scrollling to certification');
    this.certificationSection.nativeElement.scrollIntoView({ behavior: 'smooth'});
  }

  guaranteeSection(): void {
    console.log('Scrollling to guarantee');
    this.guaranteeSection.nativeElement.scrollIntoView({ behavior: 'smooth'});
  }

  depositionSection(): void {
    console.log('Scrollling to deposition');
    this.depositionSection.nativeElement.scrollIntoView({ behavior: 'smooth'});
  }

  doubtsSection(): void {
    console.log('Scrollling to doubts');
    this.doubtsSection.nativeElement.scrollIntoView({ behavior: 'smooth'});
  }

  priceSection(): void {
    console.log('Scrollling to price');
    this.priceSection.nativeElement.scrollIntoView({ behavior: 'smooth'});
  }

}
