//using my.bookshop as my from '../db/data-model';
using my.bookshop as db from '../db/data-model';
service CatalogService {
    //@readonly entity Books as projection on my.Books;
    entity dummy  {
        name:String;
        
    }
    entity dummyService as projection on dummy;
    entity Books._service as select from db.Books;
    entity author._service as projection on db.author;

}
