import { Component, OnInit } from '@angular/core';

import { ArticlesService} from '../services/articles.services'

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(private articleS: ArticlesService ) { }

  ngOnInit() {
    this.articleS.getAll();

    const observable = this. articleS.buildObservable();

    observable.subscribe((data) => {
      console.log(data);
    });
  }
}
