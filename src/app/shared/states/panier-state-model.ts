import {Article} from '../models/Article';
import { Produit } from '../../models/Produit';


export class PanierStateModel {
  panier: Article[];
  detail: Produit;
}