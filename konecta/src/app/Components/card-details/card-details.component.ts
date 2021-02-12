import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Article } from '../../Model/content.model';
import { DataService } from '../../Services/data.service';
import Quill from 'quill';


@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.sass']
})
export class CardDetailsComponent implements OnInit {
  @ViewChild('container') container: ElementRef;
  id: any
  data$
  elements: Article = {}
  constructor(private dataService: DataService, private _route: ActivatedRoute) {
    this.id = this._route.snapshot.paramMap.get('id')
    this.showDetail(this.id)
   }

  ngOnInit(): void {
  }
  
  showDetail(id) {
    this.data$ = this.dataService.getDataId(id)
    .pipe(
      map((element) => {
        const quill = new Quill(this.container.nativeElement, {
          theme: 'bubble'
        });
        console.log(element)
        const article = JSON.parse(element['obj']).ops
        this.elements = {
          title: element.title,
          tag: element.tags,
          content: article,
          like: element.likes,
          dislike: element.dislikes
        }
        for (let i = 0; i < article.length; i++) {
          if (article[i]["insert"].image) {
            article[i]["image"] = "https://nik.grupokonecta.co:7070/" + article[i]["insert"].image
          }
        }
        try{
          quill.setContents([{ insert: '\n' }]);
          quill.updateContents(article);
        }
        catch(err){
        }
      })
    )
    .subscribe((data: any) => {
      return data
    })
  }
}
