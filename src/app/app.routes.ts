import { Routes } from '@angular/router';
import { PersonajesComponent } from './cards/personajes/personajes.component';
import { LibrosComponent } from './cards/libros/libros.component';
import { SeriesComponent } from './cards/series/series.component';
import { ExtrasComponent } from './cards/extras/extras.component';
import { DragonesComponent } from './cards/dragones/dragones.component';
import { CardHousesComponent } from './cards/card-houses/card-houses.component';
import { InicioComponent } from './cards/inicio/inicio.component';

export const routes: Routes = [

    { path: '',component: InicioComponent, title : 'World Westeros home'},
    { path: 'series',component: SeriesComponent},
    { path: 'libros',component: LibrosComponent},
    { path: 'extras',component: ExtrasComponent},
    { path: 'casas',component: CardHousesComponent},
    { path: 'dragones',component: DragonesComponent},
    { path: 'personajes',component: PersonajesComponent},
    
];
