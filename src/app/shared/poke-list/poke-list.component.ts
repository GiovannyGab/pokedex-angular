import { PokemonService } from './../../services/pokemon.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public pokemons:any;
  constructor(
    private pokemonService:PokemonService
  ){


  }
  ngOnInit(): void {
   this.pokemonService.pegarPokemons().subscribe(
  (res)=>{
    this.pokemons = res.results
    console.log(this.pokemons)
  }
   )
  }
}
