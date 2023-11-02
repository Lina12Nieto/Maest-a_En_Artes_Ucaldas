import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './publico/inicio/inicio.component';
import { RutaNoEncontradaComponent } from './publico/errores/ruta-no-encontrada/ruta-no-encontrada.component';
import { ObjetivosComponent } from './publico/objetivos/objetivos.component';
import { ContactoComponent } from './publico/contacto/contacto.component';
import { LineasInvestigacionComponent } from './publico/lineas-investigacion/lineas-investigacion.component';
import { MetodologiaComponent } from './publico/metodologia/metodologia.component';
import { PlanEstudiosComponent } from './publico/plan-estudios/plan-estudios.component';
import { ProcesoAdmisionComponent } from './publico/proceso-admision/proceso-admision.component';
import { SeminariosComponent } from './publico/seminarios/seminarios.component';
import { TesisComponent } from './publico/tesis/tesis.component';
import { BlogComponent } from './publico/blog/blog.component';

const routes: Routes = [
  {
    path:"inicio",
    component: InicioComponent
  },
  {
    path:"",
    pathMatch:"full",
    redirectTo:"inicio"
  },
  {
    path:"objetivos",
    component:ObjetivosComponent
  },
  {
    path:"contacto",
    component:ContactoComponent
  },
  {
    path:"lineasInvestigacion",
    component:LineasInvestigacionComponent
  },
  {
    path:"metodologia",
    component:MetodologiaComponent
  },
  {
    path:"procesoDeAdmision",
    component:ProcesoAdmisionComponent
  },
  {
    path:"seminarios",
    component:SeminariosComponent
  },
  {
    path:"tesis",
    component:TesisComponent
  },
  {
    path:"PlanEstudios",
    component:PlanEstudiosComponent
  },
  {
    path:"blog",
    component:BlogComponent
  },
  {
    path:"**",
    component: RutaNoEncontradaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
