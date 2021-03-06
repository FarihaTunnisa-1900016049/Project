import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material';
import { GalleryComponent } from './gallery/gallery.component';
import { ImagesComponent } from './images/images.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { FileUploaderComponent } from './file-uploader/file-uploader.component'; 
import { HomeComponent } from '../public/home/home.component';
import { PerpusComponent } from './perpus/perpus.component';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent,
      },
      {
        path:'product',
        component:ProductComponent
      }, 
      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path: 'images',
        component: ImagesComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'perpus',
        component: PerpusComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/admin/dashboard'
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/public/home'
      }
    ]
  },

]

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    GalleryComponent,
    ImagesComponent,
    ProductComponent,
    ProductDetailComponent,
    FileUploaderComponent,
    PerpusComponent
  ],
  entryComponents:[
    ImagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    ImageCropperModule,
    FormsModule
  ]
})
export class AdminModule { }
