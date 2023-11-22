import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoHeaderComponent } from './logo-header/logo-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LogoHeaderComponent,
    PokeSearchComponent,
    PokeListComponent
  ],
  exports:[
    LogoHeaderComponent,
    PokeSearchComponent,
    PokeListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
