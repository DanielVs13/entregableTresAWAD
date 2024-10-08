import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user: any;
  constructor(private http: HttpClient) {}

  private API_USUARIOS = 'http://localhost:3000/users';
  private API_LOGIN = 'http://localhost:3000/login';

  postUser2(usuarios: any): Observable<any> {
    return this.http.post(this.API_USUARIOS, usuarios);
  }

  getUsuarios(): Observable<any> {
    return this.http.get(this.API_USUARIOS);
  }

  getUsuarioUnico(id: any): Observable<any> {
    return this.http.get(`${this.API_USUARIOS}/${id}`);
  }

  deleteUsuario(id: any): Observable<any> {
    return this.http.delete(`${this.API_USUARIOS}/${id}`);
  }

  obtenerPermisos(): Observable<any[]> {
    return this.http.get<any[]>(this.API_USUARIOS);
  }

  putUsuarios(usuarios: any): Observable<any> {
    return this.http.put(`${this.API_USUARIOS}/${usuarios.id}`, usuarios);
  }

  postUsers(usuario: any): Observable<any> {
    return this.http.post(this.API_LOGIN, usuario);
  }
}
