import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Produit } from '../models/Produit';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-vue-produit',
  templateUrl: './vue-produit.component.html',
  styleUrls: ['./vue-produit.component.css']
})
export class VueProduitComponent implements OnInit {

  produit : Produit[];
  filteredProduits : Produit[];
  private _searchTerm : string;

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

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.apiService.getProduits().subscribe(
      produits =>{
        this.produit = produits as Produit[]
        this.filteredProduits = this.produit;
      }
    );
    
  }

}
