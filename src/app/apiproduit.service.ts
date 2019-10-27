import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Produit } from './models/Produit';


@Injectable()
export class ApiproduitService {

  constructor(private http:HttpClient) { }
    public getProduits () : Observable<Produit[]> {
        return this.http.get<Produit[]>(environment.backendProduit);
    }
}