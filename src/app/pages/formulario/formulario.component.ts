import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LibrosService } from '../../services/libros.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  id: string = '';
  autor: string = '';
  libro: string = '';
  anioPublicacion: number = new Date().getFullYear();

  servicio = inject(LibrosService);
  route = inject(Router);

  guardar(formulario: any) {
    if (formulario.valid) {
      const nuevoLibro = {
        id: this.id,
        autor: this.autor,
        libro: this.libro,
        anioPublicacion: this.anioPublicacion,
      };
    }
  }
}
