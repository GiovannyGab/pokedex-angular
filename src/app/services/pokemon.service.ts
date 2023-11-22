import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, tap ,map} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url:string = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0.'
  constructor(private http:HttpClient) { }

  public pegarPokemons():Observable<any>{
    return this.http.get<any>(this.url).pipe(
      tap(
        res => res
      ),
      tap(
        res =>{
         res.results.map(
        (  resPokemons:any )=>{
          this.apiGetPokemonsStats(resPokemons.url).subscribe(
            res => resPokemons.status = res
          )
          }
         )
        }
      )
    )

  }
  public apiGetPokemonsStats(url:string):Observable<any>{
    return this.http.get<any>(url).pipe(
      map(
        res => res

      )
      )
  }
}
