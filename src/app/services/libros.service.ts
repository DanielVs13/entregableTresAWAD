import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private http: HttpClient) { }

  private API_LIBROS = "http://localhost:3001/libro"

  getLibro(): Observable<any>{
    return this.http.get(this.API_LIBROS)
  }

  postLibro(libro:JSON):Observable<any>{
    return this.http.post(this.API_LIBROS, libro)
  }


  getLibroId(id: any):Observable<any>{
    return this.http.get(`${this.API_LIBROS}/${id}`)
  }

  deleteLibro(id:any): Observable<any>{
    return this.http.delete(`${this.API_LIBROS}/${id}`)
  }

  editarLibro(libro: any): Observable<any> {
    return this.http.put(`${this.API_LIBROS}/${libro.id}`, libro);
  }
}


