import { Component, ElementRef, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LibrosService } from '../../services/libros.service';

@Component({
  selector: 'app-formularioEdit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formularioEdit.component.html',
  styleUrl: './formularioEdit.component.css',
})
export class FormularioEditComponent {
  libro: any = {
    id: '',
    autor: '',
    titulo: '',
    anio: 0,
    portada: '',
  };

  servicio = inject(LibrosService);
  route = inject(Router);
  ruta = inject(ActivatedRoute);

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.ruta.params.subscribe((p) => {
      const id = p['idLibros'];
      this.servicio.getLibroId(id).subscribe((libro) => {
        this.libro = libro;
      });
    });
  }

  editar(formulario: any) {
    if (formulario.valid) {
      this.servicio.editarLibro(this.libro).subscribe(() => {
        this.route.navigateByUrl('Inicio');
      });
    }
  }
}
