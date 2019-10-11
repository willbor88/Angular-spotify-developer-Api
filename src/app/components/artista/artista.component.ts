import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute} from "@angular/router";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  artista:any= {};
  listo:boolean;
  topTracks:[]=[];
  

  constructor(
    private route:ActivatedRoute,
    private _spotifyService:SpotifyService,
  ) {  this.listo = true;
    this.route.params.subscribe(params => {params['id'];
    this.getArtista(params['id']);
    this.getTopTrakcs(params['id']);
    
  })
  
  }

  ngOnInit() {
  
    
  }

  getArtista(id:string){
    this.listo = true;

    this._spotifyService.getArtista(id).subscribe(

      data =>{
        console.log(data);
        this.artista =data;
        this.listo= false;
      }
    );

  }

  getTopTrakcs(id:string){

    this._spotifyService.getTopTrakcs(id).subscribe(data =>{
      console.log(data);
      this.topTracks=data;
     

    });
  }



}
