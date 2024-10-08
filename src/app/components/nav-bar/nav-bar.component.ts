import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  servicio = inject(LoginService)
  constructor(private Router:Router){}
  token: any

  logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("rol")
    window.location.href=('login')
  }

  ocultar = localStorage.getItem('token')
  rol= localStorage.getItem('rol')
  }
