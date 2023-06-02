import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { BannerComponent } from './components/template/banner/banner.component';
import { InstrutoraComponent } from './components/template/instrutora/instrutora.component';
import { CursosComponent } from './components/template/cursos/cursos.component';
import { CertificadosComponent } from './components/template/certificados/certificados.component';
import { DepoimentosComponent } from './components/template/depoimentos/depoimentos.component';
import { GarantiaComponent } from './components/template/garantia/garantia.component';
import { DuvidasComponent } from './components/template/duvidas/duvidas.component';
import { ValoresComponent } from './components/template/valores/valores.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    InstrutoraComponent,
    CursosComponent,
    CertificadosComponent,
    DepoimentosComponent,
    GarantiaComponent,
    DuvidasComponent,
    ValoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
