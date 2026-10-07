import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CommerceService {
    
  private apiUrl = 'http://localhost:5142/api/Api';

  constructor(private http: HttpClient) {}

  subirArchivo(archivo: File): Observable<string> {

    const formData = new FormData();

    formData.append('archivo', archivo);

    return this.http.post(
      `${this.apiUrl}/upload`,
      formData,
      {
        responseType: 'text'
      }
    );
  }

  procesarFecha(fecha: string): Observable<any> {

    return this.http.post(
      `${this.apiUrl}/process`,
      fecha,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}
