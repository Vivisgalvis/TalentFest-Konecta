import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Quill from 'quill';
import { Observable } from 'rxjs';
import { elementAt, map } from 'rxjs/operators';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.sass']
})
export class CardDetailsComponent implements OnInit {
  id: any
  data$

  constructor(private dataService: DataService, private _route: ActivatedRoute) {
    this.id = this._route.snapshot.paramMap.get('id')
    console.log(this.id)
    // this.show(this.id)
   }

  ngOnInit(): void {
  }
  
  // show(id) {
  //   this.data$ = this.dataService.getDataId(id)
  //   console.log(this.data$)
  //   .subscribe((data: any) => {
  //     map((element) => {
  //       console.log(element)
  //       let arrData = element.obj;
  //       const fix_article = JSON.parse(arrData).ops;
  //       for (let i = 0; i < fix_article.length; i++) {
  //         if (fix_article[i]["insert"].image) {
  //           fix_article[i]["insert"].image = "https://nik.grupokonecta.co:7070/" + fix_article[i]["insert"].image
  //         }
  //       }
  //     })

  //   const quill = new Quill('#contenedor', {
  //     theme: 'bubble'
  //   });
    
  //   try{
  //     quill.setContents([{ insert: '\n' }]);
  //     quill.updateContents(fix_article);
  //   }
  //   catch(err){
  //   }
  // }

}
