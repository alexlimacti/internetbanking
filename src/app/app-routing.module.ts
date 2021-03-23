import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './component/content/content.component';
import { CadastroClientesComponent } from './component/cadastro-clientes/cadastro-clientes.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'cadastro-clientes', component: CadastroClientesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
