import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioModel } from 'src/app/Modelos/usuario.model';
import { NotificacionesService } from 'src/app/servicios/notificaciones.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  fGroup: FormGroup = new FormGroup({})

  constructor(
    private fb:  FormBuilder,
    private servicioNotificaciones: NotificacionesService
  ) {
  }

  ngOnInit(){
    this.construirFormulario();
  }
  
  construirFormulario(){
    this.fGroup = this.fb.group({
      nombre: ['',[Validators.required]],
      Asunto: ['',[Validators.required]],
      apellidos: ['',[Validators.required]],
      direccion: ['',[Validators.required]],
      telefono: ['',[Validators.required]],
      correo: ['',[Validators.required, Validators.email]],
      contenido: ['',[Validators.required]]
    });
  }

  enviarCorreo(){
    if(this.fGroup.invalid){
      alert("Datos incompletos")
    }else{
      let nombre = this.ObtenerFormGroup['nombre'].value;
      let Asunto = this.ObtenerFormGroup['Asunto'].value;
      let apellidos = this.ObtenerFormGroup['apellidos'].value;
      let direccion= this.ObtenerFormGroup['direccion'].value;
      let telefono = this.ObtenerFormGroup['telefono'].value;
      let correo = this.ObtenerFormGroup['correo'].value;
      let contenido = this.ObtenerFormGroup['contenido'].value;
      console.log("hatsa aqui se llega");
      this.servicioNotificaciones.EnviarCorreo(nombre,Asunto,apellidos,direccion,telefono,correo,contenido).subscribe({
        next:(datos:UsuarioModel)=>{
          console.log(datos)
        },
        error:(err)=>{
          console.log(err);
        }
      });
    }
  }

  get ObtenerFormGroup(){
    return this.fGroup.controls;
  }
}
