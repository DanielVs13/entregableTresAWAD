import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LibrosService } from '../../services/libros.service';
import { FormsModule } from '@angular/forms';
import { FormularioComponent} from '../../pages/formulario/formulario.component';

@Component({
  selector: 'app-tablaGestion',
  standalone: true,
  imports: [FormularioComponent, RouterLink, FormsModule],
  templateUrl: './tablaGestion.component.html',
  styleUrl: './tablaGestion.component.css'
})
export class TablaGestionComponent {
  ruta = inject(Router)

  cerrarSesion(){
    localStorage.removeItem('login')
    this.ruta.navigateByUrl('home')
    location.reload()
  }
  servicios = inject(LibrosService)
  libros : any

  ngOnInit(){
    this.servicios.getLibro().subscribe(p=>{
      this.libros = p
    })
  }
  delete(autor: any){
      this.servicios.deleteLibro(autor).subscribe()
      alert("Eliminado")
      location.reload()

  }
}
