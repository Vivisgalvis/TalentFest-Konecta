import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
import Quill from 'quill';
import { Observable, pipe } from 'rxjs';
import { elementAt, map } from 'rxjs/operators';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.sass']
})
export class CardDetailsComponent implements OnInit {
  @ViewChild('container') container: ElementRef;
  id: any
  data$

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
        let arrData = element['obj'];
        const fix_article = JSON.parse(arrData).ops;
        for (let i = 0; i < fix_article.length; i++) {
          if (fix_article[i]["insert"].image) {
            fix_article[i]["insert"].image = "https://nik.grupokonecta.co:7070/" + fix_article[i]["insert"].image
          }
        }
        try{
          quill.setContents([{ insert: '\n' }]);
          quill.updateContents(fix_article);
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
