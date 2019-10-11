import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  

  constructor(private http:HttpClient) { }

  getQuery(query:string){
const url = `https://api.spotify.com/v1/${query}`

const HEADERS= new HttpHeaders({
  'Authorization':'Bearer BQDoTYLpcmET7Q9QfFqbygHA2R3fFAzhQiJ7r9k8ozWq_BbV9bHFLhx_31pIi65ZpqcVzN60pYyEqkJjkiZ7RsfUQ9tRER6uJdpc51jf48jsR9isWZF3z-m9E9Zv-T0aGuWndAhPlH0Px_BYMNschhIuB0fvmY9qFg'
  
  
});

return this.http.get(url,{headers:HEADERS});

  }


  getNewReleases(){
    // const HEADERS= new HttpHeaders({
    //   'Authorization':'Bearer BQCNciXhsJmB1QJfgQ7ByQ3xNrOL2tGteS2X5dBFdUpixkqAE2ZLLkT9Bo-DtlizmR7YrUUzYcGE7uSBT32FJ8mY5tQ-vh7rZZK-dcYYLrCT7ilngzHwECodQKtGPSgTuEmjGuPHpt3628QdJV1J6dXNbRJrSVT_AA'
    // })


    return this.getQuery('browse/new-releases')
    // return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers:HEADERS})
    //El map permite filtrar el resultado de arreglo de objetos a un simple arreglo
    .pipe(map((data:any) =>{
    
    return data['albums'].items;
    
    }));

    

  }


  getArtistas(termino:string){
    return this.getQuery(`search?query=${termino}&type=artist&market=US&offset=5&limit=20`)
    // return this.http.get(`https://api.spotify.com/v1/search?query=${termino}&type=artist&market=US&offset=5&limit=10`,{headers:HEADERS})
    .pipe(map((data:any) =>data['artists'].items
        ));

  }

  getArtista(id:string){
    return this.getQuery(`artists/${id}`)
     }


  getTopTrakcs(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe(map((data:any) =>data['tracks']
        ));



  }



}
