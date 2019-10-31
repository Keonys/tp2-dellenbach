import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../api.service';
import { Produit } from '../../models/Produit';
import { filter } from 'rxjs/operators';
import { PanierState } from '../../shared/states/panier-state';
import { Store } from '@ngxs/store';
import { AddArticle, DtlArticle } from '../../shared/actions/article-action';
import {Router} from '@angular/router'

@Component({
  selector: 'app-vue-produit',
  templateUrl: './vue-produit.component.html',
  styleUrls: ['./vue-produit.component.css']
})
export class VueProduitComponent implements OnInit {

  produit : Produit[];
  filteredProduits : Produit[];
  private _searchTerm : string;
  

  constructor(private apiService : ApiService, private store : Store, private router : Router) { }

  get searchTerm():string{
    return this._searchTerm;
  }

  set searchTerm(value: string){
    this._searchTerm = value;
    this.filteredProduits = this.filterProduits(value);
  }

  filterProduits(searchParam: string): Produit[]{
    return this.produit.filter(produit =>
      produit.nom.toLowerCase().indexOf(searchParam.toLowerCase()) !== -1);
  }

  onClick(id, nom, prix) {
    this.addArticle(id, nom, prix);
  }

  addArticle(id, nom, prix) { this.store.dispatch(new AddArticle({ id, nom, prix })); }

  detailArticle(produit: Produit) {
    this.dtlArticle(produit);
    this.router.navigate(['/detail']);
  }

  dtlArticle(produit: Produit) { this.store.dispatch(new DtlArticle(produit)) }

  ngOnInit() {
    this.apiService.getProduits().subscribe(
      produits => {
        this.produit = produits as Produit[]
        this.filteredProduits = this.produit;
      }
    );
    
  }

}
