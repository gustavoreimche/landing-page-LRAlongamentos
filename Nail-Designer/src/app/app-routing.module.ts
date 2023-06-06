import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BannerComponent } from './components/template/banner/banner.component';

const routes: Routes = [
  {path: '', component: BannerComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
