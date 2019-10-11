import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artists:any[]=[];
  loading: boolean;
  constructor(private _spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino:string){
this.loading = true;
this._spotifyService.getArtistas(termino).subscribe((data:any)=>{

  console.log(data);
  this.artists=data
   this.loading = false;
})
  }

}
