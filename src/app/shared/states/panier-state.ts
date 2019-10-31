import {NgxsModule,Action,Selector,State, StateContext} from '@ngxs/store';
import {PanierStateModel} from './panier-state-model';
import {AddArticle} from '../actions/article-action';
import {DelArticle} from '../actions/delArticle-action';
import {DtlArticle} from '../actions/article-action';
import { Produit } from '../../models/Produit';

@State<PanierStateModel>({
    name: 'panier',
    defaults: {
        panier: [],
        detail: new Produit()
    }
})

export class PanierState {

  @Selector()
    static getPanier(state: PanierStateModel) {
        return state.panier;
    }

@Action(AddArticle)
    add({getState, patchState }: StateContext<PanierStateModel>, { payload }: AddArticle) {
        const state = getState();
        patchState({
            panier: [...state.panier, payload]
        });
    }

@Action(DelArticle)
    del ({getState, patchState }: StateContext<PanierStateModel>, { payload }: DelArticle) {
        const state = getState();
        
        patchState({
            panier: [...(state.panier.slice(0,-1))]
        });
    }  
    
@Action(DtlArticle)
    detail({getState, patchState }: StateContext<PanierStateModel>, { payload }: DtlArticle) {
        patchState({
            detail: payload
        });
    }
}
