import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './components/template/banner/banner.component';
import { InstrutoraComponent } from './components/template/instrutora/instrutora.component';
import { CertificadosComponent } from './components/template/certificados/certificados.component';
import { DepoimentosComponent } from './components/template/depoimentos/depoimentos.component';
import { CursosComponent } from './components/template/cursos/cursos.component';
import { GarantiaComponent } from './components/template/garantia/garantia.component';
import { DuvidasComponent } from './components/template/duvidas/duvidas.component';
import { ValoresComponent } from './components/template/valores/valores.component';

const routes: Routes = [
  {path: '', component: BannerComponent },
  {path: 'instrutora', component: InstrutoraComponent },
  {path: 'certificados', component: CertificadosComponent },
  {path: 'depoimentos', component: DepoimentosComponent },
  {path: 'cursos', component: CursosComponent },
  {path: 'garantia', component: GarantiaComponent },
  {path: 'duvidas', component: DuvidasComponent },
  {path: 'valores', component: ValoresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
