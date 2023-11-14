import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './publico/paginaMaestra/encabezado/encabezado.component';
import { PiePaginaComponent } from './publico/paginaMaestra/pie-pagina/pie-pagina.component';
import { RutaNoEncontradaComponent } from './publico/errores/ruta-no-encontrada/ruta-no-encontrada.component';
import { ErrorSistemaComponent } from './publico/errores/error-sistema/error-sistema.component';
import { InicioComponent } from './publico/inicio/inicio.component';
import { ObjetivosComponent } from './publico/objetivos/objetivos.component';
import { ContactoComponent } from './publico/contacto/contacto.component';
import { LineasInvestigacionComponent } from './publico/lineas-investigacion/lineas-investigacion.component';
import { MetodologiaComponent } from './publico/metodologia/metodologia.component';
import { PlanEstudiosComponent } from './publico/plan-estudios/plan-estudios.component';
import { ProcesoAdmisionComponent } from './publico/proceso-admision/proceso-admision.component';
import { TesisComponent } from './publico/tesis/tesis.component';
import { SeminariosComponent } from './publico/seminarios/seminarios.component';
import { BlogComponent } from './publico/blog/blog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PiePaginaComponent,
    RutaNoEncontradaComponent,
    ErrorSistemaComponent,
    InicioComponent,
    ObjetivosComponent,
    ContactoComponent,
    LineasInvestigacionComponent,
    MetodologiaComponent,
    PlanEstudiosComponent,
    ProcesoAdmisionComponent,
    TesisComponent,
    SeminariosComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
