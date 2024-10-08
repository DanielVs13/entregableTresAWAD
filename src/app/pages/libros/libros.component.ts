import { Component } from '@angular/core';
import { TablaLibroComponent } from "../../components/tablaLibro/tablaLibro.component";

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [TablaLibroComponent],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent {

}
