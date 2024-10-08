import { Component } from '@angular/core';
import { TablaGestionComponent } from '../../components/tablaGestion/tablaGestion.component';

@Component({
  selector: 'app-gestionlibros',
  standalone: true,
  imports: [TablaGestionComponent],
  templateUrl: './gestionLibro.component.html',
  styleUrl: './gestionLibro.component.css',
})
export class GestionlibrosComponent {}
