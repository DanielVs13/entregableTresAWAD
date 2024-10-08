import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { RecomendadosComponent } from './pages/recomendados/recomendados.component';
import { FormularioEditComponent } from './pages/formularioEdit/formularioEdit.component';
import { LoginComponent } from './pages/login/login.component';
import { GestionlibrosComponent } from './pages/gestionLibro/gestionLibro.component';
import { Error404Component } from './components/error404/error404.component';
import { rolGuard } from './guards/login.guard';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'recomendados', component: RecomendadosComponent },
  {
    path: 'editar/:idLibro',
    component: FormularioEditComponent,
    canActivate: [rolGuard],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'gestion',
    component: GestionlibrosComponent,
    canActivate: [rolGuard],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: Error404Component },
];
