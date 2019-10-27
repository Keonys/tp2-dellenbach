import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs';
import { Client } from './models/Client';
import { Produit } from './models/Produit';
import { environment } from '../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

    public getClients () : Observable<Client[]> {
        return this.http.get<Client[]>(environment.backendClient);
    }
    public getProduits () : Observable<Produit[]> {
        return this.http.get<Produit[]>(environment.backendProduit);
    }
}