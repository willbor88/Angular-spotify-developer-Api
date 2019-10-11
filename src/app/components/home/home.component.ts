import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Canciones:any [] = [];
  artists:any[]=[];
  loading: boolean;
  constructor(private _spotifyService:SpotifyService ) 
  { 

    this.loading=true;
   this._spotifyService.getNewReleases().subscribe((data:any )=>{
     
      this.Canciones = data ;
      console.log(data);
      this.loading = false;
          
    
   });

  
   
  }

  ngOnInit() {
  }



  }


