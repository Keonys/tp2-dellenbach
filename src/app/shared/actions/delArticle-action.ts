import { Article } from '../models/Article'

export class DelArticle {
    static readonly type = '[Article] Del';

    constructor(public payload: Article) {}
    
}