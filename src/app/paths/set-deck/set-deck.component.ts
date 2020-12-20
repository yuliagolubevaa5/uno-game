import { Component, OnInit } from "@angular/core";
import { SpecialCard } from "src/app/enums/special-cards.enum";
import { Card } from "src/app/models/card.model";

@Component({
    selector: 'app-set-deck',
    templateUrl: './set-deck.component.html',
    styleUrls: ['./set-deck.component.scss']
  })

const deck: Card[] = [];
const cardsQuantity = 108;

export class SetDeck implements OnInit {
  cards = [];
  specialCards = SpecialCard;
  
    constructor() {
        
    }

    ngOnInit() {
      this.randomCards();
    }

    deckSetter (cardsQuantity, value: Card["value"], color: Card["color"], specialCards) {
      for (let i = 0; i < cardsQuantity; i++) {
        this.cards.push(value, color);
        this.cards.push(specialCards);
      } 
  
      return this.cards;
    }

    randomCards() {
      
    }
}