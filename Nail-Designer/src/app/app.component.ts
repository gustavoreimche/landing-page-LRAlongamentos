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
  @ViewChild('depositionsSection', {static: true, read: ElementRef}) depositionsSection!: ElementRef;
  @ViewChild('doubtsSection', {static: true, read: ElementRef}) doubtsSection!: ElementRef;
  @ViewChild('priceSection', {static: true, read: ElementRef}) priceSection!: ElementRef;

  constructor() {}
  ngOnInit(): void {}

  scrollToHome(): void {
    console.log('Scrolling to home');
    this.homeSection.nativeElement.scrollIntoView({ behavior: 'smooth'});
  }

  scrollToInstructor(): void {
    console.log('Scrolling to instructor');
    this.instructorSection.nativeElement.scrollIntoView({ behavior: 'smooth'});
  }

  scrollToCourse(): void {
    console.log('Scrolling to course');
    this.courseSection.nativeElement.scrollIntoView({ behavior: 'smooth'});
  }

  scrollToCertification(): void {
    console.log('Scrollling to certification');
    this.certificationSection.nativeElement.scrollIntoView({ behavior: 'smooth'});
  }

  scrollToGuarantee(): void {
    console.log('scrolling to guarantee')
    this.guaranteeSection.nativeElement.scrollIntoView({ behavior: 'smooth'});
  }

  scrollToDepositions(): void {
    console.log('Scrolling to depositions');
    this.depositionsSection.nativeElement.scrollIntoView({ behavior: 'smooth'});
  }

  scrollToDoubts(): void {
    console.log('Scrolling to doubts');
    this.doubtsSection.nativeElement.scrollIntoView({ behavior: 'smooth'});
  }

  scrollToPrice(): void {
    console.log('Scrolling to price')
    this.priceSection.nativeElement.scrollIntoView({ behavior: 'smooth'});
  }

}
