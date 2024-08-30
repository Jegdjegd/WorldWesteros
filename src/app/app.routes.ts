import { Routes } from '@angular/router';
import { SeriesThronesComponent } from './components/series-thrones/series-thrones.component';
import { LibrosThronesComponent } from './components/libros-thrones/libros-thrones.component';
import { CasasThronesComponent } from './components/casas-thrones/casas-thrones.component';
import { DragonesThronesComponent } from './components/dragones-thrones/dragones-thrones.component';
import { HomeThroneComponent } from './components/home-throne/home-throne.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeThroneComponent,
      },
    {
        path: 'libros',
        component: LibrosThronesComponent,
      },
    {
        path: 'series',
        component: SeriesThronesComponent,
      },
    {
        path: 'casas',
        component: CasasThronesComponent,
      },
    {
        path: 'personajes',
        component: CasasThronesComponent,
      },
    {
        path: 'dragones',
        component: DragonesThronesComponent,
      },
    
];
