import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Main',
    },
    children: [
      {
        path: 'products',
        component: ProductComponent,
        data: {
          title: 'Produtos',
        },
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
