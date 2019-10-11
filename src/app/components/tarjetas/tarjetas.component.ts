import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {
@Input()items:[]=[];
  constructor(
    private _router :Router,
  ) { }

  ngOnInit() {
  }

  verArtista(item:any)
  {
    let artistId;

    if (item.type ==='artist') {
      artistId =item.id;
      
    } else {
      
      artistId = item.artists[0].id
    }

    this._router.navigate(['/Artist',artistId]);

    console.log(artistId);
   
  }

}
