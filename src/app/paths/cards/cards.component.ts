import { Component } from "@angular/core";
import { Card } from "src/app/models/card.model";

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss']
  })

export class Cards {
    private cards: Card[];

    public static colors: string[] = [ "red", "yellow", "green", "blue" ];
    public static values: number[] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 20, 20];

    constructor() {
        
    }

}