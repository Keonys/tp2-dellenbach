import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Article } from '../shared/models/Article';

@Component({
  selector: 'app-tetiere',
  templateUrl: './tetiere.component.html',
  styleUrls: ['./tetiere.component.css']
})
export class TetiereComponent implements OnInit {

  nbArticles : number;
  panier: Observable<Article>;

  constructor(private store: Store) {
    this.store.select(state => state.panier.panier).subscribe (u => this.nbArticles = u.length);
    this.panier = this.store.select(state => state.panier.panier);
  }

  ngOnInit() {
  }

}
