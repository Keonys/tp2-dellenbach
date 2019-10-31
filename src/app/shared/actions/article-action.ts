import { Produit } from "../../models/Produit";

export class AddArticle {
    static readonly type = '[Article] Add';

    constructor(public payload: Produit) {}
    
}

export class DtlArticle {
    static readonly type = '[Article] Dtl';

    constructor(public payload: Produit) {}
    
}