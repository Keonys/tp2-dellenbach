import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Article } from '../shared/models/Article';
import { DelArticle } from '../shared/actions/delArticle-action';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  nbArticles : number;
  panier: Observable<Article>;

  constructor(private store: Store) {
    this.store.select(state => state.panier.panier).subscribe (u => this.nbArticles = u.length);
    this.panier = this.store.select(state => state.panier.panier);
  }

  onDelete() {
    this.delArticle ();
  }

  delArticle() { this.store.dispatch(new DelArticle()); }

  ngOnInit() {
  }

}
