import { Component, OnInit, Input} from '@angular/core';
import Quill from 'quill';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {
  @Input() element: any

  constructor() { }

  ngOnInit(): void {
  console.log(this.element)
  }
   
  render(art){
    document.getElementById("container_cards").style.display = "none";
    document.getElementById("arrow_back").style.display = "inline-block";
    document.getElementById("contenedor").style.display = "block";
    let article = JSON.parse(art.obj).ops
    var quill = new Quill('#contenedor', {
      theme: 'bubble'
    });
    
    for (let i = 0; i < article.length; i++) {
      console.log(article[i])
      if (article[i]["insert"].image) {
        article[i]["insert"]["image"] = "https://nik.grupokonecta.co:7070/" + article[i]["insert"].image
      }
    }

    try{
      quill.setContents([{ insert: '\n' }]);
      quill.updateContents(article);
    }
    catch(err){
    
    }
    console.log('artic', article)
  }
}
