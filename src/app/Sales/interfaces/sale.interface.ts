export interface Sale {
    IdSale:      number;
    Date:        string ;
    TotalValue:  number;
    Sale_Cedula: number;
    Customer?:    null;
    DetailSale?:  any[];
}
