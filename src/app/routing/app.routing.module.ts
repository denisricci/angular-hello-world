import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExemploComponent} from '../exemplo/exemplo.component';
import {HomeComponent} from '../home/home.component';

const routes: Routes = [{
  path: '', component: HomeComponent
}, {
  path: 'exemplo', component: ExemploComponent
}];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
