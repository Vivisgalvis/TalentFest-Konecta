import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {
  @Input() element: any

  constructor() { }

  ngOnInit(): void {
  
  }
   
}
