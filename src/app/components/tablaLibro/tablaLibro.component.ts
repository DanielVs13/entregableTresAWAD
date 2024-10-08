import { Component, inject } from '@angular/core';
import { LibrosService } from '../../services/libros.service';

@Component({
  selector: 'app-tablaLibro',
  standalone: true,
  imports: [],
  templateUrl: './tablaLibro.component.html',
  styleUrl: './tablaLibro.component.css'
})
export class TablaLibroComponent {
  servicio = inject(LibrosService)
  libros:any

  ngOnInit(){
    this.servicio.getLibro().subscribe(a =>{
      this.libros = a
    })
  }

  delete(id: any){
    this.servicio.deleteLibro(id).subscribe()
      alert("Eliminado")
  }
}

