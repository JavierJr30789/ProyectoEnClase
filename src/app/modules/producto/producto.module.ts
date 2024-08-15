import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ARCHIVO DE RUTAS
import { ProductoRoutingModule } from './producto-routing.module';

// VISTAS
import { ProductoComponent } from './pages/producto/producto.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { AlimentacionComponent } from './pages/alimentacion/alimentacion.component';
import { JuguetesComponent } from './pages/juguetes/juguetes.component';
import { CardComponent } from './components/card/card.component';
import { CardAlimentacionComponent } from './components/card-alimentacion/card-alimentacion.component';
import { CardIndumentariaComponent } from './components/card-indumentaria/card-indumentaria.component';
import { CardJuguetesComponent } from './components/card-juguetes/card-juguetes.component';
import { CardProductoComponent } from './components/card-producto/card-producto.component';

@NgModule({
  declarations: [
    ProductoComponent,
    IndumentariaComponent,
    AlimentacionComponent,
    JuguetesComponent,
    CardComponent,
    CardAlimentacionComponent,
    CardIndumentariaComponent,
    CardJuguetesComponent,
    CardProductoComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  exports: [
    ProductoComponent,
    IndumentariaComponent,
    AlimentacionComponent,
    JuguetesComponent,
    CardComponent,
    CardJuguetesComponent
  ]
})
export class ProductoModule { }
