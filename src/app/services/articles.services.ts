import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

class Repo{
  constructor(
    public id : string,
    public name: string
  ){}
}

@Injectable()
export class ArticlesService{
  public articlesCount : number = 0;

  public reposObserver : Observable<Repo[]>;

  public mainReo : Repo;

  constructor(private http: HttpClient){
    this.countRepos();
    this.getMainRepo();
  }

  getAll(){
    // https://api.github.com/users/codigofacilito/repos
    // https://wwww.codigofacilito.com/articulos.json
    this.reposObserver=this.http.get('https://api.github.com/users/codigofacilito/repos')
      .pipe(
        .map((data : Object[])=>  {
          return data.map((r : any)=> new Repo(r.id,r.name));
          }
        )
        //.take(1)
        //.first()
      );
      this.reposObserver.subscribe(
        (data : Object[]) => {
        this.articlesCount=data.length;
        console.log(data);
      }
    );
  }

  buildObservable() : Observable<any>{
    return Observable.create(function(observer){
        //setInterval(() => observer.next("Hola "+ new Date()), 1000);
        // {{launchDate | date:"dd MMM y HH:mm:ss" |uppercase}}
    });
  }

  countRepos(){
    fetch('https://api.github.com/users/codigofacilito/repos')
      .then(response => response.json())
      .then(repos => console.log(repos))
  }

  getMainRepo(){
    fetch('https://api.github.com/users/codigofacilito/repos')
      .then(response => response.json())
      .then(repos => console.log(repos))
  }
}
