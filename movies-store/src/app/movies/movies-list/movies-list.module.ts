import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { RouterModule, Routes } from '@angular/router';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';

const routes: Routes = [
  {
    path: '', component: MoviesListComponent, children: [
			{ path: '', redirectTo: 'movies' },
		]
  }
];

@NgModule({
  declarations: [
    MoviesListComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    InputTextModule,
    SkeletonModule,
    TableModule,
    ModalModule.forRoot(),
    RouterModule.forChild( routes ),
  ],	
  providers: [
		BsModalRef,
	],
})
export class MoviesListModule { }
