import { PoductComponent } from './components/poduct/poduct.component';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';

export const route: Routes = [
  {
    path: '*',
    component: AppComponent,
  },
  {
    path: 'product',
    loadChildren: () =>
      import('../app/components/poduct/poduct.module').then(
        (m) => m.PoductModule
      ),
  },
];
