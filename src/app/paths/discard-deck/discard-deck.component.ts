import { Component } from "@angular/core";
import { Card } from "src/app/models/card.model";

@Component({
    selector: 'app-discard-deck',
    templateUrl: './discard-deck.component.html',
    styleUrls: ['./discard-deck.component.scss']
  })

export class DiscardDeck {
    private cards: Card[];

    constructor() {
        
    }

}