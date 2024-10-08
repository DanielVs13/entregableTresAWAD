import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  servicio = inject(LoginService)

  email: any;
  password: any;
  token: any;
  rol:any
  ruta = inject(Router)


  login(formulario: any) {
    this.servicio.postUsers(formulario.value).subscribe(p => {
      this.token = p.accessToken
      this.rol = p.roles


      if (this.token != '') {
        localStorage.setItem("token", 'true')

        window.location.href = 'catalogo'
      }if(this.rol !=''){
        localStorage.setItem("rol",'admin')
        window.location.href = 'inicio'
      }

    }
    )
}
}
