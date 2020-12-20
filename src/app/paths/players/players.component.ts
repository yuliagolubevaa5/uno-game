import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Card } from "src/app/models/card.model";
import { Player } from "src/app/models/player.model";

@Component({
    selector: 'app-players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.scss']
  })

export class Players implements OnInit{
    @Input() name: Player["name"];
    @Input() playersNumber: number;
    @Output() pass: EventEmitter<void> = new EventEmitter<void>();
    availableCards: Card[] = [];
    
    constructor() {}

    ngOnInit() {}

    getPlayerName(name) {
        if (this.name.length == 0) {
            console.log("Пожалуйста, введите своё имя");
        }
        return this.name;
    }

    onPass() {
        this.pass.emit();
    }

    hasAvailableCard(card: Card) {
        if (!card) return false;
    
        return this.availableCards.some(
          (c) => c.value === card.value && c.color === card.color,
        );
      }
}