import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { Produit } from '../../models/Produit';
import { AddArticle } from '../../shared/actions/article-action';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  produit: Produit;


  constructor(private store : Store) { 
    this.store.select(state => state.panier.detail).subscribe(detail => this.produit = detail);
    console.log(this.produit);
  }

  onClick(id, nom, prix) {
    this.addArticle(id, nom, prix);
  }

  addArticle(id, nom, prix) { this.store.dispatch(new AddArticle({ id, nom, prix })); }

  ngOnInit() {
  }

}
