import { Component } from '@angular/core';
import { Store } from '@ngxs/store';

import { AddArticle } from './shared/actions/article-action';
import { Produit } from './models/Produit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TP2-WEB-DELLENBACH';
  id : string;
  nom : string;
  prix : string;

  constructor (private store : Store) {}

  onClick () {
    this.addArticle (this.id, this.nom, this.prix);
  }

  addArticle(id, nom, prix) { this.store.dispatch(new AddArticle({ id, nom, prix })); }
}
