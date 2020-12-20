import { NgModule } from "@angular/core";
import { Cards } from "../cards/cards.component";
import { DiscardDeck } from "./discard-deck.component";

@NgModule({
    declarations: [
        DiscardDeck,
    ],
    imports: [ Cards],
    exports: [
        DiscardDeck
    ],
  })
  
  export class CardsModule { }