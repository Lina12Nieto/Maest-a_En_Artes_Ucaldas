import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from 'src/app/Modelos/usuario.model';
import {Observable, catchError, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {
  //urlBase:string = ConfiguracionRutasNotificaciones.urlNotificaciones;
  private urlNotificaciones = 'http://localhost:7082/Notificaciones/enviar-correo';
  
  constructor( private http : HttpClient ) { }

  EnviarCorreo(nombre: string, Asunto: string, apellidos: string, direccion: string, telefono: string, correo: string, contenido: string): Observable<UsuarioModel> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Agrega cualquier encabezado adicional que pueda necesitar tu servidor.
    });
    console.log(this.urlNotificaciones);
  
    return this.http.post<UsuarioModel>(`${this.urlNotificaciones}`, {
      correoDestino: correo,
      nombreDestino: nombre,
      apellidosDestino: apellidos,
      departamentoDestino: direccion,
      telefonoDestino: telefono,
      asuntoCorreo: Asunto,
      ContenidoCorreo: contenido,
    }, { headers }).pipe(
      catchError((error) => {
        console.error('Error en la solicitud:', error);
        return throwError('Algo salió mal en la solicitud.');
      })
    );
  }

  /*
  EnviarCorreo(nombre:string,Asunto:string,apellidos:string,direccion:string,telefono:string,correo:string,contenido:string): Observable<UsuarioModel>{
    console.log(this.urlNotificaciones);
    return this.http.post<UsuarioModel>(`${this.urlNotificaciones}`,{
      correoDestino: correo, 
      nombreDestino:nombre,  
      apellidosDestino:apellidos, 
      departamentoDestino:direccion, 
      telefonoDestino:telefono, 
      asuntoCorreo:Asunto,
      ContenidoCorreo:contenido,
    });
  }*/
}
