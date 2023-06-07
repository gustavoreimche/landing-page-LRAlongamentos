import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rotas
import { AppRoutingModule } from './app-routing.module';
//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseComponent } from './course/course.component';
import { CertificationComponent } from './certification/certification.component';
import { DepositionsComponent } from './depositions/depositions.component';
import { DoubtsComponent } from './doubts/doubts.component';
import { GuaranteeComponent } from './guarantee/guarantee.component';
import { CourseValueComponent } from './course-value/course-value.component';
import { FooterComponent } from './footer/footer.component';
import { OverInstructorComponent } from './over-instructor/over-instructor.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CourseComponent,
    CertificationComponent,
    DepositionsComponent,
    DoubtsComponent,
    GuaranteeComponent,
    CourseValueComponent,
    FooterComponent,
    OverInstructorComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
